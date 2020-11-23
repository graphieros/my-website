<template>
  <div class="home">
    <div class="home-logo-wrapper">
      <Logo maxSize="200"/>
    </div>
    <div v-if="selectedLang === 'toggle-right'">
      <h1 class="en">Graphieros</h1>
    </div>
    <div v-else>
      <h1 class="fr">Graphieros</h1>
    </div>

    <div class="toggle-lang">
      <toggle />
    </div>

    <search :inputFunc="inputFunction" />

    <div class="searchResult-wrapper" v-show="searchResult !== ''">
      <span>{{ textResFrac }}</span>

      <Fractal :sequence="fractalRes" svgSize="100" colors="29, 55, 104" />
      <span><span>[ </span>{{ searchResult }}<span> ]</span></span>
      <div class="close-search" v-on:click="closeModal">
        <Fractal
          className="close-search-fractal"
          sequence="zx-we"
          svgSize="30"
          colors="255,255,255"
        />
      </div>
    </div>

    <div
      class="progressive-results"
      v-show="wordMatchesSize > 0"
      v-if="selectedLang === 'toggle-right'"
    >
      <span v-if="wordMatchesSize > 1">{{ wordMatchesSize }} words found</span>
      <span v-else>{{ wordMatchesSize }} word found</span>
      <ul>
        <li
          v-for="(word, index) in allMatches"
          v-bind:word="word"
          v-bind:index="index"
          v-bind:key="word.en"
          v-bind:en="word.en"
          v-on:click="showModal($event.target.innerHTML)"
        >
          {{ word.en }}
        </li>
      </ul>
    </div>
    <div
      class="progressive-results"
      v-show="wordMatchesSize > 0"
      v-if="selectedLang === 'toggle-left'"
    >
      <span v-if="wordMatchesSize > 1">{{ wordMatchesSize }} mots trouvés</span>
      <span v-else>{{ wordMatchesSize }} mot trouvé</span>
      <ul>
        <li
          v-for="(word, index) in allMatches"
          v-bind:word="word"
          v-bind:index="index"
          v-bind:key="word.fr"
          v-bind:fr="word.fr"
          v-on:click="showModal($event.target.innerHTML)"
        >
          {{ word.fr }}
        </li>
      </ul>
    </div>

    <div class="searchResult-wrapper" v-show="phonoRes !== 'ss'">
      <span>{{ textPhonoRes }}</span>
      <Fractal :sequence="phonoRes" svgSize="100" colors="29, 55, 104" />
      <span><span>[ </span>{{ phono }}<span> ]</span></span>
      <div class="close-search" v-on:click="closeModal">
        <Fractal
          className="close-search-fractal"
          sequence="zx-we"
          svgSize="30"
          colors="255,255,255"
        />
      </div>
    </div>

    <div class="lineRes-wrapper" v-show="lineRes !== ''">
      <div class="lineRes-svg-wrapper">
        <p>{{ textResLine }}</p>
        <Linear :sequence="lineRes" size="10" colors="29,55,104" />
      </div>
      <span>[ {{ lineRes }} ]</span>
      <div class="close-search" v-on:click="closeModal">
        <Fractal
          className="close-search-fractal"
          sequence="zx-we"
          svgSize="30"
          colors="255,255,255"
        />
      </div>
    </div>

    <div class="lineRes-wrapper" v-show="phonoWordRes !== ''">
      <div class="lineRes-svg-wrapper">
        <p>{{ textPhonoWordRes }}</p>
        <Linear :sequence="phonoWordRes" size="10" colors="29,55,104" />
      </div>
      <span>[ {{ phonoWordRes }} ]</span>
      <div class="close-search" v-on:click="closeModal">
        <Fractal
          className="close-search-fractal"
          sequence="zx-we"
          svgSize="30"
          colors="255,255,255"
        />
      </div>
    </div>

    <div class="fractal-watermark0">
      <fractal
        sequence="zw-wd-dz-qs-se-xs"
        colors="255,255,255"
        svgSize="100%"
      />
    </div>

    <div class="counters">
      <p v-if="selectedLang === 'toggle-right'">
        glyphs: <span>{{ glyphCount }}</span>
      </p>
      <p v-else>
        glyphes: <span>{{ glyphCount }}</span>
      </p>
      <p v-if="selectedLang === 'toggle-right'">
        words: <span>{{ wordCount }}</span>
      </p>
      <p v-else>
        mots: <span>{{ wordCount }}</span>
      </p>
    </div>

    <div class="menu-wrapper">
      <Menu />
    </div>

    <div class="credit">
      <p v-if="selectedLang === 'toggle-right'">
        designed by <span>Alec Lloyd Probert</span> 2020
      </p>
      <p v-else>créé par <span>Alec Lloyd Probert</span> 2020</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Logo from "@/components/Logo.vue";
import Linear from "@/components/Linear.vue";
import Fractal from "@/components/Fractal.vue";
import Search from "@/components/Search.vue";
import Toggle from "@/components/Toggle.vue";
import Menu from "@/components/Menu.vue";
import { graphierosDictionnary } from "@/library/graphierosDictionnary";
import graphierosTranslation from "@/library/graphierosTranslation.json";
import store from "@/store/index.ts";

export default defineComponent({
  name: "Home",
  components: {
    Fractal,
    Linear,
    Search,
    Toggle,
    Logo,
    Menu
  },
  data() {
    return {
      wordCount: graphierosTranslation.length,
      glyphCount: graphierosDictionnary.length,
      searchResult: "",
      fractalRes: "ss",
      textResFrac: "",
      textPhonoRes: "",
      textPhonoWordRes: "",
      textResLine: "",
      phonoRes: "ss",
      phonoWordRes: "",
      lineRes: "",
      phono: "",
      allMatches: {},
      wordMatchesSize: 0,
      time: 0
    };
  },
  computed: {
    selectedLang() {
      return store.getters.toggleClass;
    }
  },
  methods: {
    inputFunction(input: string) {
      const language = store.getters.toggleClass;
      clearTimeout(this.time);

      if (language === "toggle-right") {
        this.time = setTimeout(() => {
          graphierosDictionnary.forEach(
            (entry: { name: string; fractal: string; en: string }) => {
              if (entry.en === input) {
                this.searchResult = entry.name.replace("_", "");
                this.fractalRes = entry.fractal;
                this.textResFrac = entry.en;
              }
              if (entry.name.replace("_", "") === input) {
                this.phonoRes = entry.fractal;
                this.textPhonoRes = entry.en;
                this.phono = entry.name.replace("_", "");
              }
            }
          );

          //return progressive matches during user input
          const findMatches = (source: Record<string, any>) => {
            return source.filter((entry: any) => {
              const regex = new RegExp(`^${input}`, "gi");
              return entry.en.match(regex);
            });
          };

          const findMatchesInWords = findMatches(graphierosTranslation);
          const findMatchesInGlyphs = findMatches(graphierosDictionnary);

          this.allMatches = { ...findMatchesInWords, ...findMatchesInGlyphs };
          this.wordMatchesSize = Object.keys(this.allMatches).length;

          if (input === "") {
            this.searchResult = "";
            this.lineRes = "";
            this.phonoRes = "ss";
            this.phonoWordRes = "";
            this.allMatches = {};
            this.wordMatchesSize = 0;
          }
          graphierosTranslation.forEach(
            (entry: { en: string; line: string }) => {
              if (entry.en === input) {
                this.lineRes = entry.line;
                this.textResLine = entry.en;
              }
              if (entry.line === input) {
                this.phonoWordRes = entry.line;
                this.textPhonoWordRes = entry.en;
              }
            }
          );
        }, 255);
      } else if (language === "toggle-left") {
        this.time = setTimeout(() => {
          graphierosDictionnary.forEach(
            (entry: { name: string; fractal: string; fr: string }) => {
              if (entry.fr === input) {
                this.searchResult = entry.name.replace("_", "");
                this.fractalRes = entry.fractal;
                this.textResFrac = entry.fr;
              }
              if (entry.name.replace("_", "") === input) {
                this.phonoRes = entry.fractal;
                this.textPhonoRes = entry.fr;
                this.phono = entry.name.replace("_", "");
              }
            }
          );

          //return progressive matches during user input
          const findMatches = (source: Record<string, any>) => {
            return source.filter((entry: any) => {
              const regex = new RegExp(`^${input}`, "gi");
              return entry.fr.match(regex);
            });
          };

          const findMatchesInWords = findMatches(graphierosTranslation);
          const findMatchesInGlyphs = findMatches(graphierosDictionnary);

          this.allMatches = { ...findMatchesInWords, ...findMatchesInGlyphs };
          this.wordMatchesSize = Object.keys(this.allMatches).length;

          if (input === "") {
            this.searchResult = "";
            this.lineRes = "";
            this.phonoRes = "ss";
            this.phonoWordRes = "";
            this.allMatches = {};
            this.wordMatchesSize = 0;
          }
          graphierosTranslation.forEach(
            (entry: { fr: string; line: string }) => {
              if (entry.fr === input) {
                this.lineRes = entry.line;
                this.textResLine = entry.fr;
              }
              if (entry.line === input) {
                this.phonoWordRes = entry.line;
                this.textPhonoWordRes = entry.fr;
              }
            }
          );
        }, 255);
      }
    },
    closeModal() {
      this.searchResult = "";
      this.phonoRes = "ss";
      this.phonoWordRes = "";
      this.lineRes = "";
    },
    showModal(el: any) {
      if (store.getters.toggleClass === "toggle-right") {
        graphierosTranslation.forEach((entry) => {
          if (entry.en === el) {
            this.lineRes = entry.line;
            this.textResLine = entry.en;
          }
        });
        graphierosDictionnary.forEach((entry) => {
          if (entry.en === el) {
            this.searchResult = entry.name.replace("_", "");
            this.fractalRes = entry.fractal;
            this.textResFrac = entry.en;
          }
        });
      } else {
        graphierosTranslation.forEach((entry) => {
          if (entry.fr === el) {
            this.lineRes = entry.line;
            this.textResLine = entry.fr;
          }
        });
        graphierosDictionnary.forEach((entry) => {
          if (entry.fr === el) {
            this.searchResult = entry.name.replace("_", "");
            this.fractalRes = entry.fractal;
            this.textResFrac = entry.fr;
          }
        });
      }
    }
  }
});
</script>
<style lang="scss" scoped>
.home-logo-wrapper {
  transition: all 0.25s ease-in-out;
  margin-top: 280px;
}
h1.en,
h1.fr {
  margin-top: 250px;
  font-family: var(--logo);
  color: RGB(var(--c3));
}
h1.en::after,
h1.fr::after {
  display: block;
  margin-top: -8px;
  font-size: 0.33em;
  color: RGB(var(--c2));
}
h1.en::after {
  content: "hexagonal language";
  margin-left: 63px;
}
h1.fr::after {
  content: "langue hexagonale";
  margin-left: 71px;
}
.first-line {
  height: 300px;
}
.searchResult-wrapper {
  position: fixed;
  background: white;
  border: 1px solid RGB(var(--c2));
  border-radius: 30px 0 30px 30px;
  width: 170px;
  height: 195px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 20px;
  margin-top: 24px;
  z-index: 1;
  box-shadow: 0px 10px 20px -10px RGBA(var(--c1), 0.5),
    -10px -10px 20px -10px white, -10px -10px 20px -10px white inset;
  span {
    font-family: var(--logo);
    color: RGB(var(--c2));
    span {
      color: RGB(var(--c1));
    }
  }
  animation: srw 0.1s ease-in-out;
}

.close-search {
  height: 30px;
  width: 30px;
  border-radius: 100%;
  background: RGB(var(--c2));
  position: absolute;
  top: -15px;
  right: -15px;
  box-shadow: 0 5px 10px -5px RGB(var(--c1));
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.25s ease-in-out;
  &:hover {
    opacity: 1;
  }
  .close-search-fractal {
    filter: drop-shadow(0 2px 1px RGB(var(--c0)));
  }
}

.lineRes-wrapper {
  top: 50%;
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 170px;
  background: white;
  border: 1px solid RGB(var(--c2));
  border-radius: 30px 0 30px 30px;
  box-sizing: border-box;
  padding-bottom: 15px;
  box-shadow: 0px 10px 20px -10px RGBA(var(--c1), 0.5),
    -10px -10px 20px -10px white, -10px -10px 20px -10px white inset;
  p {
    display: inline-block;
    position: absolute;
    font-family: var(--logo);
    color: RGB(var(--c2));
    margin-top: 12px;
    width: 100%;
    transform: translateX(-50%);
    margin-bottom: 30px;
  }
  span {
    display: block;
    margin-top: -100px;
    width: 90%;
    margin-left: 50%;
    transform: translateX(-50%);
    font-family: var(--logo);
    color: RGB(var(--c2));
  }
  animation: srw 0.1s ease-in-out;
}

.lineRes-svg-wrapper {
  height: 100%;
  box-sizing: border-box;
  padding: 60px;
  padding-top: 0px;
  margin-top: 0px;
}

.fractal-watermark0 {
  position: fixed;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  opacity: 0.1;
  animation: fwm 96s infinite linear;
}

.progressive-results {
  width: 80%;
  max-width: 370px;
  margin-left: 50%;
  transform: translateX(-50%);
  max-height: 150px;
  overflow: scroll;
  border-radius: 0 0 30px 30px;
  background: white;
  box-shadow: 0px 10px 20px -10px RGBA(var(--c1), 0.5);
  span {
    display: block;
    position: sticky;
    top: 0;
    max-width: 370px;
    text-align: center;
    background: white;
    font-family: var(--logo);
    color: RGB(var(--c2));
    z-index: 1;
  }
  ul {
    display: block;
    position: relative;
    margin-left: calc(50% - 20px);
    transform: translateX(-50%);
    width: 100%;
  }
  ul,
  li {
    box-sizing: border-box;
    list-style-type: none;
    text-align: left;
    font-family: var(--logo);
    color: RGB(var(--c1));
  }
  li {
    cursor: pointer;
    border-radius: 2px 0 0 2px;
    padding-left: 3px;
    &:hover {
      background: linear-gradient(to right, RGB(var(--c2)), white);
      color: RGB(var(--c0));
    }
  }
}
.progressive-results::-webkit-scrollbar {
  width: 0px;
}

.counters {
  font-family: var(--logo);
  color: RGB(var(--c3));
  font-size: 0.8em;
  line-height: 0.5em;
  width: 80%;
  max-width: 370px;
  margin-left: 50%;
  transform: translateX(-50%);
  p {
    text-align: right;
    span {
      color: RGB(var(--c0));
      font-size: 1.3em;
    }
  }
}

.credit {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: linear-gradient(
    to right,
    transparent,
    transparent,
    white,
    transparent,
    transparent
  );
  border-radius: 30px;
  margin-left: 50%;
  transform: translateX(-50%);
  font-family: var(--logo);
  font-size: 0.618em;
  color: RGB(var(--c1));
  z-index: -1;
  p {
    text-align: center;
    span {
      color: RGB(var(--c0));
    }
  }
}

.toggle-lang {
  position: relative;
  width: 60px;
  left: 50%;
  transform: translateX(-50%);
  height: 25px;
  margin-bottom: 12px;
}

.menu-wrapper {
  z-index: -1;
  width: 80%;
  max-width: 229px;
  margin-left: 50%;
  transform: translateX(-50%);
  position: fixed;
  bottom: 45px;
}

@keyframes fwm {
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes srw {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0, 0);
    margin-top: -100px;
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1, 1);
  }
}

@media (max-width: 500px) {
  .home-logo-wrapper {
    margin-top: 250px;
  }
}
</style>
