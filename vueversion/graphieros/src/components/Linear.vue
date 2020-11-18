<template>
  <div v-html="line" />
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
    glyphWidth: String
  },
  data() {
    return {
      line: linear({
        class: this.class,
        sequence: this.sequence,
        colors: this.colors.split(","),
        size: this.size,
        glyphWidth: this.glyphWidth
      })
    };
  }
});
</script>
<style lang="scss" scoped></style>
