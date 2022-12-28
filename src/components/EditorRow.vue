<template>
  <tr>
    <td>{{ name }}</td>
    <td v-if="display.nominal">{{ nominal }}</td>
    <td v-if="display.lifetime">{{ lifetime }}</td>
    <td v-if="display.restock">{{ restock }}</td>
    <td v-if="display.min">{{ min }}</td>
    <td v-if="display.quantity">{{ quantmin }}</td>
    <td v-if="display.quantity">{{ quantmax }}</td>
    <td v-if="display.cost">{{ cost }}</td>
    <td v-if="display.flags">{{ countInCargo }}</td>
    <td v-if="display.flags">{{ countInHoarder }}</td>
    <td v-if="display.flags">{{ countInMap }}</td>
    <td v-if="display.flags">{{ countInPlayer }}</td>
    <td v-if="display.flags">{{ crafted }}</td>
    <td v-if="display.flags">{{ deloot }}</td>
    <td v-if="display.category">{{ category }}</td>
    <td v-if="display.usage">coast -</td>
    <td v-if="display.usage">farm -</td>
    <td v-if="display.usage">Firefighter -</td>
    <td v-if="display.usage">Hunting -</td>
    <td v-if="display.usage">Industrial -</td>
    <td v-if="display.usage">Medic -</td>
    <td v-if="display.usage">Military -</td>
    <td v-if="display.usage">Office -</td>
    <td v-if="display.usage">Police -</td>
    <td v-if="display.usage">Prison -</td>
    <td v-if="display.usage">School -</td>
    <td v-if="display.usage">Town -</td>
    <td v-if="display.usage">Village -</td>
    <td v-if="display.usage">ContaminatedArea -</td>
    <td v-if="display.value">Tier1 -</td>
    <td v-if="display.value">Tier2 -</td>
    <td v-if="display.value">Tier3 -</td>
    <td v-if="display.value">Unique -</td>
  </tr>
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
