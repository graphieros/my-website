<template>
  <div :class="backgroundState"></div>
  <div :class="modalState">
    <div @click="closeModal" class="close-btn">
      <Fractal svgSize="30" sequence="zx-we" colors="255,255,255"/>
    </div>
    <Fractal :sequence="modalGlyph" colors="75,106,160" svgSize="150" />
  </div>
  <div class="prefixes-menu">
    <h1 v-if="selectedLang === 'toggle-right'"><span>Pre</span>fixes</h1>
    <h1 v-else><span>Pré</span>fixes</h1>
    <p v-if="selectedLang === 'toggle-right'">
      Most graphieros glyphs are verbs when used on their own. A set of prefixes
      are used to modify verbs into substantives.<br /><br />
      <span>Click on a glyph to show its usecases.</span>
    </p>
    <p v-else>
      La plupart des glyphes du graphieros sont des verbes, lorsqu'ils sont
      utilisés seuls. Une collection de préfixes est utilisée pour changer ces
      verbes en substantifs.<br /><br />
      <span>Cliquez sur un glyphe pour voir ses fonctionnalités</span>
    </p>
    <div class="prefixes-collection">
      <div
        class="prefix-wrapper"
        v-for="(prefix, index) in getPrefixes"
        :index="index"
        :key="prefix.name"
      >
        <p v-if="selectedLang === 'toggle-right'">{{ prefix.en }}</p>
        <p v-else>{{ prefix.fr }}</p>
        <div @click="() => openModal(index)">
          <Fractal
            v-bind:sequence="prefix.frac"
            colors="255,255,255"
            svgSize="60"
          />
        </div>
        <p>{{ `[ ${prefix.name} ]` }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Fractal from "@/components/Fractal.vue";
import Linear from "@/components/Linear.vue";
import store from "@/store/index.ts";

export default defineComponent({
  name: "Prefixes",
  components: {
    Fractal,
  },
  data() {
    return {
      modalState: "modal-closed",
      backgroundState: "background-closed",
      modalGlyph: "ss",
    };
  },
  methods: {
    openModal(index: number) {
      this.modalState = "modal-open";
      this.backgroundState = "background-open";
      return this.modalGlyph = this.getPrefixes[index].frac;
    },
    closeModal() {
      this.modalState = "modal-closed";
      this.backgroundState = "background-closed";
    }
  },
  computed: {
    selectedLang() {
      return store.getters.toggleClass;
    },
    getPrefixes() {
      const prefixes: {
        name: string;
        fr: string;
        en: string;
        frac: string;
      }[] = [
        {
          name: "ka",
          fr: "humain",
          en: "human",
          frac: "zx-ws-qe",
        },
        {
          name: "mea",
          fr: "déterminer",
          en: "to determine",
          frac: "zx-qe-wd",
        },
        {
          name: "pkae",
          fr: "sujet",
          en: "subject",
          frac: "zx-ws-qe-ez-zw-wx-xe",
        },
        {
          name: "ptae",
          fr: "objet",
          en: "object",
          frac: "ws-sx-xw-wz-ze-ex",
        },
        {
          name: "kio",
          fr: "habiter",
          en: "to inhabit",
          frac: "zw-wx-xe-ez-zq-qd-de",
        },
        {
          name: "meama",
          fr: "étant",
          en: "being",
          frac: "qz-zx-xd-de-eq-qw-wd",
        },
        {
          name: "vi",
          fr: "avec",
          en: "with",
          frac: "wz-zx-xe-ew-qd",
        },
        {
          name: "pkia",
          fr: "animal",
          en: "animal",
          frac: "qe-ez-zq-qw-wx-xs-se",
        },
        {
          name: "pio",
          fr: "végétal",
          en: "vegetal",
          frac: "zw-wd-ew-qx",
        },
        {
          name: "mina",
          fr: "minéral",
          en: "mineral",
          frac: "wz-zs-se-ex-xw-wq-qz-ze-ed-dx",
        },
        {
          name: "psoi",
          fr: "passé",
          en: "past",
          frac: "eq-xq-dq",
        },
        {
          name: "ftu",
          fr: "futur",
          en: "future",
          frac: "qd-zd-dw",
        },
        {
          name: "fo",
          fr: "impératif",
          en: "imperative",
          frac: "zd-dw-wz-ze-ex",
        },
        {
          name: "hi",
          fr: "conditionnel",
          en: "conditional",
          frac: "zd-dw-xq-qe",
        },
        {
          name: "fi",
          fr: "subjonctif",
          en: "subjonctive",
          frac: "eq-qw-dq-zx",
        },
      ];
      return prefixes;
    },
  },
});
</script>

<style lang="scss" scoped>
.prefixes-menu {
  width: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 130px;
  font-family: var(--logo);
  transition: all 0.25s ease-in-out;
  h1 {
    color: RGB(var(--c3));
    font-size: 3em;
    span {
      color: RGB(var(--c2));
      display: inline-block;
      transform: rotate(9deg);
    }
  }
  p {
    text-align: left;
    max-width: 60ch;
    margin-left: 50%;
    transform: translateX(-50%);
    color: RGB(var(--c3));
  }
}
.prefixes-collection {
  margin-top: 48px;
  box-sizing: border-box;
  padding-top: 24px;
  padding-bottom: 48px;
  padding-left: 100px;
  padding-right: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  background: radial-gradient(at top right, black, RGB(var(--c0)));
  border-radius: 15px;

  .prefix-wrapper {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid RGB(var(--c0));
    padding-top: 24px;
    padding-bottom: 24px;
    &:nth-child(1) {
      border-radius: 15px 0 0 0;
      border-top: 1px solid RGB(var(--c2));
      border-left: 1px solid RGB(var(--c2));
    }
    &:nth-child(2) {
      border-top: 1px solid RGB(var(--c2));
    }
    &:nth-child(3) {
      border-radius: 0 15px 0 0;
      border-top: 1px solid RGB(var(--c2));
      border-right: 1px solid RGB(var(--c2));
    }
    &:nth-child(4) {
      border-left: 1px solid RGB(var(--c2));
    }
    &:nth-child(6) {
      border-right: 1px solid RGB(var(--c2));
    }
    &:nth-child(7) {
      border-left: 1px solid RGB(var(--c2));
    }
    &:nth-child(9) {
      border-right: 1px solid RGB(var(--c2));
    }
    &:nth-child(10) {
      border-left: 1px solid RGB(var(--c2));
    }
    &:nth-child(12) {
      border-right: 1px solid RGB(var(--c2));
    }
    &:nth-child(13) {
      border-radius: 0 0 0 15px;
      border-left: 1px solid RGB(var(--c2));
      border-bottom: 1px solid RGB(var(--c2));
    }
    &:nth-child(14) {
      border-bottom: 1px solid RGB(var(--c2));
    }
    &:nth-child(15) {
      border-radius: 0 0 15px 0;
      border-right: 1px solid RGB(var(--c2));
      border-bottom: 1px solid RGB(var(--c2));
    }
    div,
    p {
      width: 100%;
    }
    p {
      text-align: center;
    }
    div {
      width: 60px;
      height: 60px;
      margin-left: 50%;
      transform: translateX(-50%);
      filter: drop-shadow(0 2px 2px black);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      &:hover {
        transform: translateX(-50%) scale(1.2, 1.2);
      }
    }
  }
}

.modal-closed,
.background-closed {
  display: none;
}

.background-open {
  display: block;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: radial-gradient(transparent, black);
  z-index: 9;
}

.modal-open {
  height: 80vh;
  width: 80vw;
  background: white;
  border-radius: 15px;
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .close-btn{
    height:30px;
    width:30px;
    position: absolute;
    top:10px;
    right:10px;
    border-radius:100%;
    background: radial-gradient(rgb(255, 180, 166), tomato);
    box-shadow: 0 5px 10px -5px tomato;
    cursor: pointer;
  }
}

@media (max-width: 755px) {
  .prefixes-collection {
    font-size: 0.8em;
    padding-right: 0px;
    padding-left: 0px;
  }
}
</style>
