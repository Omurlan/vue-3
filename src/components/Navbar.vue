<template>
  <div class="navbar">
    <div class="navbar__content container">
      <h3 class="logo" @click="$router.push('/')">Vue 3</h3>

      <div class="theme">
        <my-switch class="theme-switch" />

        <v-icon
          v-if="$store.state.theme.theme === 'dark'"
          class="emoji"
          name="bi-emoji-smile-fill"
        />
        <v-icon v-else class="emoji" name="ri-emotion-sad-fill" />
      </div>
      <div class="navbar__btns">
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
export default {};
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  top: 0;
  background: var(--navbar);
  height: 65px;
  border-bottom: 1px solid #dadada;
  box-shadow: 1px 1px 3px #c9c9c9;
  padding: 0 15px;
  z-index: 100;
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

.logo {
  color: var(--green);
  margin-right: 10px;
  cursor: pointer;
}

[data-theme="dark"] .logo {
  color: var(--text);
}

.navbar__btns {
  display: flex;
  gap: 20px;
  margin-left: auto;
  margin-top: 3px;
}

.link-item {
  text-decoration: none;
  padding-bottom: 3px;
  border-bottom: 2px solid transparent;
}

.link-item:hover {
  border-color: var(--green);
}

.link-item.router-link-active {
  border-color: var(--green);
}

.theme {
  display: flex;
  gap: 10px;
}

.emoji {
  color: #f7c64b;
  background: #1c2128;
  border-radius: 50%;
  width: 20px;
  height: 20px;
}

@media screen and (max-width: 600px) {
  .navbar {
    height: 40px;
  }
  .theme {
    display: grid;
    grid-template-areas: "emoji switch";
    margin-left: auto;
  }
  .theme-switch {
    grid-area: switch;
  }
  .emoji {
    grid-area: emoji;
  }
  .navbar__btns {
    display: none;
  }
}
</style>
