<template>
  <div class="application">
    <navbar />
    <navbar-footer />
    <div class="app container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import NavbarFooter from "@/components/NavbarFooter";
export default {
  components: { NavbarFooter, Navbar },

  mounted() {
    console.log(this.$store.state.theme.theme);
  },
};
</script>

<style>
* {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 500;
  color: var(--text);
}

a,
p,
ul li {
  color: var(--text);
}

body {
  background: var(--background);
}

.app {
  padding: 20px;
  margin: 65px auto !important;
  overflow-x: hidden;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
}

@media screen and (max-width: 600px) {
  .app {
    margin-top: 40px !important;
    margin-bottom: 50px !important;
  }
}

:root {
  --background: white;
  --navbar: white;
  --card: white;
  --text: black;
  --border: #e2e2e2;
  --btn-delete: #9b9b9b;
  --green: #3eaf7c;
  --red: #d2705a;
  --blue: #658ed0;
  /*--green-border: */
}

[data-theme="dark"] {
  --background: #1c2128;
  --navbar: #2d333b;
  --text: #adbac7;
  --btn-delete: #373e47;
  --green: #347d39;
  --border: #373e47;
  --red: #c95b42;
  --blue: #316dca;
}

[data-theme="light"] {
  --background: white;
}
</style>
