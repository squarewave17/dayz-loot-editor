<template>
  <div className="grid grid-cols-6 gap-x-12 gap-y-1 pb-6">
    <ToggleControl
      v-for="entry in Object.keys(display)"
      :checked="display[entry]"
      :label="entry"
      v-model="display[entry]"
    />
  </div>

  <table className="table w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th v-show="display.nominal">Nominal</th>
        <th v-show="display.lifetime">Lifetime</th>
        <th v-show="display.restock">Restock</th>
        <th v-show="display.min">Min</th>
        <th v-show="display.quantity">QuantMin</th>
        <th v-show="display.quantity">QuantMax</th>
        <th v-show="display.cost">Cost</th>
        <th v-show="display.tag">Count in Cargo</th>
        <th v-show="display.tag">Count in Hoarder</th>
        <th v-show="display.tag">Count in Map</th>
        <th v-show="display.tag">Count in Player</th>
        <th v-show="display.tag">Count in Crafted</th>
        <th v-show="display.tag">Count in Deloot</th>
        <th v-show="display.category">Category</th>
        <!-- usage -->
        <th v-show="display.usage">Coast</th>
        <th v-show="display.usage">Farm</th>
        <th v-show="display.usage">Firefighter</th>
        <th v-show="display.usage">Hunting</th>
        <th v-show="display.usage">Industrial</th>
        <th v-show="display.usage">Medic</th>
        <th v-show="display.usage">Military</th>
        <th v-show="display.usage">Office</th>
        <th v-show="display.usage">Police</th>
        <th v-show="display.usage">Prison</th>
        <th v-show="display.usage">School</th>
        <th v-show="display.usage">Town</th>
        <th v-show="display.usage">Village</th>
        <th v-show="display.usage">ContaminatedArea</th>
        <!-- value -->
        <th v-show="display.value">Tier1</th>
        <th v-show="display.value">Tier2</th>
        <th v-show="display.value">Tier3</th>
        <th v-show="display.value">Unique</th>
      </tr>
    </thead>

    <EditorRow
      v-for="(entry, index) in data"
      :key="index"
      :name="entry.name"
      :nominal="entry.nominal"
      :lifetime="entry.lifetime"
      :restock="entry.restock"
      :min="entry.min"
      :quantmin="entry.quantmin"
      :quantmax="entry.quantmax"
      :cost="entry.cost"
      :countInCargo="entry.countInCargo"
      :countInHoarder="entry.countInHoarder"
      :countInMap="entry.countInMap"
      :countInPlayer="entry.countInPlayer"
      :crafted="entry.crafted"
      :deloot="entry.deloot"
      :category="entry.category"
      :tag="entry.tag"
      :usage="entry.usage"
      :value="entry.value"
      :display="display"
    />
  </table>
</template>

<script setup>
  import { reactive, computed, shallowReactive, onMounted, ref } from "vue";
  import ToggleControl from "../components/ToggleControl.vue";
  import EditorRow from "../components/EditorRow.vue";
  import { useGlobalStore } from "../store/globalStore";
  /**
   * store
   */
  const globalStore = useGlobalStore();
  const data = globalStore.liveData;

  /**
   * Property Visibility
   */
  const display = reactive({
    nominal: true,
    lifetime: true,
    restock: true,
    min: true,
    quantity: true,
    cost: true,
    flags: true,
    category: true,
    tag: true,
    usage: true,
    value: true,
  });
</script>
