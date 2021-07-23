<template>
  <div class="availability">
    <div class="pulsating-circle" :class="colorSelector" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "Availability",
  props: {
    color: {
      validator(value) {
        return ["green", "orange", "red"].includes(value);
      },
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    colorSelector() {
      return this.color;
    },
  },
};
</script>

<style scoped lang="scss">
.availability {
  display: flex;
  align-items: center;
}
p {
  margin: 0;
  margin-left: 1.5rem;
  font-size: 1rem;
}
$green-color: #7bf48f;
$orange-color: #f4c47b;
$red-color: #f47b7b;
.green {
  &:before,
  &::after {
    background-color: $green-color;
    box-shadow: 0 0 8px $green-color;
  }
}
.orange {
  &:before,
  &::after {
    background-color: $orange-color;
    box-shadow: 0 0 8px $orange-color;
  }
}
.red {
  &:before,
  &::after {
    background-color: $red-color;
    box-shadow: 0 0 8px $red-color;
  }
}

.pulsating-circle {
  position: absolute;
  width: 10px;
  height: 10px;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    animation: pulse-dot 3s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;
  }
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.33);
  }
  100% {
    opacity: 0;
  }
}

@keyframes pulse-dot {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}
</style>
