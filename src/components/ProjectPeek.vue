<template>
  <div class="project_peek" :class="align">
    <img :src="getImgUrl(imageName)" v-bind:alt="imageName" />
    <div class="information">
      <h3>{{ title }}</h3>
      <p class="p-31-bold">{{ description }}</p>
      <button class="btn-primary">Read more</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectPeek",
  props: {
    align: {
      validator: (val) => {
        return ["left", "right"].indexOf(val) !== -1;
      },
      required: true,
    },
    imageName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
  },
};
</script>

<style scoped lang="scss">
.project_peek {
  display: grid;
  grid-gap: 50px;
  .information {
    grid-area: info;
    margin: auto;
    display: grid;
    grid-gap: 0.5rem;
    button {
      margin: auto;
      margin-top: 0.5rem;
    }
  }
  img {
    width: 100%;
    grid-area: img;
    border-radius: 20px;
  }
}

.left {
  grid-template-columns: 1fr 2fr;
  grid-template-areas: "img info";
}
.right {
  grid-template-columns: 2fr 1fr;
  grid-template-areas: "info img";
}

$phone-width: 450px;
$tablet-width: 1000px;
@media only screen and (max-width: $tablet-width) {
  .information {
    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 1.25rem;
    }
    button {
      margin-top: 0px;
    }
  }
}

@media only screen and (max-width: $phone-width) {
  .project_peek {
    display: flex;
    flex-direction: column;
    grid-gap: 0.5rem;
    .information {
      text-align: center;
      h3 {
        font-size: 1.25rem;
      }
      p {
        font-size: 1.563rem;
      }
    }
    img {
      margin: auto;
    }
  }
}
</style>
