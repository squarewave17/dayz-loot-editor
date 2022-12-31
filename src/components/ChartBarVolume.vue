<template>
  <VueApexCharts
    type="bar"
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
          data: [1000, 2230],
        },
        {
          data: [3230, 2330],
        },
      ],
    },
  });
  const series = toRef(props, "series");

  const options = ref({
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
      tooltip: {
        show: false,
      },
      dropShadow: {
        enabled: false,
      },
      offsetY: -25,
      animations: {
        enabled: true,
        easing: "easeout",
        speed: 800,
        animateGradually: {
          enabled: false,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 300,
        },
      },
    },
    colors: ["var(--color-chart-ref)", "var(--color-chart-new)"],
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: "12px",
        colors: ["var(--color-dark-100)"],
      },
    },
    grid: {
      show: false,
      borderColor: "var(--color-text-light)",
    },
    stroke: {
      show: false,
      width: 1,
    },
    legend: {
      show: false,
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: ["var(--color-text-light)"],
          fontSize: "12px",
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
      },
      axisBorder: {
        show: false,
        color: "#78909C",
        height: 1,
        width: "100%",
        offsetX: 0,
        offsetY: 0,
      },
    },
    xaxis: {
      categories: ["Nominal", "Min"],
      labels: {
        show: false,
        style: {
          colors: ["var(--color-text-light)"],
          fontSize: "12px",
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    crosshairs: {
      show: false,
    },
  });
</script>
