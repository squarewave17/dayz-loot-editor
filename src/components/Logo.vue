<template>
  <img :width="width" src="../assets/logo-color.png" />
</template>

<script setup>
  import { ref, toRefs } from "vue";

  const { width } = toRefs(props);

  const props = defineProps({
    width: {
      type: Number,
      default: 100,
    },
  });
</script>
