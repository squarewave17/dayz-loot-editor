<template>
  <main class="container mx-auto">
    <div class="p-8">
      <h2 class="text-xl text-center">Welcome to the DayZ loot balancer</h2>
    </div>
    <div class="p-8">
      <p class="text-center max-w-xl mx-auto">
        This tool is a loot editor for DayZ servers. You can edit your types.xml
        here while comparing it to either the stock file or your own.
      </p>
    </div>
    <div class="py-8">
      <div class="card py-8 bg-base-300 rounded-box place-items-center">
        <div class="flex">
          <select className="select mx-4" v-model="globalStore.refFile">
            <option value="chernarus">Chernarus</option>
            <option value="livonia">Livonia</option>
            <option value="custom">Upload Custom</option>
          </select>
          <input
            v-if="globalStore.refFile === 'custom'"
            type="file"
            accept="text/xml"
            className="file-input file-input-bordered w-full max-w-xs mx-4"
            @change="loadRefFile"
            ref="loadRefInput"
          />
        </div>
      </div>
    </div>
    <div className="flex w-full">
      <div
        className="grid h-20 w-1/2 card bg-base-300 rounded-box place-items-center"
      >
        <input
          type="file"
          accept="text/xml"
          className="file-input file-input-bordered w-full max-w-xs"
          @change="loadFile"
          ref="loadInput"
        />
      </div>
      <div className="divider divider-horizontal">OR</div>
      <div
        className="grid h-20 w-1/2 card bg-base-300 rounded-box place-items-center"
      >
        <button className="btn btn-wide" @click="startClean">
          Start Fresh
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
  import { ref } from "vue";
  import { useGlobalStore } from "../store/globalStore";
  /**
   * store
   */
  const globalStore = useGlobalStore();
  /**
   * Start Clean
   */
  const startClean = () => {
    globalStore.wasClean = true;
    globalStore.startClean();
  };
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
  /**
   * Load Ref File
   */
  const loadRefInput = ref(null);
  const loadRefFile = (e) => {
    var files = e.target.files || e.dataTransfer.files;
    let file = files[0];
    if (file.type === "text/xml") {
      let reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        globalStore.loadCustomRef(reader.result);
      };
      loadInput.value.value = null;
    } else {
      loadInput.value.value = null;
      alert("Wrong File Type");
    }
  };
</script>
