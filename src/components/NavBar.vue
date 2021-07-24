<template>
  <div class="navbar page_container-center">
    <div class="container page_minmax_size-spread">
      <div class="signature p-20-regular">
        <router-link :to="{ name: 'Home' }">Rivadeneyra</router-link>
      </div>
      <div class="middle-links p-20-regular">
        <router-link :to="{ name: 'Work' }">Work</router-link>
        <router-link :to="{ name: 'About' }">About me</router-link>
        <a href="#contact">Contact</a>
      </div>
      <div class="resume p-20-regular">
        <a href=""><em>Resume</em></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped lang="scss">
.navbar {
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
}
.container {
  padding: 1rem 2rem;
}
.middle-links > * {
  padding: 0rem 1rem;
}
</style>
