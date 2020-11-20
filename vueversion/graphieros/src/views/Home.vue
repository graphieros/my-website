<template>
  <div class="home">
    <div class="home-logo-wrapper">
      <Logo />
    </div>
    <h1>Graphieros</h1>
    <search :inputFunc="inputFunction" />
    <div class="searchResult-wrapper" v-show="searchResult !== ''">
      <span>{{ textResFrac }}</span>
      <Fractal :sequence="fractalRes" svgSize="100" colors="29, 55, 104" />
      <span><span>[ </span>{{ searchResult }}<span> ]</span></span>
      <div class="close-search" v-on:click="closeModal">
        <Fractal
          className="close-search-fractal"
          sequence="zx-we"
          svgSize="30"
          colors="255,255,255"
        />
      </div>
    </div>
    <div class="lineRes-wrapper" v-show="lineRes !== ''">
      <div class="lineRes-svg-wrapper">
        <p>{{ textResLine }}</p>
        <Linear :sequence="lineRes" size="10" colors="29,55,104" />
      </div>
      <span>[ {{ lineRes }} ]</span>
      <div class="close-search" v-on:click="closeModal">
        <Fractal
          className="close-search-fractal"
          sequence="zx-we"
          svgSize="30"
          colors="255,255,255"
        />
      </div>
    </div>
    <div class="fractal-watermark0">
      <fractal
        sequence="zw-wd-dz-qs-se-xs"
        colors="255,255,255"
        svgSize="100%"
      />
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Logo from "@/components/Logo.vue";
import Linear from "@/components/Linear.vue";
import Fractal from "@/components/Fractal.vue";
import Search from "@/components/Search.vue";
import { graphierosDictionnary } from "@/library/graphierosDictionnary";
import graphierosTranslation from "@/library/graphierosTranslation.json"; // wtf ?

export default defineComponent({
  name: "Home",
  components: {
    Fractal,
    Linear,
    Search,
    Logo
  },
  data() {
    return {
      searchResult: "",
      fractalRes: "ss",
      textResFrac: "",
      textResLine: "",
      lineRes: "",
      time: 0
    };
  },
  methods: {
    inputFunction(input: string) {
      clearTimeout(this.time);
      this.time = setTimeout(() => {
        graphierosDictionnary.forEach(
          (entry: { name: string; fractal: string; fr: string }) => {
            if (entry.fr === input) {
              this.searchResult = entry.name.replace("_", "");
              this.fractalRes = entry.fractal;
              this.textResFrac = entry.fr;
            }
          }
        );
        if (input === "") {
          this.searchResult = "";
          this.lineRes = "";
        }
        graphierosTranslation.forEach((entry: { fr: string; line: string }) => {
          if (entry.fr === input) {
            this.lineRes = entry.line;
            this.textResLine = entry.fr;
          }
        });
      }, 255);
    },
    closeModal() {
      this.searchResult = "";
      this.lineRes = "";
    }
  }
});
</script>
<style lang="scss" scoped>

.home-logo-wrapper{
  margin-top:280px;
}
h1 {
  margin-top: 250px;
  font-family: var(--logo);
  color: RGB(var(--c1));
}
h1::after {
  display: block;
  content: "hexagonal language";
  font-size: 0.33em;
  margin-top: -8px;
  margin-left: 63px;
  color: RGB(var(--c2));
}
.first-line {
  height: 300px;
}
.searchResult-wrapper {
  position: relative;
  background: white;
  border: 1px solid RGB(var(--c2));
  border-radius: 30px 0 30px 30px;
  width: 170px;
  height: 195px;
  left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
  padding: 20px;
  margin-top: 24px;
  box-shadow: 0px 10px 20px -10px RGBA(var(--c1), 0.5),
    -10px -10px 20px -10px white, -10px -10px 20px -10px white inset;
  span {
    font-family: var(--logo);
    color: RGB(var(--c2));
    span {
      color: RGB(var(--c1));
    }
  }
  animation: srw 0.1s ease-in-out;
}

.close-search {
  height: 30px;
  width: 30px;
  border-radius: 100%;
  background: RGB(var(--c2));
  position: absolute;
  top: -15px;
  right: -15px;
  box-shadow: 0 5px 10px -5px RGB(var(--c1));
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.25s ease-in-out;
  &:hover {
    opacity: 1;
  }
  .close-search-fractal {
    filter: drop-shadow(0 2px 1px RGB(var(--c0)));
  }
}

.lineRes-wrapper {
  margin-top: 50px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 170px;
  background: white;
  border: 1px solid RGB(var(--c2));
  border-radius: 30px 0 30px 30px;
  box-sizing: border-box;
  padding-bottom: 15px;
  box-shadow: 0px 10px 20px -10px RGBA(var(--c1), 0.5),
    -10px -10px 20px -10px white, -10px -10px 20px -10px white inset;
  p {
    display: inline-block;
    position: absolute;
    font-family: var(--logo);
    color: RGB(var(--c2));
    margin-top: 12px;
    width: 100%;
    transform: translateX(-50%);
    margin-bottom: 30px;
  }
  span {
    display: block;
    margin-top: -100px;
    width: 90%;
    margin-left: 50%;
    transform: translateX(-50%);
    font-family: var(--logo);
    color: RGB(var(--c2));
  }
  animation: srw 0.1s ease-in-out;
}

.lineRes-svg-wrapper {
  height: 100%;
  box-sizing: border-box;
  padding: 60px;
  padding-top: 0px;
  margin-top: 0px;
}

.fractal-watermark0 {
  position: fixed;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  animation: fwm 96s infinite linear;
}

@keyframes fwm {
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes srw {
  0% {
    opacity: 0;
    transform: translateX(-50%) scale(0, 0);
    margin-top: -100px;
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) scale(1, 1);
  }
}
</style>
