<template>
  <div v-html="line" />
</template>

<script>
import { defineComponent } from "vue";
import { molecular } from "../library/graphieros0.2";

export default defineComponent({
  name: "Molecule",
  props: {
    class: String,
    sequence: String,
    colors: String,
    size: String,
    strokeWidth: String
  },
  data() {
    return {
      line: molecular({
        class: this.class,
        sequence: this.sequence,
        colors: this.colors.split(","),
        size: this.size,
        strokeWidth: Number(this.strokeWidth)
      })
    };
  }
});
</script>
<style lang="scss" scoped></style>
