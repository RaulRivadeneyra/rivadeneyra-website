<template>
  <DynamicBackground class="full_screen background" />
  <div class="page_container full_screen">
    <div class="content page_item">
      <div class="information">
        <div class="greeting">
          <p class="p-25-regular">Hi! I'm Raúl Rivadeneyra ✌🏽</p>
          <Availability :color="'green'" :text="'Available for new projects'" />
        </div>
        <h1>
          I create <strong>experiences</strong> that
          <strong>help people</strong> reach their dreams
        </h1>
        <p class="p-25-regular">
          Sodales fermentum vulputate at egestas tortor pellentesque. Sed tempus
          nibh tincidunt ac. Integer diam id ac porttitor. Habitant non odio et
          aliquam urna in imperdiet convallis et.
        </p>
        <button class="btn-primary">Know more</button>
      </div>
      <img v-if="hasSpace" src="@/assets/profile-image.png" alt="" />
    </div>
  </div>
</template>

<script>
import Availability from "@/components/Availability.vue";
import DynamicBackground from "@/components/DynamicBackground.vue";
import { ref } from "vue";
import $ from "jquery";
export default {
  name: "Hero",
  components: {
    Availability,
    DynamicBackground,
  },
  setup() {
    const space = ref($(window).width());
    return {
      space,
    };
  },
  computed: {
    hasSpace() {
      return this.space > 1250 ? true : false;
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
.background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -4;
}

.information {
  display: grid;
  grid-gap: 1.5rem;
  button {
    margin: auto;
  }
}

.content {
  justify-content: center;
  align-items: center;
  grid-gap: 3rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: "info img";
  .information {
    grid-area: info;
  }
  img {
    grid-area: img;
  }
}

@media only screen and (max-width: 1250px) {
  .content {
    grid-template-columns: 1fr;
    grid-template-areas: "info";
  }
}
</style>
