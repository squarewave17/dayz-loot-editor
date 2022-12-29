<template>
  <FileUpload v-if="!globalStore.hasData" /> <EditorTable v-else />
</template>
<script setup>
  import { useGlobalStore } from "../store/globalStore";
  import FileUpload from "../components/FileUpload.vue";
  import EditorTable from "../components/EditorTable.vue";
  /**
   * store
   */
  const globalStore = useGlobalStore();
</script>
