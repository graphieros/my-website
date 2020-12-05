<template>
  <div class="editor-body">
    <TriToggle
      @click="setFocus"
      labelTop="lin"
      labelLeft="frac"
      labelRight="mol"
    />
    <div class="logo-position">
      <MiniLogo
        glyphSize="50"
        height="60"
        fontSize="25"
        textColor="75,106,160"
        glyphColor="255,255,255"
      />
    </div>

    <!-- linear mode -->
    <div
      v-if="selectedGraphierosMode === 'tritog-toggle-top'"
      class="editor-playground"
    >
      <textarea
        v-if="selectedLang === 'toggle-right'"
        ref="textarea"
        v-model="userInput"
        @input="writeLinear"
        placeholder="input graphieros phonology here, for example: kli-keo mea-kadwa / kio-tew-ma !"
      />
      <textarea
        v-else
        ref="textarea"
        v-model="userInput"
        @input="writeLinear"
        placeholder="écrivez ici en graphieros phonologique, par exemple: kli-keo mea-kadwa / kio-tew-ma !"
      />
      <div class="editor-output-active">
        <Linear
          className="editor-linear"
          :sequence="linearSequence"
          colors="29,55,104"
        />
      </div>
      <p v-if="selectedLang === 'toggle-right'">Linear mode</p>
      <p v-else>Mode linéaire</p>
      <div class="button-erase" @click="deleteInput">
        <Fractal svgSize="30" sequence="zx-we" colors="255,255,255" />
      </div>
    </div>

    <!-- molecular mode -->
    <div
      v-else-if="selectedGraphierosMode === 'tritog-toggle-right'"
      class="editor-playground"
    >
      <textarea
        ref="textarea"
        v-if="selectedLang === 'toggle-right'"
        v-model="userInput"
        @input="writeMolecular"
        placeholder="input graphieros phonology here, for example: kli-keo mea-kadwa / kio-tew-ma !"
      />
      <textarea
        v-else
        ref="textarea"
        v-model="userInput"
        @input="writeMolecular"
        placeholder="écrivez ici en graphieros phonologique, par exemple: kli-keo mea-kadwa / kio-tew-ma !"
      />
      <div class="editor-output-active">
        <div v-for="word in processedMolecules" :key="word">
          <Molecule
            className="editor-molecular"
            :sequence="word"
            colors="29,55,104"
            size="150"
          />
        </div>
      </div>
      <p v-if="selectedLang === 'toggle-right'">Molecular mode</p>
      <p v-else>Mode moéculaire</p>
      <div class="molecule-overflow" :style="showMoleculeOverflow">
        <Fractal svgSize="50" sequence="sz-zd-dw-wz" colors="252, 109, 109" />
        <p>{{ moleculeOverflow }}</p>
      </div>
      <div class="button-erase" @click="deleteInput">
        <Fractal svgSize="30" sequence="zx-we" colors="255,255,255" />
      </div>
    </div>

    <!-- fractal mode -->
    <div v-else class="editor-playground">
      <textarea
        ref="textarea"
        v-if="selectedLang === 'toggle-right'"
        v-model="userInput"
        @input="writeFractal"
        placeholder="input graphieros phonology here, for example: kli-keo mea-kadwa / kio-tew-ma !"
      />
      <!--fix with dynamic variable -->
      <textarea
        ref="textarea"
        v-else
        v-model="userInput"
        @input="writeFractal"
        placeholder="écrivez ici en graphieros phonologique, par exemple: kli-keo mea-kadwa / kio-tew-ma !"
      />
      <div class="editor-output-active fractal-board">
        <div v-for="word in processedFractals" :key="word">
          <Fractal
            className="editor-fractal"
            :sequence="word"
            colors="75,106,160"
            light="yes"
            intensity="1.25"
            svgSize="270"
          />
        </div>
      </div>
      <p v-if="selectedLang === 'toggle-right'">Fractal mode</p>
      <p v-else>Mode fractal</p>
      <div class="button-erase" @click="deleteInput">
        <Fractal svgSize="30" sequence="zx-we" colors="255,255,255" />
      </div>
    </div>
  </div>
  <div class="translation-hub" :style="showTranslation">
    <span class="explain" v-if="selectedLang === 'toggle-right'"
      >Litteral translation</span
    >
    <span class="explain" v-else>Traduction littérale</span>
    <p class="explain">{{ translation }}</p>
  </div>
</template>

<script lang="js">
import { defineComponent } from "vue";
import MiniLogo from "@/components/MiniLogo.vue";
import Linear from "@/components/Linear.vue";
import Molecule from "@/components/Molecule.vue";
import Fractal from "@/components/Fractal.vue";
import TriToggle from "@/components/TriToggle.vue";
import store from "@/store/index.ts";
import { graphierosDictionnary } from "@/library/graphierosDictionnary.js";
// import { SVG, extend as SVGextend, Element as SVGElement } from '@svgdotjs/svg.js'

export default defineComponent({
  name: "Editor",
  components: {
    MiniLogo,
    Linear,
    Molecule,
    Fractal,
    TriToggle
  },
  data() {
    return {
      userInput: "",
      linearSequence: "ne",
      molecularSequence: "",
      fractalSequence:"ss",
      translation: "",
      processedMolecules: ["ne ne ne ne ne ne ne"],
      moleculeTranslation: [],
      processedFractals: ["ss"],
      moleculeOverflow: "none"
    };
  },
  computed: {
    selectedLang() {
      return store.getters.toggleClass;
    },
    selectedGraphierosMode() {
      return store.getters.tritog;
    },
    showTranslation() {
      if (this.userInput === "") {
        return "display: none;";
      } else {
        return "display: block; position: relative; width: 100%; max-width: 600px;box-sizing: border-box; padding: 24px; font-family: var(--logo); color: RGB(var(--c3)); margin-left: 50%; margin-top: 24px; transform: translateX(-50%);border-radius: 15px; box-shadow: 0 10px 20px -10px RGBA(var(--c0), 0.5); font-size:0.8em;";
      }
    },
    showMoleculeOverflow() {
      if (this.moleculeOverflow === "none") {
        return "display:none;";
      } else {
        return "display: block";
      }
    }
  },
   mounted(){
    this.setFocus();
  },
  methods: {
    setFocus() {
      setTimeout(() => {
      this.$refs.textarea.focus();
    },200);
    },
    writeLinear() {
      this.translation = "";
      const UI = this.userInput;
      this.linearSequence = UI;

      if (UI === "") {
        this.linearSequence = "ne";
      }
      const glyphs = UI.split(/(?:\/| |-)+/);

      glyphs.forEach((glyph) => {
        graphierosDictionnary.forEach((entry) => {
          if (
            `_${glyph}` === entry.name &&
            store.getters.toggleClass === "toggle-right"
          ) {
            this.translation += `${entry.en} `;
          } else if (
            `_${glyph}` === entry.name &&
            store.getters.toggleClass === "toggle-left"
          ) {
            this.translation += `${entry.fr} `;
          }
        });
      });
    },
    writeMolecular(){
      this.translation="";
      this.processedMolecules = [];
      this.moleculeTranslation = [];
      this.moleculeOverflow = "";
      const UI = this.userInput;

      if (UI === "") {
        this.processedMolecules = ["ne ne ne ne ne ne ne"];
      }

      const words = UI.split(" ");

      if(words.length !== 0){
        words.forEach(word => {
          this.processedMolecules.push(word
            .split("-")
            .join(" "));
          this.moleculeTranslation.push(word.split("-"));
          if(word.split("-").length > 7){
            if (store.getters.toggleClass === "toggle-right") {
              this.moleculeOverflow = "ERROR: too many glyphs for a word !";
            } else {
              this.moleculeOverflow = "ERREUR: trop de glyphes pour un mot !";
            }
          }else{
            this.moleculeOverflow = "none";
          }
        });
      }

      this.moleculeTranslation.forEach(molecule => {
        molecule.forEach(glyph => {
          graphierosDictionnary.forEach((entry) => {
            if (
              `_${glyph}` === entry.name &&
              store.getters.toggleClass === "toggle-right"
            ) {
              this.translation += `${entry.en} `;
            } else if (
              `_${glyph}` === entry.name &&
              store.getters.toggleClass === "toggle-left"
            ) {
              this.translation += `${entry.fr} `;
            }
          });
        });
      });

    },
    writeFractal(){
      this.translation = "";
      this.processedFractals = ["ss"];
      this.fractalTranslation = "";
      const UI = this.userInput;

      if (UI === "") {
        this.processedFractals = ["ss"];
      }

      const words = UI.split(" ");
      const finalOutput = [];
        words.forEach(word => {
        const processed = word.split("-");
        const temp = [];
        processed.forEach(glyph => {
          graphierosDictionnary.forEach(entry => {
            if(entry.name === `_${glyph}`){
                temp.push(entry.fractal);
            }
          });
        });
        if(temp.toString().replaceAll(","," ") != ""){
          finalOutput.push(temp.toString().replaceAll(","," "));
        }
      });

      if(finalOutput.length > 0){
        this.processedFractals = [...finalOutput];
      }

      const glyphs = UI.split(/(?:\/| |-)+/);

      glyphs.forEach((glyph) => {
        graphierosDictionnary.forEach((entry) => {
          if (
            `_${glyph}` === entry.name &&
            store.getters.toggleClass === "toggle-right"
          ) {
            this.translation += `${entry.en} `;
          } else if (
            `_${glyph}` === entry.name &&
            store.getters.toggleClass === "toggle-left"
          ) {
            this.translation += `${entry.fr} `;
          }
        });
      });
    },
    deleteInput(){
      this.userInput = "";
      this.linearSequence = "ne";
      this.processedMolecules = ["ne ne ne ne ne ne ne"];
      this.processedFractals = ["ss"];
      this.moleculeOverflow = "none";
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
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.774),
    transparent,
    transparent
  );
}
.editor-playground {
  position: relative;
  width: 100%;
  max-width: 600px;
  background: radial-gradient(at top left, white, RGB(var(--c3)));
  height: 600px;
  margin-left: 50%;
  margin-top: 100px;
  top: 24px;
  transform: translateX(-50%);
  transition: all 0.25s ease-in-out;
  border-radius: 15px;
  box-sizing: border-box;
  padding-top: 24px;
  box-shadow: 0 10px 20px -10px RGBA(var(--c0), 0.5);
  textarea {
    position: absolute;
    bottom: 24px;
    resize: none;
    width: 88%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 30px;
    border: none;
    box-sizing: border-box;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 10px;
    overflow: scroll;
    font-family: var(--logo);
    color: RGB(var(--c0));
    background: radial-gradient(at bottom right, RGB(var(--c3)), white);
    box-shadow: 0 0 5px 1px RGB(var(--c0)) inset;
    &::placeholder {
      color: RGB(var(--c2));
    }
    &::-webkit-scrollbar {
      width: 0px;
    }
  }
  p {
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    font-family: var(--logo);
  }
}
.editor-output-active {
  position: absolute;
  height: 470px;
  width: 90%;
  margin-left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 10px 10px 30px 30px;
  box-shadow: 0 10px 20px -10px RGB(var(--c1));
  overflow: scroll;
  animation: playgroundAppear 0.5s ease-in-out;
  &::-webkit-scrollbar {
    width: 0px;
  }
  .editor-linear {
    height: 100%;
  }
}

@keyframes playgroundAppear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.editor-molecular {
  height: 150px;
  svg {
    height: 100px !important;
  }
}

.molecule-overflow {
  position: absolute;
  background: radial-gradient(at top, black, rgb(65, 47, 47));
  color: rgb(252, 109, 109);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 144px;
  width: 233px;
  box-sizing: border-box;
  padding: 3px;
  padding-top: 12px;
  border-radius: 12px;
  box-shadow: 0 10px 20px -10px rgba(65, 47, 47, 0.5);
  font-family: var(--logo);
  animation: errorZoom 0.25s ease-in-out;
  p {
    width: 200px;
    text-align: center;
    display: inline-block;
    position: absolute;
    top: 60px;
  }
}

@keyframes errorZoom {
  0% {
    transform: translate(-50%, -50%) scale(0, 0);
  }
  100% {
    transform: translate(-50%, -50%) scale(1.1, 1.1);
  }
}

.fractal-board {
  background: radial-gradient(
    at top left,
    RGB(var(--c1)),
    RGB(var(--c0)),
    black
  );
  div {
    &:first-child {
      filter: drop-shadow(1px 1px 2px black)
        drop-shadow(-1px -1px 1px RGBA(var(--c3), 0.4));
    }
  }
}

.translation-hub {
  background: RGB(var(--c0));
  margin-bottom: 100px;
  p {
    width: 100%;
    text-align: left;
  }
  span.explain {
    display: block;
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    color: RGB(var(--c2));
  }
}

.button-erase {
  height: 30px;
  width: 30px;
  position: absolute;
  bottom: 2px;
  right: 2px;
  background: var(--gradTopLeft);
  border-radius: 100%;
  box-shadow: 0 5px 10px -5px RGB(var(--c1));
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.25s ease-in-out;
  &:hover {
    opacity: 1;
  }
}

@media (max-width: 650px) {
  .editor-playground {
    width: 400px;
    height: 500px;
  }
  .translation-hub {
    width: 400px !important;
  }
  .editor-output-active {
    height: 370px;
    width: 100%;
  }
  .logo-position {
    background: linear-gradient(to right, white, transparent);
  }
}
@media (max-width: 400px) {
  .editor-playground {
    width: 300px;
    height: 400px;
  }
  .editor-output-active {
    height: 280px;
  }
  .translation-hub {
    width: 300px !important;
  }
}
</style>
