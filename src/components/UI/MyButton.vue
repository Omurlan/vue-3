<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  background: var(--green);
  color: white;
  /*border: 1px solid #3eaf7c;*/
  border: none;
  cursor: pointer;
  border-radius: 4px;
}
</style>
