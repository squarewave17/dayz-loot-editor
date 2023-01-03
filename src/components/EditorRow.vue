<template>
  <div class="editor-row" :class="{ isSelected: selected }" @click="select">
    <div className="table-name editor-cell">{{ name }}</div>
    <div
      className="table-nominal editor-cell"
      v-if="globalStore.columnVisibility.nominal"
    >
      <InputNumber :value="nominal" @change="updateNominal" />
    </div>
    <div
      className="table-min editor-cell"
      v-if="globalStore.columnVisibility.min"
    >
      <InputNumber :value="min" @change="updateMin" />
    </div>
    <div
      className="table-lifetime editor-cell"
      v-if="globalStore.columnVisibility.lifetime"
    >
      <InputNumber :value="lifetime" @change="updateLifetime" />
    </div>
    <div
      className="table-restock editor-cell"
      v-if="globalStore.columnVisibility.restock"
    >
      <InputNumber :value="restock" @change="updateRestock" />
    </div>

    <div
      className="table-quant editor-cell no-border"
      v-if="globalStore.columnVisibility.quantity"
    >
      <InputNumber
        :value="qmin"
        min="0"
        max="100"
        @change="updateQmin"
        :disabled="qmin === '-1'"
      />
    </div>
    <div
      className="table-quant editor-cell"
      v-if="globalStore.columnVisibility.quantity"
    >
      <InputNumber
        :value="qmax"
        min="0"
        max="100"
        @change="updateQmax"
        :disabled="qmax === '-1'"
      />
    </div>
    <div
      className="table-cost editor-cell "
      v-if="globalStore.columnVisibility.cost"
    >
      {{ cost }}
    </div>
    <div
      className="table-tag editor-cell no-border justify-center"
      v-if="globalStore.columnVisibility.flags"
    >
      <input
        type="checkbox"
        :checked="countInCargo"
        className="checkbox checkbox-sm"
        @change="updateCargo"
      />
    </div>
    <div
      className="table-tag editor-cell no-border justify-center"
      v-if="globalStore.columnVisibility.flags"
    >
      <input
        type="checkbox"
        :checked="countInHoarder"
        className="checkbox checkbox-sm"
        @change="updateHoarder"
      />
    </div>
    <div
      className="table-tag editor-cell no-border justify-center"
      v-if="globalStore.columnVisibility.flags"
    >
      <input
        type="checkbox"
        :checked="countInMap"
        className="checkbox checkbox-sm"
        @change="updateMap"
      />
    </div>
    <div
      className="table-tag editor-cell no-border justify-center"
      v-if="globalStore.columnVisibility.flags"
    >
      <input
        type="checkbox"
        :checked="countInPlayer"
        className="checkbox checkbox-sm"
        @change="updatePlayer"
      />
    </div>
    <div
      className="table-tag editor-cell no-border justify-center"
      v-if="globalStore.columnVisibility.flags"
    >
      <input
        type="checkbox"
        :checked="crafted"
        className="checkbox checkbox-sm"
        @change="updateCrafted"
      />
    </div>
    <div
      className="table-tag editor-cell justify-center"
      v-if="globalStore.columnVisibility.flags"
    >
      <input
        type="checkbox"
        :checked="deloot"
        className="checkbox checkbox-sm"
        @change="updateDeloot"
      />
    </div>
    <div
      className="table-category editor-cell"
      v-if="globalStore.columnVisibility.category"
    >
      <!-- {{ capitalize(category[0]) }} -->
      {{ subCategory }}
    </div>
    <div
      className="table-usage table-name-coast editor-cell no-border justify-center"
      v-if="globalStore.columnVisibility.usage"
    >
      <input
        type="checkbox"
        v-model="areas.coast"
        className="checkbox checkbox-sm"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-farm editor-cell no-border justify-center"
      v-if="globalStore.columnVisibility.usage"
    >
      <input
        type="checkbox"
        v-model="areas.farm"
        className="checkbox checkbox-sm"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-firefighter editor-cell no-border justify-center"
      v-if="globalStore.columnVisibility.usage"
    >
      <input
        type="checkbox"
        v-model="areas.firefighter"
        className="checkbox checkbox-sm"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-hunting editor-cell no-border justify-center"
      v-if="globalStore.columnVisibility.usage"
    >
      <input
        type="checkbox"
        v-model="areas.hunting"
        className="checkbox checkbox-sm"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-industrial editor-cell no-border justify-center"
      v-if="globalStore.columnVisibility.usage"
    >
      <input
        type="checkbox"
        v-model="areas.industrial"
        className="checkbox checkbox-sm"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-medic editor-cell no-border justify-center"
      v-if="globalStore.columnVisibility.usage"
    >
      <input
        type="checkbox"
        v-model="areas.medic"
        className="checkbox checkbox-sm"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-military editor-cell no-border justify-center"
      v-if="globalStore.columnVisibility.usage"
    >
      <input
        type="checkbox"
        v-model="areas.military"
        className="checkbox checkbox-sm"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-office editor-cell no-border justify-center"
      v-if="globalStore.columnVisibility.usage"
    >
      <input
        type="checkbox"
        v-model="areas.office"
        className="checkbox checkbox-sm"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-police editor-cell no-border justify-center"
      v-if="globalStore.columnVisibility.usage"
    >
      <input
        type="checkbox"
        v-model="areas.police"
        className="checkbox checkbox-sm"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-prison editor-cell no-border justify-center"
      v-if="globalStore.columnVisibility.usage"
    >
      <input
        type="checkbox"
        v-model="areas.prison"
        className="checkbox checkbox-sm"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-school editor-cell no-border justify-center"
      v-if="globalStore.columnVisibility.usage"
    >
      <input
        type="checkbox"
        v-model="areas.school"
        className="checkbox checkbox-sm"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-town editor-cell no-border justify-center"
      v-if="globalStore.columnVisibility.usage"
    >
      <input
        type="checkbox"
        v-model="areas.town"
        className="checkbox checkbox-sm"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-village editor-cell no-border justify-center"
      v-if="globalStore.columnVisibility.usage"
    >
      <input
        type="checkbox"
        v-model="areas.village"
        className="checkbox checkbox-sm"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-contaminated editor-cell no-border justify-center"
      v-if="globalStore.columnVisibility.usage"
    >
      <input
        type="checkbox"
        v-model="areas.contaminated"
        className="checkbox checkbox-sm"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-contaminated editor-cell justify-center"
      v-if="globalStore.columnVisibility.usage"
    >
      <input
        type="checkbox"
        v-model="areas.underground"
        className="checkbox checkbox-sm"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-value editor-cell no-border justify-center"
      v-if="globalStore.columnVisibility.value"
    >
      <input
        type="checkbox"
        v-model="tier.tier1"
        className="checkbox checkbox-sm"
        @change="updateTier"
      />
    </div>
    <div
      className="table-value editor-cell no-border justify-center"
      v-if="globalStore.columnVisibility.value"
    >
      <input
        type="checkbox"
        v-model="tier.tier2"
        className="checkbox checkbox-sm"
        @change="updateTier"
      />
    </div>
    <div
      className="table-value editor-cell no-border justify-center"
      v-if="globalStore.columnVisibility.value"
    >
      <input
        type="checkbox"
        v-model="tier.tier3"
        className="checkbox checkbox-sm"
        @change="updateTier"
      />
    </div>
    <div
      className="table-value editor-cell justify-center"
      v-if="globalStore.columnVisibility.value"
    >
      <input
        type="checkbox"
        v-model="tier.unique"
        className="checkbox checkbox-sm"
        @change="updateTier"
      />
    </div>
  </div>
</template>

<script setup>
  import { ref, toRef, computed, onMounted, watchEffect } from "vue";
  import InputNumber from "../components/InputNumber.vue";
  import { useGlobalStore } from "../store/globalStore";
  import useStringHelpers from "../composables/useStringHelpers";
  /**
   * store
   */
  const globalStore = useGlobalStore();

  const props = defineProps({
    name: {
      type: String,
      default: "",
    },
    nominal: {
      type: String,
      default: "",
    },
    lifetime: {
      type: String,
      default: "",
    },
    restock: {
      type: String,
      default: "",
    },
    min: {
      type: String,
      default: "",
    },
    qmin: {
      type: String,
      default: "",
    },
    qmax: {
      type: String,
      default: "",
    },
    cost: {
      type: String,
      default: "",
    },
    countInCargo: {
      type: Boolean,
      default: false,
    },
    countInHoarder: {
      type: Boolean,
      default: false,
    },
    countInMap: {
      type: Boolean,
      default: false,
    },
    countInPlayer: {
      type: Boolean,
      default: false,
    },
    crafted: {
      type: Boolean,
      default: false,
    },
    deloot: {
      type: Boolean,
      default: false,
    },
    category: {
      type: Array,
      default: [],
    },
    subCategory: {
      type: String,
      default: "-",
    },
    tag: {
      type: Array,
      default: [],
    },
    usage: {
      type: Array,
      default: [],
    },
    id: {
      type: Number,
      default: 0,
    },
    value: {
      type: Array,
      default: [],
    },
    display: {
      type: Object,
      default: {},
    },
  });

  const id = toRef(props, "id");
  const usage = toRef(props, "usage");
  const value = toRef(props, "value");

  /**
   * Event Handlers
   */
  const updateNominal = (e) => {
    globalStore.liveData[id.value].nominal = e.target.value;
    if (
      +globalStore.liveData[id.value].min >
      +globalStore.liveData[id.value].nominal
    ) {
      globalStore.liveData[id.value].min =
        globalStore.liveData[id.value].nominal;
    }
  };
  const updateLifetime = (e) => {
    globalStore.liveData[id.value].lifetime = e.target.value;
  };
  const updateRestock = (e) => {
    globalStore.liveData[id.value].restock = e.target.value;
  };
  const updateMin = (e) => {
    globalStore.liveData[id.value].min = e.target.value;
    if (
      +globalStore.liveData[id.value].min >=
      +globalStore.liveData[id.value].nominal
    ) {
      const numberFix = +globalStore.liveData[id.value].min + 1;
      globalStore.liveData[id.value].nominal = numberFix.toString();
    }
  };
  const updateQmin = (e) => {
    globalStore.liveData[id.value].quantmin = e.target.value;
    if (
      +globalStore.liveData[id.value].quantmin >
      +globalStore.liveData[id.value].quantmax
    ) {
      globalStore.liveData[id.value].quantmax =
        globalStore.liveData[id.value].quantmin;
    }
  };
  const updateQmax = (e) => {
    globalStore.liveData[id.value].quantmax = e.target.value;
    if (
      +globalStore.liveData[id.value].quantmax <
      +globalStore.liveData[id.value].quantmin
    ) {
      globalStore.liveData[id.value].quantmin =
        globalStore.liveData[id.value].quantmax;
    }
  };
  const updateCargo = (e) => {
    globalStore.liveData[id.value].countInCargo = e.target.checked;
  };
  const updateHoarder = (e) => {
    globalStore.liveData[id.value].countInHoarder = e.target.checked;
  };
  const updateMap = (e) => {
    globalStore.liveData[id.value].countInMap = e.target.checked;
  };
  const updatePlayer = (e) => {
    globalStore.liveData[id.value].countInPlayer = e.target.checked;
  };
  const updateCrafted = (e) => {
    globalStore.liveData[id.value].crafted = e.target.checked;
  };
  const updateDeloot = (e) => {
    globalStore.liveData[id.value].deloot = e.target.checked;
  };

  /**
   * Computed
   */
  // Usage
  const areas = ref({
    coast: false,
    farm: false,
    firefighter: false,
    hunting: false,
    industrial: false,
    medic: false,
    military: false,
    office: false,
    police: false,
    prison: false,
    school: false,
    town: false,
    village: false,
    contaminated: false,
    underground: false,
  });

  onMounted(() => {
    truthLoop(usage, areas);
    truthLoop(value, tier);
  });

  // value
  const tier = ref({
    tier1: false,
    tier2: false,
    tier3: false,
    unique: false,
  });

  const truthLoop = (arr, fn) => {
    arr.value.forEach((v) => {
      if (v !== []) {
        const x = v.toLowerCase();
        fn.value[x] = true;
      }
    });
  };

  const updateTier = () => {
    const arr = [];
    //check each value in tier and if the value is true, push the key to the array
    for (const [key, value] of Object.entries(tier.value)) {
      if (value) {
        arr.push(capitalize(key));
      }
    }
    globalStore.liveData[id.value].value = arr;
  };

  const updateUsage = () => {
    const arr = [];
    //check each value in tier and if the value is true, push the key to the array
    for (const [key, value] of Object.entries(areas.value)) {
      if (value) {
        arr.push(capitalize(key));
      }
    }
    globalStore.liveData[id.value].usage = arr;
  };

  /**
   * Composables
   */
  const { capitalize } = useStringHelpers();

  /**
   * Handle Selection
   */

  const selected = computed(() => {
    if (globalStore.currentSelection === id.value) {
      return true;
    } else {
      return false;
    }
  });

  const select = () => {
    globalStore.currentSelection = id.value;
  };
</script>

<style scoped>
  .editor-row > div {
    cursor: pointer;
  }
  .editor-row.isSelected > div {
    background-color: var(--color-dark-50);
  }
</style>
