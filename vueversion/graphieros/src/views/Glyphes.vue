<template>
  <div class="glyphes">
    <div class="logo-position">
      <MiniLogo
        glyphSize="50"
        height="60"
        fontSize="25"
        textColor="75,106,160"
        glyphColor="255,255,255"
      />
    </div>

    <h1 v-if="selectedLang === 'toggle-right'">
      graphieros <span>glyphs</span>
    </h1>
    <h1 v-else>Les <span>glyphes</span> du graphieros</h1>

    <p v-if="selectedLang === 'toggle-right'" class="glyph-presentation">
      The graphieros consists of <span>{{ glyphCount }}</span> glyphs, among
      which <span>{{ getGlyphType.ideograms }}</span> ideograms, and
      <span>{{ getGlyphType.pictograms }}</span> pictograms.<br /><br />
      These glyphs represent the material from which all words can be composed,
      by accumulation, to represent more complex objects or concepts.
    </p>

    <p v-else class="glyph-presentation">
      Le graphieros est constitué de <span>{{ glyphCount }}</span> glyphes,
      parmi lesquels <span>{{ getGlyphType.ideograms }}</span> idéogrammes, et
      <span>{{ getGlyphType.pictograms }}</span> pictogrammes.<br /><br />Ces
      glyphes représentent la matière à partir de laquelle tous les mots peuvent
      être composés, par accumulation, pour représenter des objets ou des
      concepts plus complexes.
    </p>

    <div v-if="selectedLang === 'toggle-right'" className="glyph-list">
      <div
        className="glyph"
        v-for="(item, index) in getDictionary"
        v-bind:item="item"
        v-bind:index="index"
        v-bind:key="item.name"
        v-bind:en="item.en"
      >
        <Fractal
          className="glyph-fractal"
          v-bind:sequence="item.fractal"
          colors="255,255,255"
          svgSize="50"
          size="30"
        />
        <span className="span-fr">{{ item.en }}</span>
        <span className="span-name">[ {{ item.name.replace("_", "") }} ]</span>
      </div>
    </div>

    <div v-else className="glyph-list">
      <div
        className="glyph"
        v-for="(item, index) in getDictionary"
        v-bind:item="item"
        v-bind:index="index"
        v-bind:key="item.name"
        v-bind:fr="item.fr"
      >
        <Fractal
          className="glyph-fractal"
          v-bind:sequence="item.fractal"
          colors="255,255,255"
          svgSize="50"
          size="30"
        />
        <span className="span-fr">{{ item.fr }}</span>
        <span className="span-name">[ {{ item.name.replace("_", "") }} ]</span>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from "vue";
import { graphierosDictionnary } from "@/library/graphierosDictionnary.js";
import Fractal from "@/components/Fractal.vue";
import MiniLogo from "@/components/MiniLogo.vue";
import store from "@/store/index.ts";
export default defineComponent({
  name: "Home",
  components: {
    Fractal,
    MiniLogo,
  },
  computed: {
    getDictionary(){
      //homemade lazyload based on client height and on scroll down=> slice dic
      return graphierosDictionnary || [];
    },
     glyphCount(){
      return this.getDictionary.length;
    },
    selectedLang() {
      return store.getters.toggleClass;
    },
    getGlyphType(){
      let ideograms = 0;
      let pictograms = 0;
      graphierosDictionnary.forEach(entry => {
        if(entry.type === "ideo"){
          ideograms += 1;
        }else{
          pictograms += 1;
        }
      });
      return {ideograms,pictograms};
    }
  }
});
</script>

<style scoped lang="scss">
.logo-position {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  background: linear-gradient(to right, white, transparent, transparent);
}
h1 {
  font-family: var(--logo);
  color: RGB(var(--c2));
  span {
    color: RGB(var(--c3));
  }
}
.glyphes {
  position: absolute;
  padding-top: 64px;
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  top: 0;
  left: 0;
}
.glyph {
  width: 100px;
  height: 100px;
  background: radial-gradient(RGB(var(--c2)), RGB(var(--c1)));
  border-radius: 3px;
  box-shadow: 5px 5px 10px -5px grey, -5px -5px 10px -5px white,
    -5px -5px 10px -5px white inset, 5px 5px 10px -5px grey inset;
  transition: all 0.25s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.05, 1.05);
  }
}
.glyph-fractal {
  height: 100px;
  width: 100px;
  position: relative;
  top: 25px;
}
.glyph-list {
  display: grid;
  grid-template-columns: repeat(6, 100px);
  grid-template-rows: repeat(auto, 100px);
  align-items: center;
  justify-items: center;
  grid-gap: 12px;
  transition: all 0.25s ease-in-out;
  div {
    div {
      filter: drop-shadow(0 2px 2px black);
    }
  }
}
.glyph-wrap {
  height: 100px;
  width: 100px;
  background: lightgray;
}
span.span-fr {
  display: block;
  position: relative;
  font-family: var(--logo);
  font-size: 0.8em;
  top: -95px;
  color: RGB(var(--c0));
}
span.span-name {
  display: block;
  position: relative;
  top: -40px;
  font-family: var(--logo);
  font-size: 0.8em;
  color: RGB(var(--c3));
}

p.glyph-presentation {
  width: 50ch;
  max-width: 400px;
  text-align: left;
  box-sizing: border-box;
  padding-top: 24px;
  padding-bottom: 64px;
  font-family: var(--logo);
  color: RGB(var(--c3));
  span {
    color: RGB(var(--c2));
  }
}

@media (max-width: 700px) {
  .glyph-list {
    grid-template-columns: repeat(5, 100px);
  }
}
@media (max-width: 600px) {
  .glyph-list {
    grid-template-columns: repeat(4, 100px);
  }
}
@media (max-width: 500px) {
  .glyph-list {
    grid-template-columns: repeat(4, 100px);
  }
}
@media (max-width: 400px) {
  .glyph-list {
    grid-template-columns: repeat(3, 100px);
  }
}
@media (max-width: 350px) {
  .glyph-list {
    grid-template-columns: repeat(2, 100px);
  }
}
</style>
