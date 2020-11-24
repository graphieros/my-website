<template>
  <div v-html="frac" />
</template>

<script>
import { defineComponent } from "vue";
import { fractal } from "../library/graphieros0.2";

export default defineComponent({
  name: "Fractal",
  props: {
    sequence: String,
    colors: String,
    svgSize: String,
    intensity: String,
    light: String,
    size: String
  },
  computed: {
    frac() {
      return fractal({
        sequence: this.sequence,
        colors: this.colors.split(","),
        svgSize: this.svgSize,
        intensity: this.intensity,
        light: Boolean(this.light),
        size: this.size
      });
    }
  }
});
</script>
<style lang="scss" scoped></style>
