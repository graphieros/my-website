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

    <div class="mode-focus-linear">
      <h1 v-if="selectedLang === 'toggle-right'">mode <span>linear</span></h1>
      <h1 v-else>le mode<span>linéaire</span></h1>
      <div class="linear-wrap">
        <Linear colors="29,55,104" :sequence="graphierosBook[2].text" />
      </div>

      <p v-if="selectedLang === 'toggle-right'">
        In its structure, the linear mode assumes that each glyph must be part
        of a hexagonal mesh <span>without space between words.</span> Spaces
        between paragraphs are accepted.<br /><br />A
        <span>straight line</span> connects the center points of each glyphs of
        a given word, to distinguish words from one another without the use of
        blank space.
      </p>
      <p v-else>
        Dans sa structuration, le mode linéaire part du principe que chaque
        glyphe doit faire partie d'un maillage hexagonal
        <span>sans espace entre les mots.</span> Les espaces entre les
        paragraphes sont acceptés. <br /><br />Pour distinguer les mots les uns
        des autres sans utiliser d'espace, un
        <span>segment vertical</span> relie les points centraux des glyphes d'un
        même mot.
      </p>
    </div>

    <div class="mode-focus-molecular">
      <h1 v-if="selectedLang === 'toggle-right'">
        mode <span>molecular</span>
      </h1>
      <h1 v-else>mode <span>moléculaire</span></h1>
      <div class="molecular-wrap">
        <div
          v-for="(mol, index) in generateMolecules"
          :key="`mol_${index}`"
          :id="`mol_${index}`"
        >
          <Molecule :sequence="mol" size="200" colors="255,255,255" />
        </div>
      </div>

      <p v-if="selectedLang === 'toggle-right'">
        The molecular mode is perfect for aphorisms, poetry, or any type of
        <span>short expression.</span><br /><br />
        A maximum of <span>7 glyphs</span> can be used on a molecule.
        <br /><br />
        The center glyph represents the start of the word. Reading then proceeds
        from top left and <span>clockwise.</span>
      </p>
      <p v-else>
        Le mode moléculaire est parfaitement adapté pour écrire des aphorismes,
        des poèmes, ou tout type <span>d'expression condensée.</span
        ><br /><br />
        Un maximum de <span>7 glyphes</span> peuvent être utilisés sur une
        molécule. <br /><br />
        Le glyphe central représente le point de départ du mot. La lecture se
        poursuit dans le sens des aiguilles d'une montre, en partant du glyphe
        supérieur gauche.
      </p>
    </div>

    <div class="mode-focus-fractal">
      <h1 v-if="selectedLang === 'toggle-right'">mode <span>fractal</span></h1>
      <h1 v-else>Le mode <span>fractal</span></h1>
      <div class="fractal-wrap">
        <div
          v-for="(frac, index) in generateFractals"
          :key="`frac_${index}`"
          :id="`frac_${index}`"
        >
          <Fractal
            svgSize="200"
            :sequence="frac"
            colors="122,161,216"
            light="true"
            intensity="1.16"
          />
        </div>
      </div>

      <p v-if="selectedLang === 'toggle-right'">
        The fractal mode of graphieros proposes a new way to read in the
        <span>direction of depth.</span><br /><br />
        Glyphs are disposed centrally <span>on top of each other</span>, and
        their size decreases by half on each iteration.<br /><br />
        The reader should be allowed to travel through the glyphs as would a
        space traveller through unknown stellar territories.
      </p>

      <p v-else>
        Le mode fractal du graphieros propose une nouvelle façon de lire dans le
        sens <span>de la profondeur.</span><br /><br />
        Les glyphes sont disposés les uns sur les autres autour d'un point
        central, et <span>leur taille diminue de moitié</span> à chaque
        itération.<br /><br />
        Le lecteur est invité à circuler dans les glyphes comme un voyageur de
        l'espace le ferait dans des territoires stellaires inexplorés.
      </p>
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
    generateMolecules() {
      const molecules: string[] = [
        "sta di trea tpia",
        "hia sme zai pio",
        "kno haw spea hea",
      ];
      return molecules;
    },
    generateFractals() {
      const fractals: string[] = [
        "eq-xq-dq-zs-sw qz-zx-xw-we-ed-dq zx-xw-we wz-zq-qw-wx-xd-dq",
        "ws-sq-qz-ze-ed-ds-sx-xw qz-zx-xd-de-ew-wq ws-sx-xw-wq-qz-ze-ed-dx zw-wd-ew-qx",
        "sw-wq-qz-ze-ed-dw-wx ze-eq-qx-wx-xd qz-zw-se-ex wz-zd-dw-qs-se-xs",
      ];
      return fractals;
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

.mode-focus-linear,
.mode-focus-molecular,
.mode-focus-fractal {
  font-family: var(--logo);
  padding: 50px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  h1 {
    color: RGB(var(--c1));
    grid-column: 1 / span 2;
    span {
      color: white !important;
    }
  }
  p {
    text-align: left;
    color: RGB(var(--c0));
    max-width: 40ch;
    span {
      color: white;
    }
  }
}

.mode-focus-linear {
  background: radial-gradient(at top, RGB(var(--c3)), RGB(var(--crad)));
}

.mode-focus-molecular {
  background: radial-gradient(at top left, black, RGB(var(--c0)));
  p {
    color: RGB(var(--c2));
    span {
      color: RGB(var(--c3));
    }
  }
}

.molecular-wrap,
.fractal-wrap {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  max-width: 400px;
  #mol_2,
  #frac_2 {
    grid-column: 2;
    grid-row: 1 / span 2;
  }
}

.fractal-wrap {
  background: radial-gradient(RGB(var(--c0)), black);
  border-radius: 3px;
  div {
    filter: drop-shadow(0 2px 2px black);
  }
}

.mode-focus-fractal {
  background: radial-gradient(at top, RGB(var(--c2)), RGB(var(--c1)));
}

@media (max-width: 700px) {
  .three-modes-showcase {
    grid-template-columns: repeat(1, 1fr);
  }
  .mode-focus-linear,
  .mode-focus-molecular,
  .mode-focus-fractal {
    display: block;
    width: 100%;
    h1 {
      font-size: 0.9em;
      span {
        margin-top: -10px;
      }
    }
  }
  .mode-focus-linear {
    div.linear-wrap {
      display: block;
      height: 400px;
      width: 100%;
      div {
        height: 100%;
        width: 100%;
      }
    }
    p {
      margin-top: -30px;
    }
  }
  .molecular-wrap,
  .fractal-wrap {
    display: block;
  }
}
</style>