<template>
  <WelcomeScreen v-if="!globalStore.hasData" />
  <div v-else className="grid grid-cols-main grid-rows-main grow">
    <div className="container flex items-center mx-auto col-span-3">
      <EditorPanelTop />
    </div>
    <div className="card bg-base-300 mx-3 p-3 shadow-xl row-span-2">
      <EditorPanelLeft />
    </div>
    <EditorTable />
    <div className="card bg-base-300 mx-3 p-3 shadow-xl row-span-2">
      <EditorPanelRight />
    </div>
    <Stats />
  </div>
</template>
<script setup>
  import { useGlobalStore } from "../store/globalStore";
  import WelcomeScreen from "../components/WelcomeScreen.vue";
  import EditorTable from "../components/EditorTable.vue";
  import EditorPanelTop from "../components/EditorPanelTop.vue";
  import EditorPanelLeft from "../components/EditorPanelLeft.vue";
  import EditorPanelRight from "../components/EditorPanelRight.vue";
  import Stats from "../components/Stats.vue";
  /**
   * store
   */
  const globalStore = useGlobalStore();
</script>
