<template>
  <div class="hero full_screen">
    <div class="fixed-area">
      <DynamicBackground class="full_screen background" />
      <div class="page_container-center">
        <div class="content_container page_minmax_size-spread page_padding">
          <div class="information">
            <div class="text">
              <p class="p-25-regular">Hi! I'm Raúl Rivadeneyra ✌🏽</p>
              <Availability
                :color="'green'"
                :text="'Available for new projects'"
              />
              <h1>
                I create <strong>experiences</strong> that
                <strong>help people</strong> reach their dreams
              </h1>

              <p class="p-25-regular">
                Sodales fermentum vulputate at egestas tortor pellentesque. Sed
                tempus nibh tincidunt ac. Integer diam id ac porttitor. Habitant
                non odio et aliquam urna in imperdiet convallis et.
              </p>
            </div>
            <div class="center">
              <button class="btn-primary">Know more</button>
            </div>
          </div>
          <div class="image">
            <img src="@/assets/profile-image.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Availability from "@/components/Availability.vue";
import DynamicBackground from "@/components/DynamicBackground.vue";
export default {
  name: "Hero",
  components: {
    Availability,
    DynamicBackground,
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
.content_container {
  align-items: center;
}

$outer-padding: 5%;
$inner-padding: 1.5rem;

.information {
  max-width: 48rem;
  display: flex;
  padding-right: $inner-padding;
  flex-direction: column;
  vertical-align: middle;
}
img {
  padding-left: $inner-padding;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  height: auto;
}

.fixed-area {
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 0;
  top: 0;
  left: 0;
  height: 100vh;
}

.container {
  display: flex;
  min-width: 800px;
  width: 100%;
  max-width: 1400px;
  justify-content: center;
}
</style>
