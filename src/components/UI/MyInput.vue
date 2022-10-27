<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid #b9b9b9;
  color: var(--text);
  background: var(--background);
  padding: 10px 15px;
  margin-top: 15px;
  border-radius: 4px;
  outline: none;
}

.input::placeholder {
  color: var(--text);
}

[data-theme="dark"] .input {
  border-color: var(--border);
}

.input:focus {
  border-color: #8d8d8d;
}
</style>
