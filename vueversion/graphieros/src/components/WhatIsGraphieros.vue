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
      <div class="wtf-canvas">
        <Linear
          @click="writeGradually"
          :sequence="wtfLinearStart"
          colors="75, 106, 160"
        />
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
      <div class="wtf-canvas"></div>
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
      wtfLinearStart: ""
    };
  },
  computed: {
    selectedLang() {
      return store.getters.toggleClass;
    }
  },
  methods: {
    writeGradually() {
      const time = 1000;
      const textAtoms: string[] = [
        "kli",
        "-",
        "keo",
        " / ",
        "ka",
        "-",
        "tae / "
      ];
      if (this.wtfLinearStart === "kli-keo / ka-tae / ") {
        this.wtfLinearStart = "";
        //how the fuck do I make the text write in a loop ?
      }
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