<template>
  <div class="home">
    <Parallax :ratio="0.2" :zPos="0"> <NavBar /><Hero /></Parallax>

    <div class="spacer" style="width: 100%; height: 100vh" />

    <div class="wrapper">
      <div class="ramp_container">
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
      </div>
      <div class="page_container">
        <section class="projects page_item">
          <h2>Projects</h2>
          <div class="project_cards">
            <ProjectPeek
              :align="'left'"
              :imageName="'KayAppDisplay.png'"
              :title="'KayApp'"
              :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis pretium rhoncus lectus tristique.'"
            />
            <ProjectPeek
              :align="'right'"
              :imageName="'EdensDisplay.png'"
              :title="'Eden\'s Garden'"
              :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis pretium rhoncus lectus tristique.'"
            />

            <ProjectPeek
              :align="'left'"
              :imageName="'ObioDisplay.png'"
              :title="'Obio Digital'"
              :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis pretium rhoncus lectus tristique.'"
            />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import ProjectPeek from "@/components/ProjectPeek.vue";
import Parallax from "@/components/Parallax.vue";
import NavBar from "@/components/NavBar.vue";
import $ from "jquery";
export default {
  name: "Home",
  components: {
    Hero,
    ProjectPeek,
    Parallax,
    NavBar,
  },
  setup() {
    var width = $(window).width();
    return {
      width,
    };
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  unmounted() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    myEventHandler() {
      this.width = $(window).width();
    },
  },
};
</script>

<style scoped>
.home {
  display: block;
  width: 100%;
}
.ramp {
  width: 100%;
  z-index: 4;
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  top: -104px;
  height: 106px;
  background-image: url("../assets/content-ramp.png");
}
.ramp_container {
  z-index: 4;
  position: absolute;
  width: 100%;
  height: 1px;
}
.content {
  z-index: 4;
  flex-direction: column;
}

.wrapper {
  z-index: 4;
  position: relative;
  width: 100%;
  display: block;
  background: #fcfcfd;
  padding-bottom: 106px;
}

.projects {
  display: grid;
  grid-gap: 1rem;
}
.project_cards {
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 4rem;
}
@media only screen and (max-width: 1100px) {
  .projects {
    text-align: center;
  }
}
</style>
