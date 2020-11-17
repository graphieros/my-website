<template>
  <div v-html="line" />
</template>

<script>
import { defineComponent } from "vue";
import { fastLine } from "../library/graphieros0.2";

export default defineComponent({
  name: "Linear",
  props: {
    class: String,
    sequence: String,
    colors: String,
    size: String
  },
  data() {
    return {
      line: fastLine({
        class: this.class,
        sequence: this.sequence,
        colors: this.colors.split(","),
        size: this.size
      })
    };
  }
});
</script>
<style lang="scss" scoped></style>
