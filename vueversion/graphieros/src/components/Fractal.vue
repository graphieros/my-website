<template>
  <div v-html="frac" />
</template>

<script>
import { defineComponent } from "vue";
import { callifractal } from "../library/graphieros0.2";

export default defineComponent({
  name: "Fractal",
  props: {
    sequence: String,
    colors: String,
    svgSize: String,
    intensity: String,
    light: Boolean,
    size: String
  },
  data() {
    return {
      frac: callifractal({
        sequence: this.sequence,
        colors: this.colors.split(","),
        svgSize: this.svgSize,
        intensity: this.intensity,
        light: Boolean(this.light), //weird hack
        size: this.size
      })
    };
  }
});
</script>
<style lang="scss" scoped></style>
