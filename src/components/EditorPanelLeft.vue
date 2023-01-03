<template>
  <div className="flex flex-col">
    <h6 class="p-1">Columns</h6>
    <ToggleControl
      v-for="entry in Object.keys(globalStore.columnVisibility)"
      :checked="globalStore.columnVisibility[entry]"
      :label="entry"
      v-model="globalStore.columnVisibility[entry]"
    />
  </div>
</template>

<script setup>
  import { reactive } from "vue";
  import ToggleControl from "./ToggleControl.vue";
  import { useGlobalStore } from "../store/globalStore";

  /**
   * store
   */
  const globalStore = useGlobalStore();
</script>
