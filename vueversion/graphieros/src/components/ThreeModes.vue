<template>
  <!--English version-->
  <div class="three-modes-body">
    <h1 v-if="selectedLang === 'toggle-right'">
      the 3 modes of <span>graphieros</span>
    </h1>
    <h1 v-else>les 3 modes du <span>graphieros</span></h1>

    <div class="three-modes-frac">
      <Fractal svgSize="200" sequence="zw-wd-dz" colors="211,227,252" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store/index.ts";
import { graphierosDictionnary } from "@/library/graphierosDictionnary";
import Linear from "@/components/Linear.vue";
import Fractal from "@/components/Fractal.vue";

export default defineComponent({
  name: "ThreeModes",
  components: {
    Fractal
  },
  computed: {
    selectedLang() {
      return store.getters.toggleClass;
    }
  }
});
</script>

<style lang="scss" scoped>
.three-modes-body {
  width: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 150px;
  font-family: var(--logo);
  transition: all 0.25s ease-in-out;
  h1 {
    color: RGB(var(--c3));
    font-size: 1.618em;
    span {
      font-size: 2em;
      color: RGB(var(--c2));
      display: block;
      margin-top: -18px;
    }
  }
}
.three-modes-frac {
  div {
    width: 200px;
    height: 200px;
    margin-left: 50%;
    transform: translateX(-50%);
    filter: drop-shadow(0 20px 2px RGBA(var(--c0), 0.5));
    animation: triangle-drop 0.618s cubic-bezier(1, 1.61803398875, 0.61803398875, 1);
  }
}
@keyframes triangle-drop {
  0% {
    transform: translateX(-50%) scale(0, 0) rotate(30deg);
    opacity: 0;
    filter: drop-shadow(0 2px 2px RGBA(var(--c0), 0.5));
  }
  100% {
    transform: translateX(-50%) scale(1, 1);
    opacity: 1;
    filter: drop-shadow(0 20px 2px RGBA(var(--c0), 0.5));
  }
}
</style>