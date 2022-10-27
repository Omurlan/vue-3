<template>
  <select v-model="modelValue" @change="changeOptions">
    <option value="">Default</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOptions(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
select {
  background: var(--background);
  border-radius: 4px;
  padding: 5px;
  border: 1px solid var(--border);
  color: var(--text);
  cursor: pointer;
}
select option {
  line-height: 20px !important;
}
</style>
