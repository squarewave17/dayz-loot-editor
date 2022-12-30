<template>
  <div className="flex justify-between overflow-hidden">
    <ChartRadarVolume :series="test" />
  </div>
</template>

<script setup>
  import { ref, computed, watchEffect } from "vue";
  import { useGlobalStore } from "../store/globalStore";
  import ChartRadarVolume from "./ChartRadarVolume.vue";
  const globalStore = useGlobalStore();

  const test = computed(() => {
    return [
      {
        name: "Default",
        data: [
          globalStore.stockStats.nominal,
          globalStore.stockStats.min,
          globalStore.stockStats.qmin,
          globalStore.stockStats.qmax,
        ],
      },
      {
        name: "Custom",
        data: [
          globalStore.liveStats.nominal,
          globalStore.liveStats.min,
          globalStore.liveStats.qmin,
          globalStore.liveStats.qmax,
        ],
      },
    ];
  });
</script>

<style scoped></style>
