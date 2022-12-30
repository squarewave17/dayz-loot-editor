<template>
  <VueApexCharts
    type="radar"
    height="225px"
    :options="options"
    :series="series"
  />
</template>

<script setup>
  import VueApexCharts from "vue3-apexcharts";
  import { ref, watchEffect, watch, toRef } from "vue";

  const props = defineProps({
    series: {
      type: Array,
      default: [
        {
          name: "Default",
          data: [0, 0, 0, 0],
        },
        {
          name: "Custom",
          data: [0, 0, 0, 0],
        },
      ],
    },
  });
  const series = toRef(props, "series");

  const options = ref({
    chart: {
      type: "radar",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    title: {
      text: "Total",
      align: "middle",
      margin: 0,
      offsetX: -70,
      offsetY: 48,
      floating: true,
      style: {
        fontSize: "12px",
        fontWeight: "bold",
        fontFamily: undefined,
        color: "var(--color-text-light)",
      },
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["var(--color-success)", "var(--color-info)"],
      dashArray: 0,
    },
    fill: {
      opacity: 0,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: ["Nominal", "Min", "Q Min", "Q Max"],
    },
    yaxis: {
      show: false,
    },
    legend: {
      show: false,
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: "var(--color-text-dim)",
        },
      },
    },
  });
</script>
