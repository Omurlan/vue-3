export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
  watch: {
    show(value) {
      document.body.style.overflowY = !value ? "scroll" : "hidden";
    },
  },
};
