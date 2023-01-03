<template>
  <div v-bind="containerProps" className="virtual-wrapper w-full">
    <div className="editor-header editor-row w-full">
      <div className="table-name editor-cell header-cell">Name</div>
      <div
        className="table-nominal editor-cell header-cell"
        v-show="globalStore.columnVisibility.nominal"
      >
        Nominal
      </div>
      <div
        className="table-min editor-cell header-cell"
        v-show="globalStore.columnVisibility.min"
      >
        Min
      </div>
      <div
        className="table-lifetime editor-cell header-cell"
        v-show="globalStore.columnVisibility.lifetime"
      >
        Lifetime
      </div>
      <div
        className="table-restock editor-cell header-cell"
        v-show="globalStore.columnVisibility.restock"
      >
        Restock
      </div>

      <div
        className="table-quant editor-cell header-cell no-border"
        v-show="globalStore.columnVisibility.quantity"
      >
        QMin
      </div>
      <div
        className="table-quant editor-cell header-cell"
        v-show="globalStore.columnVisibility.quantity"
      >
        QMax
      </div>
      <div
        className="table-cost editor-cell header-cell"
        v-show="globalStore.columnVisibility.cost"
      >
        Cost
      </div>
      <div
        className="table-tag editor-cell header-cell no-border justify-center"
        v-show="globalStore.columnVisibility.flags"
      >
        Cargo
      </div>
      <div
        className="table-tag editor-cell header-cell no-border justify-center"
        v-show="globalStore.columnVisibility.flags"
      >
        Hoarder
      </div>
      <div
        className="table-tag editor-cell header-cell no-border justify-center"
        v-show="globalStore.columnVisibility.flags"
      >
        Map
      </div>
      <div
        className="table-tag editor-cell header-cell no-border justify-center"
        v-show="globalStore.columnVisibility.flags"
      >
        Player
      </div>
      <div
        className="table-tag editor-cell header-cell no-border justify-center"
        v-show="globalStore.columnVisibility.flags"
      >
        Crafted
      </div>
      <div
        className="table-tag editor-cell header-cell justify-center"
        v-show="globalStore.columnVisibility.flags"
      >
        Deloot
      </div>
      <div
        className="table-category editor-cell header-cell"
        v-show="globalStore.columnVisibility.category"
      >
        Category
      </div>
      <!-- usage -->
      <div
        className="table-usage table-name-coast editor-cell header-cell no-border justify-center"
        v-show="globalStore.columnVisibility.usage"
      >
        Coast
      </div>
      <div
        className="table-usage table-name-farm editor-cell header-cell no-border justify-center"
        v-show="globalStore.columnVisibility.usage"
      >
        Farm
      </div>
      <div
        className="table-usage table-name-firefighter editor-cell header-cell no-border justify-center"
        v-show="globalStore.columnVisibility.usage"
      >
        Firefighter
      </div>
      <div
        className="table-usage table-name-hunting editor-cell header-cell no-border justify-center"
        v-show="globalStore.columnVisibility.usage"
      >
        Hunting
      </div>
      <div
        className="table-usage table-name-industrial editor-cell header-cell no-border justify-center"
        v-show="globalStore.columnVisibility.usage"
      >
        Industrial
      </div>
      <div
        className="table-usage table-name-medic editor-cell header-cell no-border justify-center"
        v-show="globalStore.columnVisibility.usage"
      >
        Medic
      </div>
      <div
        className="table-usage table-name-military editor-cell header-cell no-border justify-center"
        v-show="globalStore.columnVisibility.usage"
      >
        Military
      </div>
      <div
        className="table-usage table-name-office editor-cell header-cell no-border justify-center"
        v-show="globalStore.columnVisibility.usage"
      >
        Office
      </div>
      <div
        className="table-usage table-name-police editor-cell header-cell no-border justify-center"
        v-show="globalStore.columnVisibility.usage"
      >
        Police
      </div>
      <div
        className="table-usage table-name-prison editor-cell header-cell no-border justify-center"
        v-show="globalStore.columnVisibility.usage"
      >
        Prison
      </div>
      <div
        className="table-usage table-name-school editor-cell header-cell no-border justify-center"
        v-show="globalStore.columnVisibility.usage"
      >
        School
      </div>
      <div
        className="table-usage table-name-town editor-cell header-cell no-border justify-center"
        v-show="globalStore.columnVisibility.usage"
      >
        Town
      </div>
      <div
        className="table-usage table-name-village editor-cell header-cell no-border justify-center"
        v-show="globalStore.columnVisibility.usage"
      >
        Village
      </div>
      <div
        className="table-usage table-name-contaminated editor-cell header-cell no-border justify-center"
        v-show="globalStore.columnVisibility.usage"
      >
        Contaminated
      </div>
      <div
        className="table-usage table-name-contaminated editor-cell header-cell justify-center"
        v-show="globalStore.columnVisibility.usage"
      >
        Underground
      </div>
      <!-- value -->
      <div
        className="table-value editor-cell header-cell no-border justify-center"
        v-show="globalStore.columnVisibility.value"
      >
        Tier1
      </div>
      <div
        className="table-value editor-cell header-cell no-border justify-center"
        v-show="globalStore.columnVisibility.value"
      >
        Tier2
      </div>
      <div
        className="table-value editor-cell header-cell no-border justify-center"
        v-show="globalStore.columnVisibility.value"
      >
        Tier3
      </div>
      <div
        className="table-value editor-cell header-cell justify-center"
        v-show="globalStore.columnVisibility.value"
      >
        Unique
      </div>
    </div>
    <div v-bind="wrapperProps">
      <EditorRow
        v-for="{ index, data } in list"
        :key="index"
        :id="data.id"
        :name="data.name"
        :nominal="data.nominal"
        :lifetime="data.lifetime"
        :restock="data.restock"
        :min="data.min"
        :qmin="data.quantmin"
        :qmax="data.quantmax"
        :cost="data.cost"
        :countInCargo="data.countInCargo"
        :countInHoarder="data.countInHoarder"
        :countInMap="data.countInMap"
        :countInPlayer="data.countInPlayer"
        :crafted="data.crafted"
        :deloot="data.deloot"
        :category="data.category"
        :subCategory="data.subCategory"
        :tag="data.tag"
        :usage="data.usage"
        :value="data.value"
      />
    </div>
  </div>
</template>

<script setup>
  import { reactive, computed, shallowReactive, onMounted, ref } from "vue";
  import ToggleControl from "../components/ToggleControl.vue";
  import EditorRow from "../components/EditorRow.vue";
  import { useGlobalStore } from "../store/globalStore";
  import { useVirtualList } from "@vueuse/core";
  /**
   * store
   */
  const globalStore = useGlobalStore();
  const liveData = globalStore.liveData;

  const data = computed(() => {
    if (globalStore.search.length > 0) {
      return liveData.filter((entry) => {
        return entry.name
          .toLowerCase()
          .includes(globalStore.search.toLowerCase());
      });
    }
    if (globalStore.categoryFilter["show everything"]) {
      return liveData;
    }
    let filters = [];
    for (const [key, value] of Object.entries(globalStore.categoryFilter)) {
      if (value) {
        filters.push(key);
      }
    }
    return liveData.filter((entry) => {
      return filters.includes(entry.subCategory);
    });
  });

  /**
   * Virtual Scroll
   */

  const { list, containerProps, wrapperProps } = useVirtualList(data, {
    itemHeight: 56,
  });
</script>

<style>
  .editor-row {
    display: flex;
    flex-direction: row;
  }
  .editor-cell {
    display: flex;
    align-items: center;
    padding: 10px 10px;
    vertical-align: middle;
    border-right: 1px solid var(--color-dark-200);
    border-bottom: 1px solid var(--color-dark-200);
    background-color: var(--color-dark-100);
  }

  .header-cell {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));
  }
  .header-cell.editor-cell {
    border-right: 1px solid var(--color-text-faint);
  }
  .editor-header {
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    position: sticky;
    top: 0;
  }

  .virtual-wrapper {
    height: 620px;
    width: 100%;
  }

  .table-name {
    min-width: 281px;
    max-width: 281px;
  }
  .table-nominal {
    min-width: 80px;
    max-width: 80px;
  }
  .table-lifetime {
    min-width: 115px;
    max-width: 115px;
  }
  .table-restock {
    min-width: 115px;
    max-width: 115px;
  }
  .table-min {
    min-width: 80px;
    max-width: 80px;
  }
  .table-quant {
    min-width: 80px;
    max-width: 80px;
  }
  .table-cost {
    min-width: 66.5px;
    max-width: 66.5px;
  }
  .table-tag {
    min-width: 67px;
    max-width: 67px;
  }
  .table-category {
    min-width: 130px;
    max-width: 130px;
  }
  .table-usage {
    min-width: 66px;
    max-width: 66px;
  }
  .table-usage.table-name-firefighter {
    min-width: 84px;
    max-width: 84px;
  }
  .table-usage.table-name-military {
    min-width: 73px;
    max-width: 73px;
  }
  .table-usage.table-name-industrial {
    min-width: 82px;
    max-width: 82px;
  }
  .table-usage.table-name-contaminated {
    min-width: 106px;
    max-width: 106px;
  }
  .table-value {
    min-width: 68px;
    max-width: 68px;
  }
  .no-border {
    border-right: none;
  }
</style>
