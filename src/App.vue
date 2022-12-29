<script setup>
  import { onMounted } from "vue";
  import Navbar from "./components/Navbar.vue";
  import Footer from "./components/Footer.vue";
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
    <main className="grid grid-cols-main grid-rows-main grow">
      <div id="main-top" className="container mx-auto col-span-3">top</div>
      <div id="main-left" className="card bg-base-300 mx-3 p-3 shadow-xl"></div>
      <router-view />
      <div
        id="main-right"
        className="card bg-base-300 mx-3 p-3 shadow-xl"
      ></div>
    </main>
    <!-- <Footer /> -->
  </div>
</template>
