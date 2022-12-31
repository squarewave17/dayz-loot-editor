import { defineStore } from "pinia";
import useFileSystem from "../composables/useFileSystem";
import useSystemDetect from "../composables/useSystemDetect";
import useDataConversion from "../composables/useDataConversion";
import { useStorage } from "@vueuse/core";

export const useGlobalStore = defineStore("globalStore", {
  state: () => {
    return {
      version: "0.0.1",
      isLoading: false,
      hasData: false,
      browser: "",
      protocol: "",
      realData: "",
      stockData: [],
      liveData: [],
      currentSelection: 0,
    };
  },
  actions: {
    async initStore(data) {
      // const localState = useStorage("dayz-loot-session", {});
      const { isBrowser, isSsl } = useSystemDetect();
      this.browser = isBrowser();
      this.protocol = isSsl();
      // console.log(localState.value);
      const test = await fetch("dayzStock/types.xml").then((response) =>
        response.text()
      );
      this.stockData = await this.processInputData(test);
    },
    async loadFile(file) {
      this.isLoading = true;

      const globalStore = useGlobalStore();
      const fileSystem = useFileSystem();
      const { toJSON, toLiveData } = useDataConversion();

      let data;
      if (!globalStore.fileAccess) {
        data = file;
      } else {
        data = await fileSystem.loadData();
      }

      this.realData = toJSON(data);

      this.liveData = this.realData.types.type.map((entry, index) => {
        return toLiveData(entry, index);
      });
      this.isLoading = false;
      this.hasData = true;
    },
    async prepareSave() {
      const { toRealData, toXML } = useDataConversion();
      const types = this.liveData.map((entry) => {
        return toRealData(entry);
      });
      this.realData.types.type = types;
      return toXML(this.realData);
    },
    async processInputData(data) {
      const { toJSON, toLiveData } = useDataConversion();
      const convertedData = toJSON(data);

      const liveData = convertedData.types.type.map((entry, index) => {
        return toLiveData(entry, index);
      });

      return liveData;
    },
  },
  /**
   * Getters aren't functions, so params arent passed as you'd expect
   */
  getters: {
    working: (state) => {
      if (state.isLoading === true || state.isSaving === true) {
        return true;
      } else {
        return false;
      }
    },
    fileAccess: (state) => {
      if (state.browser === "firefox" || state.protocol === "http") {
        return false;
      } else {
        return true;
      }
    },
    outputData: (state) => {
      const { toRealData, toXML } = useDataConversion();
      return toXML(state.realData);
    },
    checkIfData: (state) => {
      if (state.realData === "") {
        return false;
      } else {
        return true;
      }
    },
    stockStats: (state) => {
      let totalNominal = 0;
      let totalMin = 0;
      let totalQmin = 0;
      let totalQmax = 0;
      state.stockData.forEach((entry) => {
        totalNominal += +entry.nominal;
        totalMin += +entry.min;
        if (entry.quantmax !== "-1") {
          totalQmin += +entry.quantmax;
          totalQmax += +entry.quantmin;
        }
      });

      const total = {
        nominal: totalNominal,
        min: totalMin,
        qmin: totalQmin,
        qmax: totalQmax,
      };

      return total;
    },
    liveStats: (state) => {
      let totalNominal = 0;
      let totalMin = 0;
      let totalQmin = 0;
      let totalQmax = 0;
      state.liveData.forEach((entry) => {
        totalNominal += +entry.nominal;
        totalMin += +entry.min;
        if (entry.quantmax !== "-1") {
          totalQmin += +entry.quantmax;
          totalQmax += +entry.quantmin;
        }
      });

      const total = {
        nominal: totalNominal,
        min: totalMin,
        qmin: totalQmin,
        qmax: totalQmax,
      };
      return total;
    },
  },
});
