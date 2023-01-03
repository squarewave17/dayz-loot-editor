<script setup>
  import { onMounted } from "vue";
  import Navbar from "./components/Navbar.vue";
  import Stats from "./components/Stats.vue";
  import { useGlobalStore } from "./store/globalStore";

  /**
   * store
   */
  const globalStore = useGlobalStore();
  /**
   * lifecycle
   */
  onMounted(() => {
    globalStore.initStore();
  });
</script>

<template>
  <div className="flex flex-col h-screen">
    <Navbar />
    <router-view />
  </div>
</template>
