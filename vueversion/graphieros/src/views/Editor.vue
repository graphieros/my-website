<template>
  <div class="editor-body">
  <TriToggle />
    <div class="logo-position">
      <MiniLogo
        glyphSize="50"
        height="60"
        fontSize="25"
        textColor="75,106,160"
        glyphColor="75,106,160"
      />
    </div>
    <div class="editor-playground">
      <textarea
        v-focus
        v-if="selectedLang === 'toggle-right'"
        v-model="userInput"
        @input="writeGraphieros"
        placeholder="input graphieros phonology here, for example: kli-keo mea-kadwa / kio-tew-ma !"
      />
      <textarea
        v-else
        v-focus
        v-model="userInput"
        @input="writeGraphieros"
        placeholder="écrivez ici en graphieros phonologique, par exemple: kli-keo mea-kadwa / kio-tew-ma !"
      />
      <div class="editor-output-active">
        <Linear
          className="editor-linear"
          :sequence="linearSequence"
          colors="29,55,104"
        />
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
import TriToggle from "@/components/TriToggle.vue";
import store from "@/store/index.ts";
import { graphierosDictionnary } from "@/library/graphierosDictionnary.js";

export default defineComponent({
  name: "Editor",
  components: {
    MiniLogo,
    Linear,
    TriToggle
  },
  data() {
    return {
      userInput: "",
      linearSequence: "hea",
      translation: ""
    };
  },
  computed: {
    selectedLang() {
      return store.getters.toggleClass;
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
    writeGraphieros() {
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
  top:24px;
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
    padding-right:24px;
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
}
.editor-output-active {
  position: relative;
  height: 470px;
  width: 90%;
  margin-left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius:10px 10px 30px 30px;
  box-shadow: 0 10px 20px -10px RGB(var(--c1));
  div {
    height: 100%;
  }
}

.translation-hub {
  background:RGB(var(--c0));
  margin-bottom:100px;
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
