<template>
  <div ref="parallax" class="parallax">
    <slot></slot>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import $ from "jquery";
export default {
  name: "Parallax",
  props: {
    ratio: {
      type: Number,
      default: 1,
    },
    zPos: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const parallax = ref(null);

    onMounted(() => {
      parallax.value.style.zIndex = `${props.zPos}`;
      $(window).scroll(() => {
        var moveY = $(window).scrollTop() * props.ratio;
        parallax.value.style.top = `${-moveY}px`;
      });
    });

    return {
      parallax,
    };
  },
};
</script>

<style scoped lang="scss">
.parallax {
  position: fixed;
  width: 100%;
}
</style>
