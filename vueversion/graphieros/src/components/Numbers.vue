<template>
  <div class="numbers-body">

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Fractal from "@/components/Fractal.vue";
import Linear from "@/components/Linear.vue";
import store from "@/store/index.ts";

export default defineComponent({
  name: "Numbers",
  components: {},
});
</script>

<style lang="scss" scoped>
.numbers-body {
  width: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 130px;
  font-family: var(--logo);
  transition: all 0.25s ease-in-out;
  h1 {
    color: RGB(var(--c3));
    font-size: 3em;
    span {
      color: RGB(var(--c2));
      display: inline-block;
      transform: rotate(9deg);
    }
  }
  p {
    text-align: left;
    max-width: 60ch;
    margin-left: 50%;
    transform: translateX(-50%);
    color: RGB(var(--c3));
  }
}

</style>
