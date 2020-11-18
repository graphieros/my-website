<template>
  <div class="glyphes">
    <h1>Liste des glyphes du graphieros</h1>
    <div className="glyph-list">
      <div
        className="glyph"
        v-for="(item, index) in items"
        v-bind:item="item"
        v-bind:index="index"
        v-bind:key="item.name"
        v-bind:fr="item.fr"
      >
        <Linear
          className="glyph-line"
          v-bind:sequence="item.name.replace('_', '')"
          colors="29, 55, 104"
          size="50"
          glyphWidth="100"
        />
        <span className="span-fr">{{ item.fr }}</span>
        <span className="span-name">[ {{ item.name.replace("_","") }} ]</span>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from "vue";
import { graphierosDictionnary } from "@/library/graphierosDictionnary.js";
import Linear from "@/components/Linear.vue";
export default defineComponent({
  name: "Home",
  components: {
    Linear
  },
  data() {
    return {
      items: graphierosDictionnary
    };
  }
});
</script>

<style scoped lang="scss">
h1 {
  font-family: var(--logo);
  color: RGB(var(--c1));
}
.glyphes {
  position: absolute;
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  background: lightgrey;
  top: 0;
  left: 0;
}
.glyph {
  width: 100px;
  height: 100px;
  background: lightgrey;
  border-radius: 3px;
  box-shadow: 5px 5px 10px -5px grey, -5px -5px 10px -5px white,
    -5px -5px 10px -5px white inset, 5px 5px 10px -5px grey inset;
}
.glyph-line {
  height: 100px;
  width: 100px;
}
.glyph-list {
  display: grid;
  grid-template-columns: repeat(6, 100px);
  grid-template-rows: repeat(auto, 100px);
  align-items: center;
  justify-items: center;
  grid-gap: 12px;
}
.glyph-wrap {
  height: 100px;
  width: 100px;
  background: lightgray;
}
span.span-fr {
  display: block;
  position: relative;
  top: -95px;
  font-family: var(--logo);
  font-size: 0.8em;
  color: RGB(var(--c1));
}
span.span-name {
  display: block;
  position: relative;
  top: -40px;
  font-family: var(--logo);
  font-size: 0.8em;
  color: RGB(var(--c1));
}
</style>
