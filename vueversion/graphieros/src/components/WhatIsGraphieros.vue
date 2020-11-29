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

      <span />

      <div class="canvas-wrap">
        <div class="wtf-canvas" id="wtf-can1">
          <Linear :sequence="wtfJustHex" colors="255,255,255" />
          <div class="wtf-ka">
            <Fractal
              svgSize="150"
              :sequence="kaSequence"
              colors="255,255,255"
            />
          </div>
        </div>
        <p class="wtf-hex-translation">{{ kaNameEN }}</p>
      </div>

      <div class="why-hex-explain">
        The <span>regular hexagon</span> is one of the few geometric shapes with
        which it is possible to build a regular paving, like that of the
        external surface of cells built by bees.
        <p @click="showGlyph">click me</p>
      </div>

      <span />

      <div class="why-hex-explain-wide">
        All {{ glyphCount }} glyphs are structured using only
        <span>straight lines</span> connecting two or more vertices of the
        regular hexagon.
      </div>
    </div>

    <div class="wtf-how-graphieros">
      <h1>
        <span class="wtf-how-left">how does</span> <span>graphieros</span
        ><span class="wtf-how-right">work?</span>
      </h1>

      <div class="wtf-how-explain">
        <span />
        <div class="how-explain-left">
          The {{ glyphCount }} graphieros glyphs obviously cannot on their own
          be used as such to express our thoughts and designate objects.
          <span>Glyph cumulation </span>comes in handy to represent everything
          you can see or imagine.
        </div>
        <div class="how-explain-right">
          Used on their own, the great majority of glyphs are infinitive verbs.
          A set of <span>prefixes</span> turn them into adjectives or adverbs.
          The combination of different verbs together can generate
          <span>new words</span>, and populate the dictionary.
        </div>

        <span />
        <span />

        <div class="how-explain-left">
          In it's common linear mode, graphieros is written
          <span>from top to bottom and left to right.</span> There is no extra
          space added between the glyphs. Words built from the accumulation of
          different glyphs are distinguished by a
          <span>vertical lign</span> joining the center of all its components.
        </div>

        <div class="canvas-how">
          <Linear :sequence="canvasHow" colors="255,255,255" />
        </div>
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

      <span />

      <div class="canvas-wrap">
        <div class="wtf-canvas" id="wtf-can1">
          <Linear :sequence="wtfJustHex" colors="255,255,255" />
          <div class="wtf-ka">
            <Fractal
              svgSize="150"
              :sequence="kaSequence"
              colors="255,255,255"
            />
          </div>
        </div>
        <p class="wtf-hex-translation">{{ kaNameFR }}</p>
      </div>

      <div class="why-hex-explain">
        <span>L'hexagone régulier</span> fait partie des quelques formes
        géométriques avec lesquelles il est possible de construire un pavage
        régulier, comme celui de la surface externe des alvéoles bâties par les
        abeilles.
        <p @click="showGlyph">cliquez ici</p>
      </div>

      <span />

      <div class="why-hex-explain-wide">
        Les {{ glyphCount }} glyphes sont composés par des
        <span> segments </span>qui connectent deux ou plusieurs des sommets de
        l'hexagone régulier.
      </div>
    </div>

    <div class="wtf-how-graphieros">
      <h1>
        <span class="wtf-how-left">comment le</span> <span>graphieros</span
        ><span class="wtf-how-right">fonctionne?</span>
      </h1>

      <div class="wtf-how-explain">
        <span />
        <div class="how-explain-left">
          Les {{ glyphCount }} glyphes du graphieros ne peuvent évidemment pas à
          eux seuls suffire pour exprimer nos pensées et désigner des objets.
          <span>L'accumulation </span> de glyphes permet de représenter tout ce
          que l'on peut connaître ou imaginer.
        </div>
        <div class="how-explain-right">
          Utilisés seuls, la plupart des glyphes sont des verbes à l'infinitif.
          Une collection de <span>préfixes</span> sont ajoutés pour les
          substantiver. L'accumulation de différents glyphes peut générer de
          <span>nouveaux mots</span>, et venir peupler le dictionnaire.
        </div>

        <span />
        <span />

        <div class="how-explain-left">
          Dans son mode d'écriture le plus commun, le mode linéaire, le
          graphieros s'écrit
          <span>de haut en bas et de gauche à droite.</span> Ce n'est pas
          l'espace entre les mots qui les distinguent, mais une
          <span>barre verticale </span> qui connecte tous les glyphes d'un même
          mot.
        </div>

        <div class="canvas-how">
          <Linear :sequence="canvasHow" colors="255,255,255" />
        </div>
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

interface BigDic {
  name: string;
  fr: string;
  en: string;
  path: number[][];
  fractal: string;
  shapes: string[];
  type: string;
  description: string;
}

export default defineComponent({
  name: "WhatIsGraphieros",
  components: {
    Linear,
    Fractal
  },
  data() {
    return {
      wtfLinearStart: "",
      ctaClickEN: "click me",
      ctaClickFR: "cliquez-moi",
      spinnerClass: "spinner-inactive",
      messageTranslationFR: "",
      messageTranslationEN: "",
      wtfJustHex:
        " ksi ksi ksi / ksi ksi ksi ksi / ksi ksi ksi ksi ksi / ksi ksi ksi ksi /  ksi ksi ksi",
      kaSequence: "zx-we-qd",
      kaNameEN: "to center",
      kaNameFR: "center",
      canvasHow:
        "ka-fy-go sta de mea-skai / te hia boi mna-fya-fy / mea-hea ma kli-keo-grey-hea / tpe ptae-vzi-sota , fkwe / ka-fy-go sta ka-fya-fy"
    };
  },
  computed: {
    selectedLang() {
      return store.getters.toggleClass;
    },
    getDictionary(): BigDic[] {
      //homemade lazyload based on client height and on scroll down=> slice dic
      return graphierosDictionnary || [];
    },
    glyphCount() {
      //breaks with this.getDictionary.length
      return graphierosDictionnary.length;
    }
  },
  methods: {
    showGlyph() {
      let random = 0;
      random = Math.floor(Math.random() * this.glyphCount);
      this.kaSequence = this.getDictionary[random].fractal;
      this.kaNameEN = this.getDictionary[random].en;
      this.kaNameFR = this.getDictionary[random].fr;
    },
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
      margin-left: -195px;
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
  padding-left: 50px;
  padding-right: 50px;
  align-items: center;
  justify-items: center;
  margin-top: 100px;
}
.wtf-explain {
  text-align: right;
  max-width: 40ch;
  box-sizing: border-box;
  color: RGB(var(--c3));
  text-shadow: 1px 1px RGB(var(--c0));
  span {
    color: white;
  }
}

.canvas-wrap {
  position: relative;
  p {
    cursor: pointer;
    background: radial-gradient(at top, RGB(var(--c3)), RGB(var(--c2)));
    box-sizing: border-box;
    padding: 12px;
    border-radius: 3px 3px 30px 30px;
    box-shadow: 0 10px 20px -10px RGB(var(--c1));
    height: 44px;
    border: 1px solid transparent;
    transition: all 0.25s ease-in-out;
    &:hover {
      border: 1px solid white;
    }
  }
  p.wtf-hex-translation {
    background: none !important;
    box-shadow: none !important;
    position: absolute !important;
    left: 95px;
    bottom: -7px;
    transform: rotate(-60deg);
    width: 200px;
    color: RGB(var(--c3));
    text-align: left;
    border: none;
    cursor: default;
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
    border: none !important;
    cursor: default !important;
  }
}
#wtf-can0 {
  box-sizing: border-box;
  padding-right: 10px;
}
#wtf-can1 {
  padding-top: 10px;
  background: radial-gradient(RGB(var(--c2)), RGB(var(--c1)));
  transform: rotate(30deg);
  filter: drop-shadow(0 2px 2px black);
  div {
    filter: drop-shadow(0 2px 2px RGB(var(--c0)));
  }
}

.wtf-ka {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-39%, -38%) rotate(-30deg);
  div {
    animation: ka-size 3s infinite linear alternate;
  }
}

@keyframes ka-size {
  100% {
    transform: translate(-0.5%, -7%) scale(0.5, 0.5);
  }
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
  background: radial-gradient(at top, RGB(var(--c2)), RGB(var(--crad)));
  border-radius: 200px 0 200px 0;
  box-shadow: 10px 10px 20px -10px RGBA(var(--c0), 0.5),
    -10px -10px 20px -10px RGB(var(--c3));
  box-sizing: border-box;
  padding: 50px;
  display: grid;
  row-gap: 48px;
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
  .why-hex-explain-wide {
    grid-column: 1 / span 2;
    max-width: 40ch;
    text-align: left;
    color: RGB(var(--c0));
    span {
      color: RGB(var(--c3));
    }
  }
}

.why-hex-explain {
  user-select: none;
  position: relative;
  text-align: left;
  max-width: 40ch;
  color: RGB(var(--c0));
  span {
    color: RGB(var(--c3));
  }
  p {
    height: 60px;
    width: 120px;
    display: flex;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) rotate(-15deg);
    align-items: center;
    justify-content: center;
    background: radial-gradient(RGB(var(--c3)), RGB(var(--c2)));
    cursor: pointer;
    border-radius: 3px;
    box-shadow: 0 10px 20px -10px RGB(var(--c1));
    border: 1px solid transparent;
    transition: all 0.25s ease-in-out;
    &:hover {
      border: 1px solid white;
      box-shadow: 0 30px 40px -20px RGB(var(--c1));
    }
  }
}

.wtf-how-graphieros {
  margin-top: -200px;
  box-sizing: border-box;
  padding-top: 250px;
  padding-bottom: 64px;
  background: radial-gradient(at top right, black, RGB(var(--c0)));
  position: relative;
  z-index: -1;
  span.wtf-how-left,
  span.wtf-how-right {
    font-size: 1em;
    color: RGB(var(--c3));
    display: block;
  }
  span.wtf-how-left {
    margin-left: -145px;
  }
  span.wtf-how-right {
    margin-top: -12px;
    margin-left: 185px;
  }
}

.wtf-how-explain {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  padding: 50px;
  div {
    color: RGB(var(--c2));
    span {
      color: RGB(var(--c3));
    }
  }
  .how-explain-left {
    text-align: right;
  }
  .how-explain-right {
    text-align: left;
  }
}

.canvas-how {
  width: 100%;
  padding-top: 100%;
  position: relative;
  border-radius: 100%;
  box-shadow: 0px 10px 20px -10px black, 0px -10px 20px -10px RGB(var(--c1));
  animation: shadowTest 2s infinite linear;
  div {
    position: absolute;
    margin-top: 10px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    filter: drop-shadow(0 2px 2px black);
  }
}

@media (max-width: 1145px) {
  .wtf-how-explain {
    display: block;
    .how-explain-left,
    .how-explain-right {
      width: 100%;
      text-align: left;
      margin-top: 24px;
      max-width: 50ch;
      margin-left: 50%;
      transform: translateX(-50%);
    }
  }
}

@media (max-width: 700px) {
  .wtf-is-graphieros-body {
    h1 {
      text-shadow: 0 1px 1px RGB(var(--c0));
    }
  }
  .wtf-is-graphieros-struct {
    grid-template-columns: repeat(1, 1fr);
    padding: none;
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
      margin-bottom: 48px;
    }
  }
  .why-hex-explain {
    margin-top: 48px;
    margin-bottom: 48px;
  }
  .why-hex-explain-wide {
    margin-top: 110px;
  }
  .wtf-how-explain {
    display: block;
    padding: none;
    max-width: 40ch;
  }
}
.canvas-how {
  margin-top: 48px;
}
</style>