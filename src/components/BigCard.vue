<template>
  <div class="big_card left" v-if="align == 'left'">
    <img :src="getImgUrl(imageName)" v-bind:alt="imageName" />
    <div class="information">
      <div class="text">
        <h3>{{ title }}</h3>
        <p class="p-31-bold">{{ description }}</p>
      </div>
      <div class="center">
        <button class="btn-primary">Read more</button>
      </div>
    </div>
  </div>
  <div class="big_card right" v-if="align == 'right'">
    <div class="information">
      <div class="text">
        <h3>{{ title }}</h3>
        <p class="p-31-bold">{{ description }}</p>
      </div>
      <div class="center">
        <button class="btn-primary">Read more</button>
      </div>
    </div>
    <img :src="getImgUrl(imageName)" v-bind:alt="imageName" />
  </div>
</template>

<script>
export default {
  name: "BigCard",
  props: {
    align: {
      validator(value) {
        return ["left", "right"].includes(value);
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
.big_card {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0;
  img {
    width: 400px;
    height: 400px;
    border-radius: 20px;
  }
}
.information {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.left {
  text-align: left;
  .text {
    padding-left: 50px;
  }
}
.right {
  text-align: right;
  .text {
    padding-right: 50px;
  }
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  height: auto;
}
</style>
