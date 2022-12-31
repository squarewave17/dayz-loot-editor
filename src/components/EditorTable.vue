<template>
  <div v-bind="containerProps" className="virtual-wrapper w-full">
    <div className="editor-header editor-row w-full">
      <div className="table-name editor-cell header-cell">Name</div>
      <div
        className="table-nominal editor-cell header-cell"
        v-show="display.nominal"
      >
        Nominal
      </div>
      <div
        className="table-lifetime editor-cell header-cell"
        v-show="display.lifetime"
      >
        Lifetime
      </div>
      <div
        className="table-restock editor-cell header-cell"
        v-show="display.restock"
      >
        Restock
      </div>
      <div className="table-min editor-cell header-cell" v-show="display.min">
        Min
      </div>
      <div
        className="table-quant editor-cell header-cell no-border"
        v-show="display.quantity"
      >
        QMin
      </div>
      <div
        className="table-quant editor-cell header-cell"
        v-show="display.quantity"
      >
        QMax
      </div>
      <div className="table-cost editor-cell header-cell" v-show="display.cost">
        Cost
      </div>
      <div
        className="table-tag editor-cell header-cell no-border justify-center"
        v-show="display.flags"
      >
        Cargo
      </div>
      <div
        className="table-tag editor-cell header-cell no-border justify-center"
        v-show="display.flags"
      >
        Hoarder
      </div>
      <div
        className="table-tag editor-cell header-cell no-border justify-center"
        v-show="display.flags"
      >
        Map
      </div>
      <div
        className="table-tag editor-cell header-cell no-border justify-center"
        v-show="display.flags"
      >
        Player
      </div>
      <div
        className="table-tag editor-cell header-cell no-border justify-center"
        v-show="display.flags"
      >
        Crafted
      </div>
      <div
        className="table-tag editor-cell header-cell justify-center"
        v-show="display.flags"
      >
        Deloot
      </div>
      <div
        className="table-category editor-cell header-cell"
        v-show="display.category"
      >
        Category
      </div>
      <!-- usage -->
      <div
        className="table-usage table-name-coast editor-cell header-cell no-border justify-center"
        v-show="display.usage"
      >
        Coast
      </div>
      <div
        className="table-usage table-name-farm editor-cell header-cell no-border justify-center"
        v-show="display.usage"
      >
        Farm
      </div>
      <div
        className="table-usage table-name-firefighter editor-cell header-cell no-border justify-center"
        v-show="display.usage"
      >
        Firefighter
      </div>
      <div
        className="table-usage table-name-hunting editor-cell header-cell no-border justify-center"
        v-show="display.usage"
      >
        Hunting
      </div>
      <div
        className="table-usage table-name-industrial editor-cell header-cell no-border justify-center"
        v-show="display.usage"
      >
        Industrial
      </div>
      <div
        className="table-usage table-name-medic editor-cell header-cell no-border justify-center"
        v-show="display.usage"
      >
        Medic
      </div>
      <div
        className="table-usage table-name-military editor-cell header-cell no-border justify-center"
        v-show="display.usage"
      >
        Military
      </div>
      <div
        className="table-usage table-name-office editor-cell header-cell no-border justify-center"
        v-show="display.usage"
      >
        Office
      </div>
      <div
        className="table-usage table-name-police editor-cell header-cell no-border justify-center"
        v-show="display.usage"
      >
        Police
      </div>
      <div
        className="table-usage table-name-prison editor-cell header-cell no-border justify-center"
        v-show="display.usage"
      >
        Prison
      </div>
      <div
        className="table-usage table-name-school editor-cell header-cell no-border justify-center"
        v-show="display.usage"
      >
        School
      </div>
      <div
        className="table-usage table-name-town editor-cell header-cell no-border justify-center"
        v-show="display.usage"
      >
        Town
      </div>
      <div
        className="table-usage table-name-village editor-cell header-cell no-border justify-center"
        v-show="display.usage"
      >
        Village
      </div>
      <div
        className="table-usage table-name-contaminated editor-cell header-cell no-border justify-center"
        v-show="display.usage"
      >
        Contaminated
      </div>
      <div
        className="table-usage table-name-contaminated editor-cell header-cell justify-center"
        v-show="display.usage"
      >
        Underground
      </div>
      <!-- value -->
      <div
        className="table-value editor-cell header-cell no-border justify-center"
        v-show="display.value"
      >
        Tier1
      </div>
      <div
        className="table-value editor-cell header-cell no-border justify-center"
        v-show="display.value"
      >
        Tier2
      </div>
      <div
        className="table-value editor-cell header-cell no-border justify-center"
        v-show="display.value"
      >
        Tier3
      </div>
      <div
        className="table-value editor-cell header-cell justify-center"
        v-show="display.value"
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
        :display="display"
      />
    </div>
  </div>
  <teleport to="#main-left">
    <div className="flex flex-col">
      <h6 class="p-1">Columns</h6>
      <ToggleControl
        v-for="entry in Object.keys(display)"
        :checked="display[entry]"
        :label="entry"
        v-model="display[entry]"
      />
    </div>
  </teleport>
  <teleport to="#main-right">
    <div className="flex flex-col">
      <h6 class="p-1">Category</h6>
      <ToggleControl
        v-for="entry in Object.keys(categoryFilter)"
        :checked="categoryFilter[entry]"
        :label="entry"
        v-model="categoryFilter[entry]"
      />
    </div>
  </teleport>
  <teleport to="#main-top">
    <div className="flex items-center w-full max-w-xs p-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-sm input-bordered w-full max-w-xs"
        v-model="search"
      />
      <button className="btn btn-square btn-xs mx-2">
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
  </teleport>
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

  /**
   * search
   */
  const search = ref("");

  /**
   * Property Visibility
   */
  const display = reactive({
    nominal: true,
    lifetime: true,
    restock: true,
    min: true,
    quantity: true,
    cost: false,
    flags: true,
    category: true,
    tag: true,
    usage: true,
    value: true,
  });

  /**
   * Loot Filter
   */
  const categoryFilter = reactive({
    guns: true,
    ammo: true,
    "gun accesories": true,
    explosives: true,
    food: true,
    clothes: true,
    tools: true,
    containers: true,
    animals: true,
    medical: true,
    vehicles: true,
    zombies: true,
    vehiclesparts: true,
    "show everything": false,
  });

  const data = computed(() => {
    if (search.value.length > 0) {
      return liveData.filter((entry) => {
        return entry.name.toLowerCase().includes(search.value.toLowerCase());
      });
    }
    if (categoryFilter["show everything"]) {
      return liveData;
    }
    let filters = [];
    for (const [key, value] of Object.entries(categoryFilter)) {
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
    min-width: 325px;
    max-width: 325px;
  }
  .table-nominal {
    min-width: 90px;
    max-width: 90px;
  }
  .table-lifetime {
    min-width: 150px;
    max-width: 150px;
  }
  .table-restock {
    min-width: 120px;
    max-width: 120px;
  }
  .table-min {
    min-width: 90px;
    max-width: 90px;
  }
  .table-quant {
    min-width: 102px;
    max-width: 102px;
  }
  .table-cost {
    min-width: 66.5px;
    max-width: 66.5px;
  }
  .table-tag {
    min-width: 100px;
    max-width: 100px;
  }
  .table-category {
    min-width: 153px;
    max-width: 153px;
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
