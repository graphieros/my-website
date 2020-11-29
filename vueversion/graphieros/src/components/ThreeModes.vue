<template>
  <!--English version-->
  <div class="three-modes-body">
    <h1 v-if="selectedLang === 'toggle-right'">
      the 3 modes of <span>graphieros</span>
    </h1>
    <h1 v-else>les 3 modes du <span>graphieros</span></h1>

    <div class="three-modes-frac">
      <Fractal svgSize="200" sequence="zw-wd-dz" colors="211,227,252" />
    </div>

    <div class="three-modes-showcase">
      <div class="showcase-linear">
        <p v-if="selectedLang === 'toggle-right'">Linear</p>
        <p v-else>Linéaire</p>
        <Linear sequence="mea-keo-grey-hea" colors="29,55,104" />
        <p v-if="selectedLang === 'toggle-right'" class="explain-mode">
          Linear mode is the most common way of writing graphieros, from top to
          bottom and left to right.
        </p>
        <p v-else class="explain-mode">
          Le mode linéaire est celui qui est habituellement utilisé pour écrire
          des textes en graphieros, de haut en bas et de gauche à droite.
        </p>
      </div>

      <div class="showcase-molecular">
        <p v-if="selectedLang === 'toggle-right'">Molecular</p>
        <p v-else>Moléculaire</p>
        <Molecule size="200" sequence="mea keo grey hea" colors="29,55,104" />
        <p v-if="selectedLang === 'toggle-right'" class="explain-mode">
          In molecular mode, a maximum of 6 glyphs are arranged around a central
          one. This mode is preferably used in poetry and chemistry.
        </p>
        <p v-else class="explain-mode">
          En mode moléculaire, un maximum de 6 glyphes sont disposés autour d'un
          glyphe central. Ce mode est utilisé dans la poésie, et la chimie.
        </p>
      </div>

      <div class="showcase-fractal">
        <p>Fractal</p>
        <Fractal
          svgSize="200"
          sequence="zx-qe-wd qw-we-xd ze-ed-dq-ex zw-wd-dz-qs-se-xs"
          colors="122,161,216"
        />
        <p v-if="selectedLang === 'toggle-right'" class="explain-mode">
          The fractal mode is written in the direction of depth. Glyphs are
          superposed, with the size of the next glyph reduced by half.
        </p>
        <p v-else class="explain-mode">
          Le mode fractal s'écrit dans le sens de la profondeur. Les glyphes
          sont superposés les uns sur les autres, leur taille diminuant à chaque
          fois de moitié.
        </p>
      </div>
    </div>

    <div class="mode-focus">
      <h1 v-if="selectedLang === 'toggle-right'">
        Le mode <span>linéaire</span>
      </h1>
      <h1 v-else>mode <span>linear</span></h1>
      <Linear colors="29,55,104" :sequence="graphierosBook[2].text" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store/index.ts";
import { graphierosDictionnary } from "@/library/graphierosDictionnary";
import Linear from "@/components/Linear.vue";
import Fractal from "@/components/Fractal.vue";
import Molecule from "@/components/Molecule.vue";
import LeLivrePages from "@/library/LeLivrePages.json";

export default defineComponent({
  name: "ThreeModes",
  components: {
    Fractal,
    Linear,
    Molecule,
  },
  computed: {
    selectedLang() {
      return store.getters.toggleClass;
    },
    graphierosBook() {
      return LeLivrePages;
    },
  },
});
</script>

<style lang="scss" scoped>
.three-modes-body {
  width: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 130px;
  font-family: var(--logo);
  transition: all 0.25s ease-in-out;
  h1 {
    color: RGB(var(--c3));
    font-size: 1.618em;
    span {
      font-size: 2em;
      color: RGB(var(--c2));
      display: block;
      margin-top: -18px;
    }
  }
}
.three-modes-frac {
  div {
    width: 200px;
    height: 200px;
    margin-left: 50%;
    transform: translateX(-50%);
    filter: drop-shadow(0 20px 2px RGBA(var(--c0), 0.5));
    animation: triangle-drop 0.618s
      cubic-bezier(1, 1.61803398875, 0.61803398875, 1);
  }
}
@keyframes triangle-drop {
  0% {
    transform: translateX(-50%) scale(0, 0) rotate(30deg);
    opacity: 0;
    filter: drop-shadow(0 2px 2px RGBA(var(--c0), 0.5));
  }
  100% {
    transform: translateX(-50%) scale(1, 1);
    opacity: 1;
    filter: drop-shadow(0 20px 2px RGBA(var(--c0), 0.5));
  }
}

.three-modes-showcase {
  margin-top: 40px;
  padding-top: 50px;
  padding-bottom: 50px;
  box-sizing: border-box;
  background: radial-gradient(at top right, black, RGB(var(--c0)));
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  align-items: center;
  justify-items: center;
  transition: all 0.25s ease-in-out;
}

.showcase-linear,
.showcase-molecular,
.showcase-fractal {
  height: 365px;
  p {
    color: RGB(var(--c3));
    width: 100%;
    font-size: 1.2em;
    color: RGB(var(--c2));
    &::first-letter {
      color: RGB(var(--c3));
    }
  }
  p.explain-mode {
    text-align: left;
    width: 200px;
    font-size: 0.9em;
  }
  div {
    height: 200px;
    width: 200px;
    background: radial-gradient(white, RGB(var(--c3)));
    border-radius: 3px;
    box-shadow: 0 10px 20px -10px black;
  }
}

.showcase-linear {
  p {
    text-align: left;
  }
}

.showcase-fractal {
  p {
    text-align: right;
  }
}

.mode-focus {
  padding: 50px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  background: radial-gradient(at top, RGB(var(--c2)), RGB(var(--crad)));
  h1 {
    color: RGB(var(--c1));
    grid-column: 1 / span 2;
    span {
      color: white !important;
    }
  }
}

@media (max-width: 700px) {
  .three-modes-showcase,
  .mode-focus {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>