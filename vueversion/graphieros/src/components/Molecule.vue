<template>
  <div v-html="mole" />
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
  computed: {
    mole() {
      return molecular({
        class: this.class,
        sequence: this.sequence,
        colors: this.colors.split(","),
        size: this.size,
        strokeWidth: Number(this.strokeWidth)
      });
    }
  }
});
</script>
<style lang="scss" scoped></style>
