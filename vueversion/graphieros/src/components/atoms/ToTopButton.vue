<template>
  <div @click="goToTop" :class="btnClass">
    <Fractal svgSize="60px" sequence="qz-zs-se-ed-zw-ex" colors="255,255,255" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Fractal from "@/components/Fractal.vue";

export default defineComponent({
  name: "ToTopButton",
  components: {
    Fractal,
  },
  computed: {},
  data() {
    return {
      btnClass: "hidden",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    goToTop() {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    },
    handleScroll() {
      if (window.scrollY > 300) {
        this.btnClass = "to-top-button";
      } else {
        this.btnClass = "hidden";
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.to-top-button,
.hidden {
  height: 60px;
  width: 60px;
  position: fixed;
  bottom: 24px;
  right: 12px;
  background: RGB(var(--c0));
  border-radius: 100%;
  align-content: center;
  justify-content: center;
  cursor: pointer;
  div {
    height: 100%;
  }
}
.to-top-button {
  display: flex;
}
.hidden {
  opacity: 0;
  animation: vanish 1s ease-out;
}

@keyframes vanish {
  0% {
    display: flex;
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
