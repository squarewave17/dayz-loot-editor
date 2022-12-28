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
  <div className="flex flex-col justify-between h-screen">
    <Navbar />
    <main className="container grow mx-auto px-3 pb-12">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
