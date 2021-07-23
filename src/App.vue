<template>
  <NavBar />
  <router-view class="header-padding" />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
@import "@/containment.scss";
@import "@/colors.scss";
@import "@/fonts.scss";

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
}
html {
  background: #fcfcfd;
}
#app {
  font-family: $main-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: black;
  text-decoration: none; /* no underline */
}
a:active {
  color: blue;
}

.btn-primary {
  border: none;
  color: rgb(0, 0, 0);
  padding: 5px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: $main-font;
  font-size: 16px;
  margin: 10px 2px;
  border-radius: 20px;
  background: $pink-gradient-light;
  margin: 0;
}
.btn-primary:hover {
  box-shadow: 0px 0px 10px 0.05px #0000005b;
}
</style>
