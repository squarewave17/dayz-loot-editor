<template>
  <div className="flex flex-col">
    <h6 class="p-1">Category</h6>
    <ToggleControl
      v-for="entry in Object.keys(globalStore.categoryFilter)"
      :checked="globalStore.categoryFilter[entry]"
      :label="entry"
      v-model="globalStore.categoryFilter[entry]"
    />
  </div>
</template>

<script setup>
  import { useGlobalStore } from "../store/globalStore";
  import ToggleControl from "./ToggleControl.vue";
  /**
   * store
   */
  const globalStore = useGlobalStore();
</script>
