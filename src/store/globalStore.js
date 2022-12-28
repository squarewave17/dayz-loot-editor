import { defineStore } from "pinia";
import useFileSystem from "../composables/useFileSystem";
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
      liveData: [],
    };
  },
  actions: {
    initStore(data) {
      const { isBrowser, isSsl } = useSystemDetect();
      this.browser = isBrowser();
      this.protocol = isSsl();
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
      const { toXML } = useDataConversion();
      return toXML(state.realData);
    },
    checkIfData: (state) => {
      if (state.realData === "") {
        return false;
      } else {
        return true;
      }
    },
    dataLength: (state) => {
      return state.realData.types.type.length;
    },
  },
});
