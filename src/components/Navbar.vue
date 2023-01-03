<template>
  <nav className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
    <div className="container mx-auto">
      <div className="flex px-2 mx-2 items-center">
        <Logo className="inline pr-2" />
        <router-link className="font-bold align-middle mx-2 text-xl" to="/"
          >Loot Editor</router-link
        >
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="flex justify-end">
          <router-link to="/output"
            ><button className="btn btn-ghost btn-sm rounded-btn">
              Test Output
            </button></router-link
          >
          <router-link to="/data"
            ><button className="btn btn-ghost btn-sm rounded-btn">
              Live Data
            </button></router-link
          >
          <button
            className="btn btn-ghost btn-sm rounded-btn"
            @click="globalStore.prepareSave()"
          >
            compile
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import Logo from "../components/Logo.vue";
  import { useGlobalStore } from "../store/globalStore";
  const globalStore = useGlobalStore();
</script>
