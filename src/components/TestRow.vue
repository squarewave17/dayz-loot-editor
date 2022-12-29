<template>
  <div className="table-row">
    <div className="table-name table-cell">{{ name }}</div>
    <div className="table-nominal table-cell" v-if="display.nominal">
      {{ nominal }}
    </div>
    <div className="table-lifetime table-cell" v-if="display.lifetime">
      {{ lifetime }}
    </div>
    <div className="table-restock table-cell" v-if="display.restock">
      {{ restock }}
    </div>
    <div className="table-min table-cell" v-if="display.min">{{ min }}</div>
    <div className="table-quant table-cell" v-if="display.quantity">
      {{ quantmin }}
    </div>
    <div className="table-quant table-cell" v-if="display.quantity">
      {{ quantmax }}
    </div>
    <div className="table-cost table-cell" v-if="display.cost">{{ cost }}</div>
    <div className="table-tag table-cell" v-if="display.flags">
      {{ countInCargo }}
    </div>
    <div className="table-tag table-cell" v-if="display.flags">
      {{ countInHoarder }}
    </div>
    <div className="table-tag table-cell" v-if="display.flags">
      {{ countInMap }}
    </div>
    <div className="table-tag table-cell" v-if="display.flags">
      {{ countInPlayer }}
    </div>
    <div className="table-tag table-cell" v-if="display.flags">
      {{ crafted }}
    </div>
    <div className="table-tag table-cell" v-if="display.flags">
      {{ deloot }}
    </div>
    <div className="table-category table-cell" v-if="display.category">
      {{ category }}
    </div>
    <div
      className="table-usage table-name-coast table-cell"
      v-if="display.usage"
    >
      -
    </div>
    <div
      className="table-usage table-name-farm table-cell"
      v-if="display.usage"
    >
      -
    </div>
    <div
      className="table-usage table-name-firefighter table-cell"
      v-if="display.usage"
    >
      -
    </div>
    <div
      className="table-usage table-name-hunting table-cell"
      v-if="display.usage"
    >
      -
    </div>
    <div
      className="table-usage table-name-industrial table-cell"
      v-if="display.usage"
    >
      -
    </div>
    <div
      className="table-usage table-name-medic table-cell"
      v-if="display.usage"
    >
      -
    </div>
    <div
      className="table-usage table-name-military table-cell"
      v-if="display.usage"
    >
      -
    </div>
    <div
      className="table-usage table-name-office table-cell"
      v-if="display.usage"
    >
      -
    </div>
    <div
      className="table-usage table-name-police table-cell"
      v-if="display.usage"
    >
      -
    </div>
    <div
      className="table-usage table-name-prison table-cell"
      v-if="display.usage"
    >
      -
    </div>
    <div
      className="table-usage table-name-school table-cell"
      v-if="display.usage"
    >
      -
    </div>
    <div
      className="table-usage table-name-town table-cell"
      v-if="display.usage"
    >
      -
    </div>
    <div
      className="table-usage table-name-village table-cell"
      v-if="display.usage"
    >
      -
    </div>
    <div
      className="table-usage table-name-contaminated table-cell"
      v-if="display.usage"
    >
      -
    </div>
    <div className="table-value table-cell" v-if="display.value">-</div>
    <div className="table-value table-cell" v-if="display.value">-</div>
    <div className="table-value table-cell" v-if="display.value">-</div>
    <div className="table-value table-cell" v-if="display.value">-</div>
  </div>
</template>

<script setup>
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
    quantmin: {
      type: String,
      default: "",
    },
    quantmax: {
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
    value: {
      type: Array,
      default: [],
    },
    display: {
      type: Object,
      default: {},
    },
  });
</script>
