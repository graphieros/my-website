<template>
  <div>
    <Fractal
      class="fractal-logo"
      sequence="wz-zd-dw-qs-se-xs"
      colors="122,161,216"
      :svgSize="big"
      intensity="1.2"
      light=""
      size="60"
    />
    <Fractal
      class="fractal-logo2"
      sequence="wz-zd-dw-qs-se-xs"
      colors="211,227,252"
      :svgSize="medium"
      size="60"
    />
    <Fractal
      class="fractal-logo3"
      sequence="wz-zd-dw-qs-se-xs"
      colors="250,254,255"
      :svgSize="small"
      size="60"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Fractal from "./Fractal";
export default defineComponent({
  name: "Logo",
  props: {
    maxSize: String
  },
  components: {
    Fractal
  },
  computed: {
    big() {
      return `${Number(this.maxSize)}`;
    },
    medium() {
      return `${Number(this.maxSize) / 2}`;
    },
    small() {
      return `${Number(this.maxSize) / 4}`;
    }
  }
});
</script>

<style lang="scss" scoped>
.fractal-logo,
.fractal-logo2,
.fractal-logo3 {
  filter: drop-shadow(0 2px 2px RGBA(var(--c0), 0.5));
}

.fractal-logo {
  animation: fractal-logo 24s infinite linear;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  height: 200px;
  width: 200px;
}

@keyframes fractal-logo {
  100% {
    transform: translateX(-50%) rotate(360deg);
  }
}
.fractal-logo2 {
  animation: fractal-logo2 12s infinite linear;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  height: 100px;
  width: 100px;
}
@keyframes fractal-logo2 {
  100% {
    transform: translateX(-50%) rotate(-360deg);
  }
}
.fractal-logo3 {
  animation: fractal-logo3 6s infinite linear;
  position: absolute;
  top: 125px;
  left: 50%;
  transform: translateX(-50%);
  height: 50px;
  width: 50px;
}
@keyframes fractal-logo3 {
  100% {
    transform: translateX(-50%) rotate(360deg);
  }
}
</style>
