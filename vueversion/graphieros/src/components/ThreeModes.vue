<template>
  <div class="three-modes-body">
    <!--English version-->
    <h1>The 3 modes of<span>graphieros</span></h1>
    <!--French version-->
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
    color: RGB(var(--c2));
    font-size: 1.618em;
    span.what-is {
      display: block;
      font-size: 1em;
      color: RGB(var(--c3));
      margin-left: -195px;
    }
    span {
      font-size: 2em;
      color: RGB(var(--c2));
      display: block;
      margin-top: -18px;
    }
  }
}
</style>