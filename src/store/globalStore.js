import { defineStore } from "pinia";
import useSystemDetect from "../composables/useSystemDetect";
import useDataConversion from "../composables/useDataConversion";

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
      wasClean: false,
      refFile: "livonia",
      currentSelection: 0,
      columnVisibility: {
        nominal: true,
        lifetime: true,
        restock: true,
        min: true,
        quantity: true,
        cost: false,
        flags: true,
        category: true,
        tag: true,
        usage: true,
        value: true,
      },
      categoryFilter: {
        guns: true,
        ammo: true,
        "gun accesories": true,
        explosives: true,
        food: true,
        clothes: true,
        tools: true,
        containers: true,
        animals: true,
        medical: true,
        vehicles: true,
        zombies: true,
        vehiclesparts: true,
        "show everything": false,
      },
      search: "",
    };
  },
  actions: {
    initStore() {
      const { isBrowser, isSsl } = useSystemDetect();
      this.browser = isBrowser();
      this.protocol = isSsl();
    },
    async loadFile(file) {
      this.isLoading = true;

      await this.loadRef();

      const data = file;
      this.initRealData(data);
      this.isLoading = false;
      this.hasData = true;
    },
    initRealData(data) {
      const { toJSON, toLiveData } = useDataConversion();
      this.realData = toJSON(data);

      this.liveData = this.realData.types.type.map((entry, index) => {
        return toLiveData(entry, index);
      });
    },
    async startClean() {
      console.log("clean from store");
      await this.loadRef();
      this.liveData = JSON.parse(JSON.stringify(this.stockData));
      this.hasData = true;
    },
    async loadRef() {
      let data;
      if (this.refFile !== "custom") {
        data = await fetch(`dayzStock/${this.refFile}/types.xml`).then(
          (response) => response.text()
        );
        this.stockData = await this.processInputData(data);
        if (this.wasClean) {
          this.initRealData(data);
        }
      }
    },
    async loadCustomRef(file) {
      let data = file;
      this.stockData = await this.processInputData(data);

      this.initRealData(data);
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
