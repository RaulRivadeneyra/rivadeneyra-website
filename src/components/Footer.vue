<template>
  <div class="footer">
    <div id="contact" class="contact page_container-center">
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
            fill="#2a3d4f"
            stroke="#2a3d4f"
          />
        </svg>
      </div>
      <div class="page_minmax_size page_padding">
        <h2 style="font-size: 3.052rem; line-height: 4rem; margin-bottom: 1rem">
          Hit me up
        </h2>
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
      </div>
    </div>
    <div class="copyright page_container-center">
      <p class="page_minmax_size page_padding" style="color: #fcfcfd">
        © 2021 Raúl Rivadeneyra
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped lang="scss">
.contact {
  background: #2a3d4f;
  padding-bottom: 3rem;
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
.text {
  max-width: 750px;
}
.ramp_container {
  position: absolute;
  width: 100%;
  height: 1px;
}
.copyright {
  background: #304f6e;
  padding: 1rem 0;
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
</style>
