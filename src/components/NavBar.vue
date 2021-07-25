<template>
  <div class="navbar">
    <router-link class="p-20-regular left" :to="{ name: 'Home' }"
      >Rivadeneyra</router-link
    >
    <div v-if="hasSpace" class="middle-links p-20-regular center">
      <router-link :to="{ name: 'Work' }">Work</router-link>
      <router-link :to="{ name: 'About' }">About me</router-link>
      <a href="#contact">Contact</a>
    </div>
    <a v-if="hasSpace" class="p-20-regular right" href=""><em>Resume</em></a>
    <a v-if="!hasSpace" class="p-20-regular right" href=""><em>Menu</em></a>
  </div>
</template>

<script>
import $ from "jquery";
import { ref } from "vue";
export default {
  name: "NavBar",
  setup() {
    const space = ref($(window).width());
    return {
      space,
    };
  },
  computed: {
    hasSpace() {
      return this.space > 800 ? true : false;
    },
  },
  mounted() {
    let _this = this;
    window.addEventListener("resize", function () {
      _this.space = $(window).width();
    });
  },
};
</script>

<style scoped lang="scss">
.navbar {
  position: absolute;
  width: 100%;
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-areas: "left center right";
  .middle-links {
    margin: auto;
    * {
      padding: 0rem 1rem;
    }
  }
  .right {
    text-align: right;
    grid-area: right;
  }
  .center {
    text-align: center;
    grid-area: center;
  }
  .left {
    text-align: left;
    grid-area: left;
  }
}
</style>
