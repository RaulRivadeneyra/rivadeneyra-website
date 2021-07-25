<template>
  <div class="home">
    <Parallax :ratio="0.2" :zPos="0"> <NavBar /><Hero /></Parallax>

    <div class="spacer" style="width: 100%; height: 100vh" />

    <div id="project" class="wrapper">
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
      <div class="site_container">
        <div class="page_container page_max_size">
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
    <div class="footer wrapper">
      <div class="site_container">
        <div class="information page_container page_max_size">
          <section class="contact page_item">
            <h2>Hit me up</h2>
            <p class="p-31-light text" style="color: #fcfcfd">
              Auctor sed pharetra euismod pellentesque. Consectetur donec nec.
            </p>
            <div class="contact_links">
              <a href="https://www.linkedin.com/in/rivadeneyra/">
                <img
                  alt="LinkedIn"
                  src="@/assets/LinkedInLogo.png"
                  width="50"
                  height="50
            "
                />
              </a>
              <a href="https://github.com/RaulRivadeneyra">
                <img
                  alt="Github"
                  src="@/assets/GithubLogo.png"
                  width="50"
                  height="50
            "
                />
              </a>
              <a href="mailto:raul@rivadeneyra.me">
                <img
                  alt="Email"
                  src="@/assets/MailLogo.png"
                  width="50"
                  height="50
            "
                />
              </a>
            </div>
          </section>
        </div>
      </div>
      <div class="copyright page_container page_max_size">
        <p class="page_item" style="color: #fcfcfd">© 2021 Raúl Rivadeneyra</p>
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

<style scoped lang="scss">
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
  margin-bottom: -1px;
  stroke: transparent;
  stroke-width: 0px;
}
.copyright {
  background: #304f6e;
  padding: 1rem 0;
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

.project_cards {
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 4rem;
}
.footer {
  padding-bottom: 0px;
  background: #fcfcfd;
  .site_container {
    background: #2a3d4f;

    border-radius: 20px 20px 0 0;
    padding-top: 3rem;
  }
}
.information {
  padding-bottom: 4rem;
}
.contact {
  h2 {
    font-size: 3.052rem;
    line-height: 4rem;
    margin-bottom: 1rem;
  }
}
.text {
  max-width: 750px;
}

.contact_links {
  width: 100%;
  display: flex;
  margin-top: 3rem;
  justify-content: center;
  a {
    margin: 0 2rem;
  }
}
$tablet-width: 1000px;
@media only screen and (max-width: $tablet-width) {
  .projects {
    h2 {
      font-size: 3.815rem;
    }
  }
  .contact {
    h2 {
      line-height: inherit;
      font-size: 1.953rem;
    }
    p {
      font-size: 1.25rem;
    }
  }
  .information {
    padding-bottom: 2rem;
  }
  .contact_links {
    a {
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
}

$phone-width: 450px;
@media only screen and (max-width: $phone-width) {
  .projects {
    text-align: center;
    h2 {
      line-height: inherit;
      font-size: 3.815rem;
    }
  }
  #project {
    padding-bottom: 2rem;
  }
  .text {
    max-width: 100%;
  }
  .contact {
    text-align: center;
    h2 {
      line-height: inherit;
      font-size: 1.953rem;
    }
    p {
      font-size: 1.25rem;
    }
  }
  .copyright {
    p {
      font-size: 0.8rem;
      text-align: center;
    }
  }
  .information {
    padding-bottom: 2rem;
  }
  .contact_links {
    a {
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>
