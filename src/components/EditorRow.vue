<template>
  <div className="table-row">
    <div className="table-name table-cell">{{ name }}</div>
    <div className="table-nominal table-cell" v-if="display.nominal">
      <InputNumber :value="nominal" @change="updateNominal" />
    </div>
    <div className="table-lifetime table-cell" v-if="display.lifetime">
      <InputNumber :value="lifetime" @change="updateLifetime" />
    </div>
    <div className="table-restock table-cell" v-if="display.restock">
      <InputNumber :value="restock" @change="updateRestock" />
    </div>
    <div className="table-min table-cell" v-if="display.min">
      <InputNumber :value="min" @change="updateMin" />
    </div>
    <div className="table-quant table-cell" v-if="display.quantity">
      <InputNumber
        :value="qmin"
        @change="updateQmin"
        :disabled="qmin === '-1'"
      />
    </div>
    <div className="table-quant table-cell" v-if="display.quantity">
      <InputNumber
        :value="qmax"
        @change="updateQmin"
        :disabled="qmax === '-1'"
      />
    </div>
    <div className="table-cost table-cell" v-if="display.cost">{{ cost }}</div>
    <div className="table-tag table-cell" v-if="display.flags">
      <input
        type="checkbox"
        :checked="countInCargo"
        className="checkbox"
        @change="updateCargo"
      />
    </div>
    <div className="table-tag table-cell" v-if="display.flags">
      <input
        type="checkbox"
        :checked="countInHoarder"
        className="checkbox"
        @change="updateHoarder"
      />
    </div>
    <div className="table-tag table-cell" v-if="display.flags">
      <input
        type="checkbox"
        :checked="countInMap"
        className="checkbox"
        @change="updateMap"
      />
    </div>
    <div className="table-tag table-cell" v-if="display.flags">
      <input
        type="checkbox"
        :checked="countInPlayer"
        className="checkbox"
        @change="updatePlayer"
      />
    </div>
    <div className="table-tag table-cell" v-if="display.flags">
      <input
        type="checkbox"
        :checked="crafted"
        className="checkbox"
        @change="updateCrafted"
      />
    </div>
    <div className="table-tag table-cell" v-if="display.flags">
      <input
        type="checkbox"
        :checked="deloot"
        className="checkbox"
        @change="updateDeloot"
      />
    </div>
    <div className="table-category table-cell" v-if="display.category">
      {{ capitalize(category[0]) }}
    </div>
    <div
      className="table-usage table-name-coast table-cell"
      v-if="display.usage"
    >
      <input
        type="checkbox"
        v-model="areas.coast"
        className="checkbox"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-farm table-cell"
      v-if="display.usage"
    >
      <input
        type="checkbox"
        v-model="areas.farm"
        className="checkbox"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-firefighter table-cell"
      v-if="display.usage"
    >
      <input
        type="checkbox"
        v-model="areas.firefighter"
        className="checkbox"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-hunting table-cell"
      v-if="display.usage"
    >
      <input
        type="checkbox"
        v-model="areas.hunting"
        className="checkbox"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-industrial table-cell"
      v-if="display.usage"
    >
      <input
        type="checkbox"
        v-model="areas.industrial"
        className="checkbox"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-medic table-cell"
      v-if="display.usage"
    >
      <input
        type="checkbox"
        v-model="areas.medic"
        className="checkbox"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-military table-cell"
      v-if="display.usage"
    >
      <input
        type="checkbox"
        v-model="areas.military"
        className="checkbox"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-office table-cell"
      v-if="display.usage"
    >
      <input
        type="checkbox"
        v-model="areas.office"
        className="checkbox"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-police table-cell"
      v-if="display.usage"
    >
      <input
        type="checkbox"
        v-model="areas.police"
        className="checkbox"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-prison table-cell"
      v-if="display.usage"
    >
      <input
        type="checkbox"
        v-model="areas.prison"
        className="checkbox"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-school table-cell"
      v-if="display.usage"
    >
      <input
        type="checkbox"
        v-model="areas.school"
        className="checkbox"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-town table-cell"
      v-if="display.usage"
    >
      <input
        type="checkbox"
        v-model="areas.town"
        className="checkbox"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-village table-cell"
      v-if="display.usage"
    >
      <input
        type="checkbox"
        v-model="areas.village"
        className="checkbox"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-contaminated table-cell"
      v-if="display.usage"
    >
      <input
        type="checkbox"
        v-model="areas.contaminated"
        className="checkbox"
        @change="updateUsage"
      />
    </div>
    <div
      className="table-usage table-name-contaminated table-cell"
      v-if="display.usage"
    >
      <input
        type="checkbox"
        v-model="areas.underground"
        className="checkbox"
        @change="updateUsage"
      />
    </div>
    <div className="table-value table-cell" v-if="display.value">
      <input
        type="checkbox"
        v-model="tier.tier1"
        className="checkbox"
        @change="updateTier"
      />
    </div>
    <div className="table-value table-cell" v-if="display.value">
      <input
        type="checkbox"
        v-model="tier.tier2"
        className="checkbox"
        @change="updateTier"
      />
    </div>
    <div className="table-value table-cell" v-if="display.value">
      <input
        type="checkbox"
        v-model="tier.tier3"
        className="checkbox"
        @change="updateTier"
      />
    </div>
    <div className="table-value table-cell" v-if="display.value">
      <input
        type="checkbox"
        v-model="tier.unique"
        className="checkbox"
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
  };
  const updateLifetime = (e) => {
    globalStore.liveData[id.value].lifetime = e.target.value;
  };
  const updateRestock = (e) => {
    globalStore.liveData[id.value].restock = e.target.value;
  };
  const updateMin = (e) => {
    globalStore.liveData[id.value].min = e.target.value;
  };
  const updateQmin = (e) => {
    globalStore.liveData[id.value].qmin = e.target.value;
  };
  const updateQmax = (e) => {
    globalStore.liveData[id.value].qmax = e.target.value;
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
</script>
