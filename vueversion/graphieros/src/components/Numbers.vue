<template>
  <div class="numbers-body">
    <h1 v-if="selectedLang === 'toggle-right'">num63rs</h1>
    <h1 v-else>nom6r3s</h1>
    <div class="num-fractal-wrap">
      <Fractal svgSize="200" :sequence="currentFrac" colors="255,255,255" />
    </div>
    <span class="current-num">{{ currentNum }}</span>
    <br />
    <button v-if="selectedLang === 'toggle-right'" @click="getNumbers">
      COUNT
    </button>
    <button v-else @click="getNumbers">COMPTER</button>
    <p v-if="selectedLang === 'toggle-right'">
      Graphieros has a duodecimal numeric system.
    </p>
    <p v-else>Le système numérique du graphieros est duodécimal.</p>
    <div class="num-list-wrapper">
      <div
        class="num-list"
        v-for="(num, index) in numberBase"
        :key="`num_${index}`"
      >
        <Linear :sequence="num.name" colors="255,255,255" />
        <span> {{ num.name }}</span>
      </div>
    </div>
    <div class="number-converter">
      <label v-if="selectedLang === 'toggle-right'"
        >Convert an integer to numeral graphieros:</label
      >
      <label v-else>Convertissez un entier en graphieros numérique:</label>
      <input
        type="number"
        v-if="selectedLang === 'toggle-right'"
        v-model="userInput"
        @input="() => playWithNumbers(userInput)"
        placeholder="input a number..."
      />
      <input
        type="number"
        v-else
        v-model="userInput"
        @input="() => playWithNumbers(userInput)"
        placeholder="entrez un nombre..."
      />
      <span v-if="selectedLang === 'toggle-right'" class="converted-number"
        >in duodécimal: <span>{{ userOutput }}</span></span
      >
      <span v-else class="converted-number"
        >en duodécimal: <span>{{ userOutput }}</span></span
      >
      <div class="user-line">
        <Linear :sequence="userSequence" colors="255,255,255" />
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
      userInput: "",
      userSequence: "nmae",
      userOutput: "...",
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
          num: "A",
        },
        {
          name: "zno",
          frac: "qz-ze-ed-dx-xw-wq-ws-sz-ds-zw-zd",
          num: "B",
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
    playWithNumbers(el: string) {
      const toBase12 = parseInt(el, 10).toString(12);
      if (el === "") {
        this.userOutput = "...";
      } else {
        this.userOutput = toBase12;
      }

      const convertedCollection = toBase12.split("");
      this.userSequence = "nmae";
      convertedCollection.forEach((num) => {
        this.numberBase.forEach((entry) => {
          if (num.toUpperCase() === entry.num) {
            this.userSequence += `-${entry.name}`;
          }
        });
      });
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
    text-align: center;
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
.user-line {
  height: 300px;
  div {
    height: 100%;
  }
}

.number-converter {
  padding-top: 48px;
  padding-bottom: 48px;
  background: radial-gradient(at top right, black, RGB(var(--c0)));
  label {
    display: block;
    box-sizing: border-box;
    padding: 6px;
    color: RGB(var(--c1));
  }
  input {
    margin-top: 10px;
    font-family: var(--mono0);
    box-sizing: border-box;
    padding: 10px;
    font-size: 1.2em;
    background: radial-gradient(at top left, white, RGB(var(--c2)));
    border: none;
    border-radius: 3px;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  span {
    display: block;
    margin-top: 24px;
    color: RGB(var(--c1));
    span {
      color: RGB(var(--c2));
      font-family: var(--mono0);
      font-weight: bold;
    }
  }
}
</style>
