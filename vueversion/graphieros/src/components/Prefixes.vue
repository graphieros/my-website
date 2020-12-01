<template>
  <div :class="backgroundState"></div>
  <div :class="modalState">
    <div @click="closeModal" class="close-btn">
      <Fractal svgSize="30" sequence="zx-we" colors="255,255,255" />
    </div>

    <div class="modal-inside">
      <Fractal
        :sequence="modalGlyph.glyph"
        colors="122,161,216"
        svgSize="150"
      />
      <h2>{{ `[ ${modalGlyph.name} ]` }}</h2>
      <h3 v-if="selectedLang === 'toggle-right'">{{ modalGlyph.en }}</h3>
      <h3 v-else>{{ modalGlyph.fr }}</h3>
      <p v-if="selectedLang === 'toggle-right'">{{ modalGlyph.explEn }}</p>
      <p v-else>{{ modalGlyph.explFr }}</p>
    </div>
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
      modalGlyph: {
        glyph: "ss",
        name: "",
        fr: "",
        en: "",
        explEn:"",
        explFr:""
      },
    };
  },
  methods: {
    openModal(index: number) {
      this.modalState = "modal-open";
      this.backgroundState = "background-open";
      const pref = this.getPrefixes[index];
      return (this.modalGlyph = {
        glyph: pref.frac,
        name: pref.name,
        fr: pref.fr,
        en: pref.en,
        explEn: pref.explainEn,
        explFr: pref.explainFr
      });
    },
    closeModal() {
      this.modalState = "modal-closed";
      this.backgroundState = "background-closed";
    },
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
        explainFr: string;
        explainEn: string;
      }[] = [
        {
          name: "ka",
          fr: "humain",
          en: "human",
          frac: "zx-ws-qe",
          explainFr:
            "Placé devant un verbe, le glyphe [ka] désigne la personne qui produit l'action. 'Donner' devient 'donneur', par exemple. Ce glyphe est de genre neutre. Il peut être remplacé par un glyphe de genre, avec la même fonction.",
          explainEn: "Placed in front of a verb, the glyph [ka] designates the person who produces the action. 'To give' becomes 'giver', for example. This glyph is gender neutral. It can be replaced by a gender glyph, with the same function.",
        },
        {
          name: "mea",
          fr: "déterminer",
          en: "to determine",
          frac: "zx-qe-wd",
          explainFr: "Placé devant un verbe, le glyphe [mea] change celui-ci en nom. Par exemple, le verbe 'agir' devient 'action'.",
          explainEn: "Placed in front of a verb, the glyph [mea] changes it into a noun. For example, the verb 'to act' becomes 'action'.",
        },
        {
          name: "pkae",
          fr: "sujet",
          en: "subject",
          frac: "zx-ws-qe-ez-zw-wx-xe",
          explainFr: "Construit à partir de [ka] (être humain), le glyphe [pka.e] indique la personne ou la chose qui subit une action. Il est plus fréquemment utilisé pour transcrire ce que le français résout par le participe passé. Par exemple, pour dire 'j'ai pris', il faudrait dire 'je sujet-de action'.",
          explainEn: "Constructed from [ka] (to be human), the glyph [pkae] indicates the person or thing undergoing an action. It is more frequently used to transcribe what English resolves by the past participle. For example, to say 'I was taken', one should say 'I was subject-of taking'.",
        },
        {
          name: "ptae",
          fr: "objet",
          en: "object",
          frac: "ws-sx-xw-wz-ze-ex",
          explainFr: "Ce préfixe permet de distinguer du substantif la possibilité de l’action de. Par exemple, on utilisera le préfixe [mea] pour changer le verbe 'accéder' en 'accession', mais [ptae] pour le changer en 'accès'; ou encore [mea] pour changer 'cadrer' en 'cadrage', et [ptae] pour le changer en 'cadre'.",
          explainEn: "This prefix distinguishes the possibility of the action-of from the substantive. For example, we will use the prefix [mea] to change the verb 'to access' to 'accession', but [ptae] to change it to 'access'; or [mea] to change 'to frame' to 'framing', and [ptae] to change it to 'a frame'.",
        },
        {
          name: "kio",
          fr: "habiter",
          en: "to inhabit",
          frac: "zw-wx-xe-ez-zq-qd-de",
          explainFr: "Le glyphe [kio], permet de désigner un lieu lorsqu’il est placé en préfixe. Utilisé seul en préfixe, il ne désigne jamais un lieu qui serait le produit d’une transformation humaine. Ainsi, la Terre ou la Lune sont-ils des lieux préfixés par [kio], mais pas un pont, ni une maison. Un lac naturel, mais pas un étang artificiel.",
          explainEn: "The glyph [kio] is used to designate a place when it is placed as a prefix. Used alone as a prefix, it never designates a place that is the product of human transformation. Thus, the Earth or the Moon are places prefixed by [kio], but not a bridge, nor a house. A natural lake, but not an artificial pond.",
        },
        {
          name: "meama",
          fr: "étant",
          en: "being",
          frac: "qz-zx-xd-de-eq-qw-wd",
          explainFr: "Le résultat graphique de la fusion du préfixe [mea] (déterminer) et du verbe [ma] (être), est le préfixe [mea – ma], indiquant le gérondif. 'Imaginer' devient 'imaginant'.",
          explainEn: "The graphic result of the fusion of the prefix [mea] (determine) and the verb [ma] (to be), is the prefix [mea - ma], indicating the gerund. 'To imagine' becomes 'imagining'.",
        },
        {
          name: "vi",
          fr: "avec",
          en: "with",
          frac: "wz-zx-xe-ew-qd",
          explainFr: "Placé devant un verbe, un nom ou un adjectif, le préfixe [vi] change celui-ci en adverbe. 'Obstiner' devient 'obstinément', 'particularité' devient 'particulièrement'.",
          explainEn: "Placed in front of a verb, a noun or an adjective, the prefix [vi] changes it into an adverb. 'Obstinate' becomes 'obstinately', 'particularity' becomes 'particularly'.",
        },
        {
          name: "pkia",
          fr: "animal",
          en: "animal",
          frac: "qe-ez-zq-qw-wx-xs-se",
          explainFr: "Le glyphe [pkia] est placé en préfixe de tout nom d'animal, en considérant que tout vivant qui n'est ni minéral ni végétal fait partie de cette catégorie.",
          explainEn: "The glyph [pkia] is used for any animal name, considering that any living thing that is neither mineral nor plant belongs to this category.",
        },
        {
          name: "pio",
          fr: "végétal",
          en: "vegetal",
          frac: "zw-wd-ew-qx",
          explainFr: "Le glyphe [pio] est placé en préfixe de tout nom de végétal.",
          explainEn: "The glyph [pio} is used as a prefix for any vegetal name.",
        },
        {
          name: "mina",
          fr: "minéral",
          en: "mineral",
          frac: "wz-zs-se-ex-xw-wq-qz-ze-ed-dx",
          explainFr: "Le glyphe [mina] est placé en préfixe de tout nom de minéral.",
          explainEn: "The glyph [mina] is used as a prefix for any mineral name.",
        },
        {
          name: "psoi",
          fr: "passé",
          en: "past",
          frac: "eq-xq-dq",
          explainFr: "Le glyphe [psoi] est utilisé en préfixe pour conjuguer les verbes au passé.",
          explainEn: "The glyph [psoi] is used as a prefix to conjugate verbs in the past tense.",
        },
        {
          name: "ftu",
          fr: "futur",
          en: "future",
          frac: "qd-zd-dw",
          explainFr: "Le glyphe [ftu] est utilisé en préfixe pour conjuguer les verbes au futur.",
          explainEn: "The glyph [ftu] is used as a prefix to conjugate verbs in the future tense.",
        },
        {
          name: "fo",
          fr: "impératif",
          en: "imperative",
          frac: "zd-dw-wz-ze-ex",
          explainFr: "Le glyphe [fo] est utilisé en préfixe pour utiliser un verbe à l'impératif.",
          explainEn: "The glyph [fo] is used as a prefix to use an imperative verb.",
        },
        {
          name: "hi",
          fr: "conditionnel",
          en: "conditional",
          frac: "zd-dw-xq-qe",
          explainFr: "Le glyphe [hi] est utilisé en préfixe pour utiliser un verbe au conditionnel.",
          explainEn: "The glyyph [hi] is used as a prefix to use a verb in the conditional.",
        },
        {
          name: "fi",
          fr: "subjonctif",
          en: "subjonctive",
          frac: "eq-qw-dq-zx",
          explainFr: "Le glyphe [fi] est utilisé en préfixe pour utiliser un verbe au subjoncitf.",
          explainEn: "The glyyph [hi] is used as a prefix to use a verb in the subjonctive.",
        },
      ];
      return prefixes;
    },
  },
});
</script>

<style lang="scss" scoped>
h3,
h2 {
  font-family: var(--logo);
}
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
  max-width: 600px;
  background: RGB(var(--c3));
  border-radius: 15px;
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 10px 20px black;
  .close-btn {
    height: 30px;
    width: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 100%;
    background: radial-gradient(rgb(255, 180, 166), tomato);
    box-shadow: 0 5px 10px -5px tomato;
    cursor: pointer;
    z-index: 1;
  }
  .modal-inside {
    position: absolute;
    height: calc(100% - 35px);
    width: calc(100% - 35px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(at top right, black, RGB(var(--c0)));
    border-radius: 15px;
    h2 {
      margin-top: -10px;
      color: RGB(var(--c3));
    }
    h3 {
      margin-top: -20px;
      color: RGB(var(--c1));
    }
    p{
      font-family: var(--inter);
      color: RGB(var(--c3));
      text-align:left;
      padding:20px;
    }
  }
}

@media (max-width: 755px) {
  .prefixes-collection {
    font-size: 0.8em;
    padding-right: 0px;
    padding-left: 0px;
  }
  .modal-open {
    .close-btn {
      top: 5px;
      right: 5px;
    }
    .modal-inside {
      height: calc(100% - 20px);
      width: calc(100% - 20px);
      p{
        margin-top:-20px;
        font-size:0.8em;
      }
    }
  }
}
</style>
