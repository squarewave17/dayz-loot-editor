<template>
  <div className="flex items-center w-full max-w-xs p-2">
    <input
      type="text"
      placeholder="Search..."
      className="input input-sm input-bordered w-full max-w-xs"
      v-model="globalStore.search"
    />
    <button className="btn btn-square btn-xs mx-2" @click="resetSearch">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { useGlobalStore } from "../store/globalStore";
  /**
   * store
   */
  const globalStore = useGlobalStore();
  /**
   * Handle Reset
   */
  const resetSearch = () => {
    globalStore.search = "";
  };
</script>
