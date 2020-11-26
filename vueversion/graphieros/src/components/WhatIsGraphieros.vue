<template>
  <!-- english version -->
  <div v-if="selectedLang === 'toggle-right'" class="wtf-is-graphieros-body">
    <h1>what is <br /><span>graphieros ?</span></h1>
    <div class="wtf-is-graphieros-struct">
      <div class="wtf-explain">
        Graphieros is a <span>constructed language</span>, created by Alec Lloyd
        Probert since 2016. This new language is based on a corpus of
        {{ glyphCount }} ideograms or glyphs, which appearance is determined by
        the geometry of the <span>hexagon</span>, of the seven points which
        constitute its vertices and its center.
      </div>
      <div class="canvas-wrap">
        <div class="wtf-canvas" id="wtf-can0">
          <Linear :sequence="wtfLinearStart" colors="75, 106, 160" />
        </div>
        <p @click="writeGradually">{{ ctaClickEN }}</p>
      </div>
    </div>
  </div>

  <!-- french version -->
  <div v-else class="wtf-is-graphieros-body">
    <h1>qu'est-ce que le <br /><span>graphieros ?</span></h1>
    <div class="wtf-is-graphieros-struct">
      <div class="wtf-explain">
        Le graphieros est une <span>idéolangue</span>, créée par
        <span>Alec Lloyd Probert</span> à partir de 2016. Cette langue est
        fondée sur un corpus de {{ glyphCount }} idéogrammes ou glyphes, dont
        l'aspect est déterminé par la géométrie de
        <span>l'hexagone régulier</span>, des sept points qui constituent ses
        sommets et son centre.
      </div>
      <div class="canvas-wrap">
        <div class="wtf-canvas" id="wtf-can0">
          <Linear :sequence="wtfLinearStart" colors="75, 106, 160" />
        </div>
        <p @click="writeGradually">{{ ctaClickFR }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store/index.ts";
import { graphierosDictionnary } from "@/library/graphierosDictionnary";
import Linear from "@/components/Linear.vue";

export default defineComponent({
  name: "WhatIsGraphieros",
  components: {
    Linear
  },
  data() {
    return {
      glyphCount: graphierosDictionnary.length,
      wtfLinearStart: "",
      ctaClickEN: "click me",
      ctaClickFR: "cliquez-moi"
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
      this.ctaClickEN = "...";
      this.ctaClickFR = "...";

      //add a fractal spinner while waiting (which class is only visible during paint)

      setTimeout(() => {
        if (store.getters.toggleClass === "toggle-right") {
          this.ctaClickEN = "again?";
        } else {
          this.ctaClickFR = "encore?";
        }
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
.wtf-is-graphieros-body {
  width: 90vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 150px;
  font-family: var(--logo);
  transition: all 0.25s ease-in-out;
  h1 {
    color: RGB(var(--c2));
    span {
      color: RGB(var(--c3));
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
  max-width: 50ch;
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
}
#wtf-can0 {
  box-sizing: border-box;
  padding-right: 10px;
}
@media (max-width: 700px) {
  .wtf-is-graphieros-struct {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 64px;
  }
  .wtf-explain {
    text-align: left;
    max-width: 40ch;
  }
}
</style>