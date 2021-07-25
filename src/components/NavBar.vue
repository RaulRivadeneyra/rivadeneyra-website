<template>
  <div class="site_container">
    <div class="navbar page_max_size">
      <router-link class="p-20-regular left" :to="{ name: 'Home' }"
        >Rivadeneyra</router-link
      >
      <a class="p-20-regular right" href=""><em>Resume</em></a>
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
  width: 100%;
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-areas: "left center right";
  .right {
    text-align: right;
    grid-area: right;
  }
  .left {
    text-align: left;
    grid-area: left;
  }
}
</style>
