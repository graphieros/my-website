<template>
  <!-- english version -->
  <div v-if="selectedLang === 'toggle-right'" class="wtf-is-graphieros-body">
    <h1><span class="what-is">what is</span><span>graphieros?</span></h1>

    <div class="wtf-is-graphieros-struct">
      <div class="wtf-explain">
        Graphieros is a <span>constructed language</span>, created by
        <span>Alec Lloyd Probert</span> since 2016. This new language is based
        on a corpus of {{ glyphCount }} ideograms or glyphs, which appearance is
        determined by the geometry of the <span>hexagon</span>.
      </div>

      <div class="canvas-wrap">
        <div class="wtf-canvas" id="wtf-can0">
          <Linear :sequence="wtfLinearStart" colors="29,55,104" />
          <p>{{ messageTranslationEN }}</p>
        </div>

        <div :class="spinnerClass">
          <Fractal
            svgSize="50"
            sequence="zw-wd-dz-wq-ez-dx"
            colors="255,255,255"
          />
        </div>

        <p @click="writeGradually">
          {{ ctaClickEN }}
        </p>
      </div>
    </div>
    <div class="why-hex">
      <h1>why the <span>hexagon?</span></h1>
      <div class="why-hex-explain">
        The regular hexagon is one of the few geometric shapes with which it is
        possible to build a regular paving, like that of the external surface of
        cells built by bees.
      </div>
    </div>
  </div>

  <!-- french version -->
  <div v-else class="wtf-is-graphieros-body">
    <h1><span class="what-is">qu'est le</span><span>graphieros?</span></h1>

    <div class="wtf-is-graphieros-struct">
      <div class="wtf-explain">
        Le graphieros est une <span>idéolangue</span>, créée par
        <span>Alec Lloyd Probert</span> à partir de 2016. Cette langue est
        fondée sur un corpus de {{ glyphCount }} idéogrammes ou glyphes, dont
        l'aspect est déterminé par la géométrie de
        <span>l'hexagone régulier</span>.
      </div>

      <div class="canvas-wrap">
        <div class="wtf-canvas" id="wtf-can0">
          <Linear :sequence="wtfLinearStart" colors="29,55,104" />
          <p>{{ messageTranslationFR }}</p>
        </div>

        <div :class="spinnerClass">
          <Fractal
            svgSize="50"
            sequence="zw-wd-dz-wq-ez-dx"
            colors="255,255,255"
          />
        </div>

        <p @click="writeGradually">{{ ctaClickFR }}</p>
      </div>
    </div>
    <div class="why-hex">
      <h1>pourquoi l'<span>hexagone?</span></h1>
      <div class="why-hex-explain">
        L'hexagone régulier fait partie des quelques formes géométriques avec
        lesquelles il est possible de construire un pavage régulier, comme celui
        de la surface externe des alvéoles bâties par les abeilles.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store/index.ts";
import { graphierosDictionnary } from "@/library/graphierosDictionnary";
import Linear from "@/components/Linear.vue";
import Fractal from "@/components/Fractal.vue";

export default defineComponent({
  name: "WhatIsGraphieros",
  components: {
    Linear,
    Fractal
  },
  data() {
    return {
      glyphCount: graphierosDictionnary.length,
      wtfLinearStart: "",
      ctaClickEN: "click me",
      ctaClickFR: "cliquez-moi",
      spinnerClass: "spinner-inactive",
      messageTranslationFR: "",
      messageTranslationEN: ""
    };
  },
  computed: {
    selectedLang() {
      return store.getters.toggleClass;
    }
  },
  methods: {
    writeGradually() {
      const time = 250;
      const textAtoms: string[] = [
        "kli",
        "-",
        "keo",
        " ",
        "mea",
        "-",
        "kadwa",
        " / ",
        "kio",
        "-",
        "tew",
        "-",
        "ma",
        " !"
      ];
      this.wtfLinearStart = "";
      this.ctaClickEN = "";
      this.ctaClickFR = "";
      this.messageTranslationFR = "";
      this.messageTranslationEN = "";
      this.spinnerClass = "spinner-active";

      //add a fractal spinner while waiting (which class is only visible during paint)

      setTimeout(() => {
        if (store.getters.toggleClass === "toggle-right") {
          this.ctaClickEN = "again?";
          this.messageTranslationEN = "hello World !";
        } else {
          this.ctaClickFR = "encore?";
          this.messageTranslationFR = "bonjour Monde !";
        }
        this.spinnerClass = "spinner-inactive";
      }, time * textAtoms.length);

      const doSetTimeout = (i: number) =>
        setTimeout(() => {
          this.wtfLinearStart += textAtoms[i];
        }, i * time);

      textAtoms.forEach((atom: string, i: number) => {
        doSetTimeout(i);
      });
    }
  }
});
</script>

<style lang="scss" scoped>
.spinner-inactive {
  display: none;
}

.wtf-is-graphieros-body {
  width: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 150px;
  font-family: var(--logo);
  transition: all 0.25s ease-in-out;
  h1 {
    color: RGB(var(--c2));
    font-size: 1.618em;
    span.what-is {
      display: block;
      font-size: 1em;
      color: RGB(var(--c3));
      margin-left: 120px;
    }
    span {
      font-size: 2em;
      color: RGB(var(--c2));
      display: block;
      margin-top: -18px;
    }
  }
}
.wtf-is-graphieros-struct {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  margin-top: 100px;
}
.wtf-explain {
  text-align: right;
  max-width: 40ch;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  color: RGB(var(--c3));
  text-shadow: 1px 1px RGB(var(--c0));
  span {
    color: white;
  }
}

.canvas-wrap {
  p {
    cursor: pointer;
    background: radial-gradient(at top, RGB(var(--c3)), RGB(var(--c2)));
    box-sizing: border-box;
    padding: 12px;
    border-radius: 3px 3px 30px 30px;
    box-shadow: 0 10px 20px -10px RGB(var(--c1));
    height: 44px;
  }
}

.wtf-canvas {
  height: 200px;
  width: 200px;
  background: white;
  border-radius: 3px;
  box-shadow: 0 10px 20px -10px RGB(var(--c1));
  div {
    height: 100%;
  }
  p {
    margin-top: -35px;
    margin-left: 6px;
    color: RGB(var(--c2));
    background: none;
    border-radius: none;
    box-shadow: none;
    font-family: var(--elite);
    font-size: 0.8em;
  }
}
#wtf-can0 {
  box-sizing: border-box;
  padding-right: 10px;
}

.spinner-active {
  display: block;
  position: absolute;
  margin-top: 12px;
  transform: translateX(150%);
  div {
    height: 50px;
    width: 50px;
    animation: spinner-active 1.75s infinite linear;
    filter: drop-shadow(0 2px 2px black);
  }
}

@keyframes spinner-active {
  100% {
    transform: rotate(360deg);
  }
}

.why-hex {
  margin-top: 100px;
  left: 0;
  background: transparent;
  border-radius: 200px 0 200px 0;
  box-shadow: 10px 10px 20px -10px RGBA(var(--c0), 0.5),
    -10px -10px 20px -10px RGB(var(--c3));
  box-sizing: border-box;
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  h1 {
    color: RGB(var(--c3));
    font-size: 1.618em;
    text-align: left;
    span {
      font-size: 2em;
      color: RGB(var(--c1));
      display: block;
      margin-top: -18px;
    }
  }
}
.why-hex-explain {
  text-align: left;
  max-width: 40ch;
  color: RGB(var(--c0));
}

@media (max-width: 700px) {
  .wtf-is-graphieros-body {
    h1 {
      text-shadow: 0 1px 1px RGB(var(--c0));
    }
  }
  .wtf-is-graphieros-struct {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 64px;
  }
  .wtf-explain {
    text-align: left;
    max-width: 40ch;
  }
  .why-hex {
    display: block;
    margin-top: 50px;
    border-radius: initial;
    padding: none;
    h1 {
      text-shadow: none;
    }
  }
}
</style>