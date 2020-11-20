<template>
  <div v-html="lin" />
</template>

<script>
import { defineComponent } from "vue";
import { linear } from "../library/graphieros0.2";

export default defineComponent({
  name: "Linear",
  props: {
    class: String,
    sequence: String,
    colors: String,
    size: String,
    glyphWidth: String,
    strokeWidth: String
  },
  computed: {
    lin() {
      return linear({
        class: this.class,
        sequence: this.sequence,
        colors: this.colors.split(","),
        size: this.size,
        glyphWidth: this.glyphWidth,
        width: this.strokeWidth
      });
    }
  }
});
</script>
<style lang="scss" scoped></style>
