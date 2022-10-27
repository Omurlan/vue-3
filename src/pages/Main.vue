<template>
  <div class="main">
    <h1>
      This application was created as a result of learning on the UlbiTv
      channel.
      <br />
      Dark mode and all styling was done by me.
    </h1>

    <h1 class="learned">Topics Learned:</h1>
    <ul>
      <li>Composition API / hooks</li>
      <li>Vuex</li>
      <li>Custom directives</li>
      <li>Register components</li>
      <li>V-model (Two-way binding)</li>
      <li>Vue Router</li>
      <li>Mixins</li>
      <li>Compoonent life cycles</li>
    </ul>

    <v-icon v-if="renderArrow" class="arrow" name="co-arrow-bottom" />
  </div>
</template>

<script>
export default {
  data: () => ({
    renderArrow: false,
  }),
  mounted() {
    if (!localStorage.getItem("navbarFooter")) {
      setTimeout(() => {
        this.renderArrow = true;
      }, 8000);
    }
  },
};
</script>

<style scoped>
.main {
  background: var(--navbar);
  border: 1px solid var(--border);
  padding: 10px;
  border-radius: 4px;
}

.learned {
  margin-top: 20px;
}

ul {
  list-style: inside;
  margin-top: 20px;
}

ul li {
  margin-bottom: 5px;
}

.arrow {
  display: none;
  position: absolute;
  bottom: 90px;
  left: 12%;
  transform: scale(3);
  color: var(--text);
  animation: 1s alternate-reverse infinite;
  animation-name: moving;
}

@keyframes moving {
  from {
    bottom: 90px;
  }
  to {
    bottom: 80px;
  }
}

@media screen and (max-width: 600px) {
  .arrow {
    display: block;
  }
}
</style>
