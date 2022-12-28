<template>
  <Codemirror
    v-model:value="codeOutput"
    :options="cmOptions"
    placeholder="test placeholder"
  />
</template>
<script setup>
  import Codemirror from "codemirror-editor-vue3";
  import "codemirror/mode/xml/xml";
  import { useGlobalStore } from "../store/globalStore";
  import { ref, onMounted, onUpdated, watchEffect, computed } from "vue";

  const globalStore = useGlobalStore();

  // const codeOutput = computed(() => {
  //   return globalStore.outputData;
  // });
  const cmOptions = ref({
    mode: "xml", // Language mode
    lineNumbers: true, // Show line number
    smartIndent: true, // Smart indent
    indentUnit: 2, // The smart indent unit is 2 spaces in length
    foldGutter: true, // Code folding
    styleActiveLine: true, // Display the style of the selected row
    autoCloseBrackets: true,
    readOnly: true,
  });
</script>
