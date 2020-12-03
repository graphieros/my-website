<template>
  <div class="phonology-body">
    <h1 v-if="selectedLang === 'toggle-right'">phono<span>Logy</span></h1>
    <h1 v-else>phono<span>Logie</span></h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Fractal from "@/components/Fractal.vue";
import Linear from "@/components/Linear.vue";
import store from "@/store/index.ts";

export default defineComponent({
  name: "Phonology",
  components: {},
  data() {
    return {};
  },
  computed: {
    selectedLang() {
      return store.getters.toggleClass;
    },
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.phonology-body {
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
    }
  }
  p {
    text-align: center;
    max-width: 60ch;
    margin-left: 50%;
    transform: translateX(-50%);
    color: RGB(var(--c3));
  }
}
</style>
