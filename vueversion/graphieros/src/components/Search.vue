<template>
  <div>
    <div class="search-body">
      <input
        v-if="selectedLang === 'toggle-right'"
        ref="searchField"
        type="text"
        @focus="$event.target.select()"
        placeholder="...search a word. If it's a verb, use 'to...'"
        @input="inputFunc($event.target.value)"
      />
      <input
        v-else
        ref="searchField"
        type="text"
        @focus="$event.target.select()"
        placeholder="...recherchez un mot"
        @input="inputFunc($event.target.value)"
      />
      <Fractal
        className="fractal-icon"
        sequence="eq-xq-dq-zs-sw"
        svgSize="25"
        colors="122,161,216"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Fractal from "@/components/Fractal.vue";
import store from "@/store/index.ts";

export default defineComponent({
  name: "Search",
  components: {
    Fractal
  },
  props: {
    inputFunc: Function
  },
  computed: {
    selectedLang() {
      return store.getters.toggleClass;
    }
  }
});
</script>

<style lang="scss" scoped>
.search-body {
  width: 80%;
  max-width: 400px;
  margin-left: 50%;
  transform: translateX(-50%);
  input {
    width: 100%;
    height: 36px;
    border: 1px solid RGB(var(--c2));
    border-radius: 30px;
    box-sizing: border-box;
    padding-left: 36px;
    font-family: var(--logo);
    font-size: 1.1em;
    color: RGB(var(--c0));
    line-height: 1.1em;
    transition: all 0.25s ease-in-out;

    &::placeholder {
      color: transparent;
      transition: all 0.25s ease-in-out;
    }

    &:hover {
      box-shadow: 0 0 10px 2px RGBA(var(--c2), 0.5);
      &::placeholder {
        color: RGBA(var(--c2), 0.5);
      }
    }
  }
  .fractal-icon {
    position: absolute;
    top: 2.5px;
    left: 5px;
    transition: all 0.5s ease-in-out;
    height: 30px;
    width: 30px;
    display: grid;
    align-items: center;
    justify-items: center;
  }
}
input:hover + .fractal-icon {
  transform: rotate(360deg);
}

@media (max-width: 700px) {
  .search-body {
    input::placeholder {
      font-size: 0.65em;
    }
  }
}
</style>
