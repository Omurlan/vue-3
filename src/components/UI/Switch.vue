<template>
  <input type="checkbox" @change="toggleSwitch" :checked="state" />
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "my-switch",
  methods: {
    toggleSwitch() {
      this.$store.commit("toggleTheme");
    },
  },
  computed: mapState({
    state: (state) => state.theme.theme === "dark",
  }),
};
</script>

<style scoped>
input {
  position: relative;
  width: 40px;
  height: 20px;
  -webkit-appearance: none;
  background: var(--background);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  outline: none;
  border-radius: 10px;
  transition: 0.5s;
  transform: scale(0.9);
  cursor: pointer;
}
input:checked {
  background: var(--green);
}
input:before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 0;
  left: 0;
  background: #adbac7;
  transform: scale(1.1);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}
input:checked:before {
  left: 20px;
}
</style>
