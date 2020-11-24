<template>
  <div class="editor-body">
    <TriToggle labelTop="lin" labelLeft="frac" labelRight="mol" />
    <div class="logo-position">
      <MiniLogo
        glyphSize="50"
        height="60"
        fontSize="25"
        textColor="75,106,160"
        glyphColor="75,106,160"
      />
    </div>

    <!-- linear mode -->
    <div
      v-if="selectedGraphierosMode === 'tritog-toggle-top'"
      class="editor-playground"
    >
      <textarea
        v-focus
        v-if="selectedLang === 'toggle-right'"
        v-model="userInput"
        @input="writeLinear"
        placeholder="input graphieros phonology here, for example: kli-keo mea-kadwa / kio-tew-ma !"
      />
      <textarea
        v-else
        v-focus
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
        v-focus
        v-if="selectedLang === 'toggle-right'"
        v-model="userInput"
        @input="writeMolecular"
        placeholder="input graphieros phonology here, for example: kli-keo mea-kadwa / kio-tew-ma !"
      />
      <textarea
        v-else
        v-focus
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
      <div class="button-erase" @click="deleteInput">
        <Fractal svgSize="30" sequence="zx-we" colors="255,255,255" />
      </div>
    </div>

    <!-- fractal mode -->
    <div v-else class="editor-playground">
      <textarea
        v-focus
        v-if="selectedLang === 'toggle-right'"
        v-model="userInput"
        @input="writeFractal"
        placeholder="input graphieros phonology here, for example: kli-keo mea-kadwa / kio-tew-ma !"
      />
      <textarea
        v-else
        v-focus
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
      linearSequence: "hea",
      molecularSequence: "",
      fractalSequence:"ss",
      translation: "",
      processedMolecules: ["hea sta sko pko"],
      moleculeTranslation: [],
      processedFractals: ["qz-ze-ed-dx-xw-wq zw-wd-dz-qs-se-xs qz-ze-ed-dx-xw-wq"],
      fractalTranslation: []
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
    }
  },
  directives: {
    focus: {
      inserted: (el) => el.focus()
    }
  },
  methods: {
    writeLinear() {
      this.translation = "";
      const UI = this.userInput;
      this.linearSequence = UI;

      if (UI === "") {
        this.linearSequence = "hea";
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
      const UI = this.userInput;

      if (UI === "") {
        this.processedMolecules = ["hea sta sko pko"];
      }

      const words = UI.split(" ");

      if(words.length !== 0){
        words.forEach(word => {
          this.processedMolecules.push(word
            .split("-")
            .join(" "));
          this.moleculeTranslation.push(word.split("-"))
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
        this.processedFractals = ["qz-ze-ed-dx-xw-wq zw-wd-dz-qs-se-xs qz-ze-ed-dx-xw-wq"];
      }

      const words = UI.split(" ");

      //[[g,g,g],[g,g,g]]
      const bigBox = [];


        words.forEach(word => {
        const processed = word.split("-");
        const box = [];
        processed.forEach(glyph => {
          graphierosDictionnary.forEach(entry => {
            if(entry.name === `_${glyph}`){
                box.push(entry.fractal);
            }
          });
        });
        if(box.toString().replaceAll(","," ") != ""){
          bigBox.push(box.toString().replaceAll(","," ")); 
        }
      });
      
      
      if(bigBox.length > 0){
        this.processedFractals = [...bigBox];
      }
 

      // for each "xx xx" => ["xx","xx"] => ["ff ff"]
    },
    deleteInput(){
      this.userInput = "";
      this.linearSequence ="hea";
      this.processedMolecules=["hea sta sko pko"];
      this.processedFractals=["qz-ze-ed-dx-xw-wq zw-wd-dz-qs-se-xs qz-ze-ed-dx-xw-wq"];
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

.fractal-board {
  background: radial-gradient(
    at top left,
    RGB(var(--c1)),
    RGB(var(--c0)),
    black
  );
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
