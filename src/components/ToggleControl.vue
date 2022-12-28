<template>
  <label className="label cursor-pointer">
    <span className="label-text">{{ label }}</span>
    <input
      type="checkbox"
      className="toggle toggle-sm"
      :checked="checked"
      @input="$emit('update:modelValue', !checked)"
    />
  </label>
</template>
<script setup>
  const props = defineProps({
    checked: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: Boolean,
      default: true,
    },
  });
  defineEmits(["update:modelValue"]);
</script>
