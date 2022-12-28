<template>
  <input
    type="file"
    accept="text/xml"
    className="file-input file-input-bordered w-full max-w-xs"
    @change="loadFile"
    ref="loadInput"
  />
</template>

<script setup>
  import { ref } from "vue";
  import { useGlobalStore } from "../store/globalStore";
  /**
   * store
   */
  const globalStore = useGlobalStore();
  /**
   * Load FIle
   */
  const loadInput = ref(null);
  const loadFile = (e) => {
    var files = e.target.files || e.dataTransfer.files;
    let file = files[0];
    if (file.type === "text/xml") {
      let reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        globalStore.loadFile(reader.result);
      };
      loadInput.value.value = null;
    } else {
      loadInput.value.value = null;
      alert("Wrong File Type");
    }
  };
</script>
