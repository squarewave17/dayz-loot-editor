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
          <router-link to="/"
            ><button className="btn btn-ghost btn-sm rounded-btn">
              Editor
            </button></router-link
          >
          <router-link to="/output"
            ><button className="btn btn-ghost btn-sm rounded-btn">
              Export
            </button></router-link
          >
          <router-link to="/output"
            ><button className="btn btn-ghost btn-sm rounded-btn">
              <IconSettings /></button
          ></router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import Logo from "../components/Logo.vue";
  import { useGlobalStore } from "../store/globalStore";
  import IconSettings from "./icons/IconSettings.vue";
  const globalStore = useGlobalStore();
</script>
