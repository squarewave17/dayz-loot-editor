<template>
  <div className="preview-container">
    <v-ace-editor
      v-model:value="codeOutput"
      @init="editorInit"
      lang="xml"
      theme="kr_theme"
      style="height: 100%"
      :readonly="true"
      :printMargin="false"
      :options="aceOptions"
    />
  </div>
  <!-- <div className="table-header table-row w-full">
      <div className="table-name table-cell">Name</div>
      <div className="table-nominal table-cell" v-show="display.nominal">
        Nominal
      </div>
      <div className="table-lifetime table-cell" v-show="display.lifetime">
        Lifetime
      </div>
      <div className="table-restock table-cell" v-show="display.restock">
        Restock
      </div>
      <div className="table-min table-cell" v-show="display.min">Min</div>
      <div className="table-quant table-cell" v-show="display.quantity">
        QMin
      </div>
      <div className="table-quant table-cell" v-show="display.quantity">
        QMax
      </div>
      <div className="table-cost table-cell" v-show="display.cost">Cost</div>
      <div className="table-tag table-cell" v-show="display.flags">Cargo</div>
      <div className="table-tag table-cell" v-show="display.flags">Hoarder</div>
      <div className="table-tag table-cell" v-show="display.flags">Map</div>
      <div className="table-tag table-cell" v-show="display.flags">Player</div>
      <div className="table-tag table-cell" v-show="display.flags">Crafted</div>
      <div className="table-tag table-cell" v-show="display.flags">Deloot</div>
      <div className="table-category table-cell" v-show="display.category">
        Category
      </div>
    
      <div
        className="table-usage table-name-coast table-cell"
        v-show="display.usage"
      >
        Coast
      </div>
      <div
        className="table-usage table-name-farm table-cell"
        v-show="display.usage"
      >
        Farm
      </div>
      <div
        className="table-usage table-name-firefighter table-cell"
        v-show="display.usage"
      >
        Firefighter
      </div>
      <div
        className="table-usage table-name-hunting table-cell"
        v-show="display.usage"
      >
        Hunting
      </div>
      <div
        className="table-usage table-name-industrial table-cell"
        v-show="display.usage"
      >
        Industrial
      </div>
      <div
        className="table-usage table-name-medic table-cell"
        v-show="display.usage"
      >
        Medic
      </div>
      <div
        className="table-usage table-name-military table-cell"
        v-show="display.usage"
      >
        Military
      </div>
      <div
        className="table-usage table-name-office table-cell"
        v-show="display.usage"
      >
        Office
      </div>
      <div
        className="table-usage table-name-police table-cell"
        v-show="display.usage"
      >
        Police
      </div>
      <div
        className="table-usage table-name-prison table-cell"
        v-show="display.usage"
      >
        Prison
      </div>
      <div
        className="table-usage table-name-school table-cell"
        v-show="display.usage"
      >
        School
      </div>
      <div
        className="table-usage table-name-town table-cell"
        v-show="display.usage"
      >
        Town
      </div>
      <div
        className="table-usage table-name-village table-cell"
        v-show="display.usage"
      >
        Village
      </div>
      <div
        className="table-usage table-name-contaminated table-cell"
        v-show="display.usage"
      >
        Contaminated
      </div>
      <div
        className="table-usage table-name-contaminated table-cell"
        v-show="display.usage"
      >
        Underground
      </div>
     
      <div className="table-value table-cell" v-show="display.value">Tier1</div>
      <div className="table-value table-cell" v-show="display.value">Tier2</div>
      <div className="table-value table-cell" v-show="display.value">Tier3</div>
      <div className="table-value table-cell" v-show="display.value">
        Unique
      </div>
    </div> -->
</template>
<script setup>
  import { useGlobalStore } from "../store/globalStore";
  import { ref, onMounted, onUpdated, watchEffect, computed } from "vue";
  import { VAceEditor } from "vue3-ace-editor";
  import "ace-builds/src-noconflict/mode-xml";
  import "ace-builds/src-noconflict/theme-kr_theme";

  const aceOptions = {
    fontSize: "14px",
    showLineNumbers: true,
    showGutter: true,
    highlightActiveLine: false,
    showFoldWidgets: true,
    showLineNumbers: true,
    showPrintMargin: false,
    displayIndentGuides: false,
  };

  const globalStore = useGlobalStore();

  const codeOutput = ref("");
  onMounted(async () => {
    codeOutput.value = await globalStore.prepareSave();
  });
</script>
<style>
  .preview-container {
    height: calc(100vh - 114px);
  }
  /* gutter */
  .ace-kr-theme .ace_gutter {
    background: var(--color-dark-300);
    color: var(--color-text-light);
  }

  /* Main colors */
  .ace-kr-theme {
    background-color: var(--color-dark);
    color: var(--color-text-light);
  }

  /* Cursor */
  .ace-kr-theme .ace_cursor {
    color: var(--color-text-light);
  }

  /* Selection */
  .ace-kr-theme .ace_marker-layer .ace_selection {
    background: var(--color-info-content);
  }

  /* brackets border */
  .ace-kr-theme .ace_marker-layer .ace_bracket {
    margin: -1px 0 0 -1px;
    border: 1px solid var(--color-text-dim);
  }

  /* Active line in gutter  */
  .ace-kr-theme .ace_gutter-active-line {
    background-color: var(--color-dark-200);
  }

  /* Selected word border */
  .ace-kr-theme .ace_marker-layer .ace_selected-word {
    border: 1px solid var(--color-text-dim);
  }

  /* lang tag and = */
  .ace-kr-theme .ace_keyword,
  .ace-kr-theme .ace_meta {
    color: var(--color-text-dim);
  }

  /* Fold expand box */
  .ace-kr-theme .ace_fold {
    background-color: var(--color-dark-100);
    border-color: var(--color-dark-100);
  }
  /* Strings */
  .ace-kr-theme .ace_string {
    color: var(--color-error);
  }
  /* values */
  .ace-kr-theme .ace_text.ace_xml,
  .ace-kr-theme .ace_string.ace_attribute-value.ace_xml {
    color: var(--color-success);
  }

  /* tags */
  .ace-kr-theme .ace_meta.ace_tag {
    color: var(--color-text-dim);
  }
  /* punctuation tags */
  .ace-kr-theme .ace_meta.ace_tag.ace_punctuation.ace_xml {
    color: var(--color-text-light);
  }
</style>
