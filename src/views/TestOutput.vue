<template>
  <div className="preview-container">
    <v-ace-editor
      v-model:value="codeOutput"
      lang="xml"
      theme="kr_theme"
      style="height: 100%"
      :readonly="true"
      :printMargin="false"
      :options="aceOptions"
    />
  </div>
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
