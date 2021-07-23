<template>
  <div id="gradient" class="gradient"></div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.gradient {
  background-color: #e7e7f7;
  background-image: #ffffff;
  background-image: radial-gradient(
      at 5% 85%,
      hsla(194, 49%, 85%, 1) 0,
      rgba(255, 255, 255, 0) 76%
    ),
    radial-gradient(
      at 15% 19%,
      hsla(192, 45%, 86%, 1) 0,
      rgba(255, 255, 255, 0) 46%
    ),
    radial-gradient(
      at 37% 78%,
      hsla(132, 53%, 87%, 1) 0,
      rgba(255, 255, 255, 0) 79%
    ),
    radial-gradient(
      at 98% 25%,
      hsla(292, 48%, 86%, 1) 0,
      rgba(255, 255, 255, 0) 40%
    ),
    radial-gradient(
      at 80% 73%,
      hsla(180, 65%, 77%, 1) 0,
      rgba(255, 255, 255, 0) 55%
    ),
    radial-gradient(
      at 59% 38%,
      hsla(42, 79%, 76%, 1) 0,
      rgba(255, 255, 255, 0) 56%
    );
}
</style>
