<template>
  <div v-bind="containerProps" className="virtual-wrapper w-full">
    <div className="table-header table-row w-full">
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
      <!-- usage -->
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
      <!-- value -->
      <div className="table-value table-cell" v-show="display.value">Tier1</div>
      <div className="table-value table-cell" v-show="display.value">Tier2</div>
      <div className="table-value table-cell" v-show="display.value">Tier3</div>
      <div className="table-value table-cell" v-show="display.value">
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
        :tag="data.tag"
        :usage="data.usage"
        :value="data.value"
        :display="display"
      />
    </div>
  </div>
  <teleport to="#main-left">
    <div className="flex flex-col">
      <ToggleControl
        v-for="entry in Object.keys(display)"
        :checked="display[entry]"
        :label="entry"
        v-model="display[entry]"
      />
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
  const data = globalStore.liveData;

  /**
   * Virtual Scroll
   */

  const { list, containerProps, wrapperProps } = useVirtualList(data, {
    itemHeight: 56,
  });

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
</script>

<style>
  .table-row {
    display: flex;
    flex-direction: row;
    border-bottom-width: 1px;
    --tw-border-opacity: 1;
    border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));
  }
  .table-cell {
    padding: 1rem;
    vertical-align: middle;
    text-align: left;
  }
  .table-header {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    position: sticky;
    top: 0;
  }

  .virtual-wrapper {
    height: 690px;
    width: 100%;
  }

  .table-name {
    min-width: 325px;
  }
  .table-nominal {
    min-width: 90px;
  }
  .table-lifetime {
    min-width: 150px;
  }
  .table-restock {
    min-width: 120px;
  }
  .table-min {
    min-width: 90px;
  }
  .table-quant {
    min-width: 102px;
  }
  .table-cost {
    min-width: 66.5px;
  }
  .table-tag {
    min-width: 100px;
  }
  .table-category {
    min-width: 153px;
  }
  .table-usage {
    min-width: 100px;
  }
  .table-usage.table-name-firefighter {
    min-width: 106px;
  }
  .table-usage.table-name-industrial {
    min-width: 103px;
  }
  .table-usage.table-name-contaminated {
    min-width: 128px;
  }
  .table-value {
    min-width: 90px;
  }
</style>
