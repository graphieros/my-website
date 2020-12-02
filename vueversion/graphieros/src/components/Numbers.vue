<template>
  <div class="numbers-body">
    <h1 v-if="selectedLang === 'toggle-right'">num63rs</h1>
    <h1 v-else>nom6r3s</h1>
    <div class="num-fractal-wrap">
      <Fractal svgSize="200" :sequence="currentFrac" colors="255,255,255" />
    </div>
    <span class="current-num">{{ currentNum }}</span>
    <br />
    <button v-if="selectedLang === 'toggle-right'" @click="getNumbers">COUNT</button>
    <button v-else @click="getNumbers">COMPTER</button>
    <div class="num-list-wrapper">
      <div class="num-list" v-for="(num, index) in numberBase" :key="`num_${index}`">
        <Linear :sequence="num.name" colors="255,255,255" />
        <span> {{ num.name }}</span>
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
  name: "Numbers",
  components: {
    Fractal,
    Linear,
  },
  data() {
    return {
      currentFrac: "ss",
      currentNum: "",
      count: 0,
      classSelect: "inactive",
    };
  },
  computed: {
    selectedLang() {
      return store.getters.toggleClass;
    },
    numberBase() {
      const numbers: {
        name: string;
        frac: string;
        num: string;
      }[] = [
        {
          name: "sro",
          frac: "zx-we-qd",
          num: "0",
        },
        {
          name: "kfa",
          frac: "zw",
          num: "1",
        },
        {
          name: "du",
          frac: "wz-zd",
          num: "2",
        },
        {
          name: "srei",
          frac: "wz-zd-dw",
          num: "3",
        },
        {
          name: "ktu",
          frac: "zw-wx-xe-ez",
          num: "4",
        },
        {
          name: "foi",
          frac: "zw-wx-xe-ez-qd",
          num: "5",
        },
        {
          name: "ksi",
          frac: "qz-ze-ed-dx-xw-wq",
          num: "6",
        },
        {
          name: "stei",
          frac: "qz-ze-ed-dx-xw-wq-qd",
          num: "7",
        },
        {
          name: "tsio",
          frac: "qz-zx-xd-de-ew-wq",
          num: "8",
        },
        {
          name: "nwa",
          frac: "qz-ze-ed-dx-xw-wq-ws-sz-ds",
          num: "9",
        },
        {
          name: "dza",
          frac: "qz-ze-ed-dx-xw-wq-ws-sz-ds-zw",
          num: "10",
        },
        {
          name: "zno",
          frac: "qz-ze-ed-dx-xw-wq-ws-sz-ds-zw-zd",
          num: "11",
        },
      ];
      return numbers;
    },
  },
  methods: {
    getNumbers() {
      if (this.count === this.numberBase.length) {
        this.count = 0;
      }
      this.currentFrac = this.numberBase[this.count].frac;
      this.currentNum = this.numberBase[this.count].num;
      this.count += 1;
    },
  },
});
</script>

<style lang="scss" scoped>
.numbers-body {
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
      transform: rotate(9deg);
    }
  }
  p {
    text-align: left;
    max-width: 60ch;
    margin-left: 50%;
    transform: translateX(-50%);
    color: RGB(var(--c3));
  }
  .num-fractal-wrap {
    filter: drop-shadow(0px 3px 6px RGB(var(--c0)));
  }
  span.current-num {
    font-size: 1.3em;
    color: RGB(var(--c3));
  }
  button {
    margin-top: 24px;
    height: 50px;
    padding-left: 20px;
    padding-right: 20px;
    font-family: var(--logo);
    color: RGB(var(--c3));
    border: none;
    border-radius: 15px;
    cursor: pointer;
    background: radial-gradient(at top, RGB(var(--c0)), black);
  }
  .num-list-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    width: 300px;
    margin: 0 auto;
    margin-top: 48px;
    margin-bottom: 48px;
    border: 1px solid RGB(var(--c2));
    border-radius: 15px;
  }
  .num-list {
    height: 100px;
    div {
      height: 100%;
    }
    span {
      display: block;
      margin-top: -30px;
    }
  }
}
</style>
