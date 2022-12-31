<template>
  <div
    className="grid grid-cols-2 overflow-hidden w-full"
    v-if="globalStore.hasData"
  >
    <div class="flex flex-col">
      <h5 class="mx-auto p-3 text-l">{{ selectedName }}</h5>
      <div class="flex justify-between">
        <ChartBarVolume :series="itemSeries" />
      </div>
    </div>

    <div class="flex flex-col">
      <h5 class="mx-auto p-3 text-l">Global</h5>
      <div class="flex justify-between">
        <ChartBarVolume :series="globalTotal" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, watchEffect } from "vue";
  import { useGlobalStore } from "../store/globalStore";
  import ChartRadarVolume from "./ChartRadarVolume.vue";
  import ChartBarVolume from "./ChartBarVolume.vue";
  const globalStore = useGlobalStore();

  const globalTotal = computed(() => {
    return [
      {
        data: [globalStore.stockStats.nominal, globalStore.stockStats.min],
      },
      {
        data: [globalStore.liveStats.nominal, globalStore.liveStats.min],
      },
    ];
  });

  const itemSeries = computed(() => {
    return [
      {
        data: [
          globalStore.stockData[globalStore.currentSelection].nominal,
          globalStore.stockData[globalStore.currentSelection].min,
        ],
      },
      {
        data: [
          globalStore.liveData[globalStore.currentSelection].nominal,
          globalStore.liveData[globalStore.currentSelection].min,
        ],
      },
    ];
  });

  /**
   * Handle Selection
   */
  const selectedName = computed(() => {
    if (globalStore.hasData) {
      return globalStore.liveData[globalStore.currentSelection].name;
    } else {
      return "No Data";
    }
  });
</script>

<style scoped></style>
