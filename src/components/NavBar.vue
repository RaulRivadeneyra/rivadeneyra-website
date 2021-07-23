<template>
  <div class="navbar page_container-center">
    <div class="background" />
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
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
}
.container {
  padding: 1rem 2rem;
}
.middle-links > * {
  padding: 0rem 1rem;
}
.background {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  background: white;
  fill: url(#gradient);
}
</style>
