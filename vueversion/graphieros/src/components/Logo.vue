<template>
  <div>
    <Fractal
      class="fractal-logo"
      sequence="wz-zd-dw-qs-se-xs"
      colors="122,161,216"
      svgSize="200"
      intensity="1.2"
      light=""
      size="60"
    />
    <Fractal
      class="fractal-logo2"
      sequence="wz-zd-dw-qs-se-xs"
      colors="75,106,160"
      svgSize="100"
      size="60"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Fractal from "./Fractal";
export default defineComponent({
  name: "Logo",
  components: {
    Fractal
  }
});
</script>

<style lang="scss" scoped>
.fractal-logo {
  animation: fractal-logo 24s infinite linear;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  height: 200px;
  width: 200px;
  filter: drop-shadow(0 2px 2px RGBA(var(--c0), 0.5));
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
</style>