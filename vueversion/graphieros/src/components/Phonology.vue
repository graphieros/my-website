<template>
  <div class="phonology-body">
    <h1 v-if="selectedLang === 'toggle-right'">phono<span>Logy</span></h1>
    <h1 v-else>phono<span>Logie</span></h1>
    <div class="phonology-set-wrapper">
      <div class="phonology-set">
        <span v-if="selectedLang === 'toggle-right'">consonants</span>
        <span v-else>consonnes</span>

        <p>
          [b], [ʃ], [k], [d], [f], [g], [h], [ʒ], [l], [m], [n], [p], [r], [s],
          [t], [v], [w], [z]
        </p>
        <span v-if="selectedLang === 'toggle-right'">vowels</span>
        <span v-else>voyelles</span>
        <p>[a], [e], [i], [o], [y], [u]</p>
      </div>
    </div>
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
.phonology-set-wrapper {
  width: 100%;
  background: radial-gradient(at top right, black, RGB(var(--c0)));
  box-sizing: border-box;
  padding-top: 48px;
  padding-bottom: 48px;
}
.phonology-set {
  display: grid;
  max-width: 600px;
  margin: 0 auto;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  width: 100%;
  span {
    color: RGB(var(--c2));
    text-align: right;
    width: 100px;
  }
  p {
    text-align: left;
    font-family: var(--mono0);
  }
}
</style>
