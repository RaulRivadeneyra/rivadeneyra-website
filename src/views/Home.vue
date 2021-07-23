<template>
  <div class="home" style="margin-top: 0">
    <Hero />
    <svg
      width="100%"
      height="106"
      viewBox="0 0 1440 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      class="ramp"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.2476 0.327952C9.73364 -0.391652 0 8.75251 0 20.289V106H1439.92C1439.06 96.2564 1431.19 88.4492 1421.25 87.8279L21.2476 0.327952Z"
        fill="#FCFCFD"
      />
    </svg>
    <div
      class="page_container-center"
      style="background: #fcfcfd; position: absolute z-index: 5;"
    >
      <div class="content page_minmax_size-spread page_padding">
        <h2>Projects</h2>
        <div class="cards">
          <BigCard
            :align="'left'"
            :imageName="'KayAppDisplay.png'"
            :title="'KayApp'"
            :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis pretium rhoncus lectus tristique.'"
          />
          <BigCard
            :align="'right'"
            :imageName="'EdensDisplay.png'"
            :title="'Eden\'s Garden'"
            :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis pretium rhoncus lectus tristique.'"
          />
          <BigCard
            :align="'left'"
            :imageName="'ObioDisplay.png'"
            :title="'Obio Digital'"
            :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis pretium rhoncus lectus tristique.'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import BigCard from "@/components/BigCard.vue";

export default {
  name: "Home",
  components: {
    Hero,
    BigCard,
  },
};
</script>

<style scoped>
.home {
  display: block;
}
.ramp {
  position: absolute;
  z-index: 5;
  width: 100%;
  min-width: none;
  background-size: cover;
  background-repeat: no-repeat;
  height: 106px;
  bottom: -5px;
  background-image: url("../assets/content-ramp.png");
}
.content {
  flex-direction: column;
  z-index: 5;
  background: #fcfcfd;
}
.container {
  margin: 0;
  align-items: center;
  margin: 0rem 0rem;
  max-width: 200%;
  display: flex;
  justify-content: space-between;
}
BigCard {
  margin: 10rem 0;
}
</style>
