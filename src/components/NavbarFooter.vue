<template>
  <div class="navbar">
    <div class="navbar__content container">
      <div class="navbar__btns" @click="hideArrow">
        <router-link class="link-item" to="/posts">Posts</router-link>
        <router-link class="link-item" to="/store">Store</router-link>
        <router-link class="link-item" to="composition"
          >Composition</router-link
        >
        <router-link class="link-item" to="/about">About</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hideArrow() {
      if (!localStorage.getItem("navbarFooter")) {
        localStorage.setItem("navbarFooter", "clicked");
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  background: var(--navbar) !important;
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  border-bottom: 1px solid #dadada;
  box-shadow: 1px -1px 3px #c9c9c9;
  padding: 0 15px;
  background: white;
}
[data-theme="dark"] .navbar {
  border: none;
  box-shadow: none;
}
.navbar__content {
  height: 100%;
  display: flex;
  align-items: center;
}

.navbar__btns {
  display: flex;
  justify-content: space-around;

  width: 100%;
}

.link-item {
  text-decoration: none;
  padding-bottom: 3px;
  border-bottom: 2px solid transparent;
}

.link-item:hover {
  border-color: #3eaf7c;
}

.link-item.router-link-active {
  border-color: #3eaf7c;
}

@media screen and (max-width: 600px) {
  .navbar {
    display: block;
    z-index: 1000;
  }
}
</style>
