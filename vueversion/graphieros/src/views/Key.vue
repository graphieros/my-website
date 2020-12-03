<template>
  <div class="key-body">
    <div class="logo-position">
      <MiniLogo
        glyphSize="50"
        height="60"
        fontSize="25"
        textColor="75,106,160"
        glyphColor="255,255,255"
      />
    </div>
    <div :class="sideMenu" @click="showMenuAndHidePages">
      <Fractal svgSize="60" sequence="ze-qd-wx" colors="255,255,255" />
    </div>
    <div class="key-intro">
      <div :class="menuFrac">
        <Fractal
          svgSize="100%"
          className="key-frac"
          :sequence="menuFracSequence"
          colors="122,161,216"
          light="true"
          intensity="1.2"
        />
      </div>
      <div v-if="selectedLang === 'toggle-right'" :class="menuActive">
        <span
          @mouseover="displayMenuFractal(0)"
          @click="shrinkMenuAndShowPage(0)"
          >Graphieros ?</span
        >
        <span
          @mouseover="displayMenuFractal(1)"
          @click="shrinkMenuAndShowPage(1)"
          >the 3 modes</span
        >
        <span
          @mouseover="displayMenuFractal(2)"
          @click="shrinkMenuAndShowPage(2)"
          >prefixes</span
        >
        <span
          @mouseover="displayMenuFractal(3)"
          @click="shrinkMenuAndShowPage(3)"
          >numbers</span
        >
        <span
          @mouseover="displayMenuFractal(4)"
          @click="shrinkMenuAndShowPage(4)"
          >phonology</span
        >
        <span
          @mouseover="displayMenuFractal(5)"
          @click="shrinkMenuAndShowPage(5)"
          >grammar</span
        >
      </div>
      <div v-else :class="menuActive">
        <span
          @mouseover="displayMenuFractal(0)"
          @click="shrinkMenuAndShowPage(0)"
          >graphieros ?</span
        >
        <span
          @mouseover="displayMenuFractal(1)"
          @click="shrinkMenuAndShowPage(1)"
          >les 3 modes</span
        >
        <span
          @mouseover="displayMenuFractal(2)"
          @click="shrinkMenuAndShowPage(2)"
          >préfixes</span
        >
        <span
          @mouseover="displayMenuFractal(3)"
          @click="shrinkMenuAndShowPage(3)"
          >nombres</span
        >
        <span
          @mouseover="displayMenuFractal(4)"
          @click="shrinkMenuAndShowPage(4)"
          >phonologie</span
        >
        <span
          @mouseover="displayMenuFractal(5)"
          @click="shrinkMenuAndShowPage(5)"
          >grammaire</span
        >
      </div>
    </div>

    <div :class="page0">
      <WhatIsGraphieros />
    </div>
    <div :class="page1">
      <ThreeModes />
    </div>
    <div :class="page2">
      <Prefixes />
    </div>
    <div :class="page3">
      <Numbers />
    </div>
    <div :class="page4">
      <Phonology />
    </div>
    <div :class="page5">
      <Grammar />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MiniLogo from "@/components/MiniLogo.vue";
import Fractal from "@/components/Fractal.vue";
import store from "@/store/index.ts";
import WhatIsGraphieros from "@/components/WhatIsGraphieros.vue";
import ThreeModes from "@/components/ThreeModes.vue";
import Prefixes from "@/components/Prefixes.vue";
import Numbers from "@/components/Numbers.vue";
import Phonology from "@/components/Phonology.vue";
import Grammar from "@/components/Grammar.vue";

export default defineComponent({
  name: "Key",
  components: {
    MiniLogo,
    Fractal,
    WhatIsGraphieros,
    ThreeModes,
    Prefixes,
    Numbers,
    Phonology,
    Grammar,
  },
  data() {
    return {
      menuFracSequence: "zw-ws-qd-dx",
      menuActive: "key-menu-active",
      menuFrac: "key-frac-active",
      sideMenu: "side-menu-inactive",
      page0: "page-graphieros-inactive",
      page1: "page-3-modes-inactive",
      page2: "page-prefixes-inactive",
      page3: "page-numbers-inactive",
      page4: "page-phonology-inactive",
      page5: "page-grammar-inactive",
    };
  },
  computed: {
    selectedLang() {
      return store.getters.toggleClass;
    },
  },
  methods: {
    displayMenuFractal(position: number) {
      const sequences: string[] = [
        "zx-qe-wd qw-wz-sx-xe wz-zx-xe wq-qz-ze-ed-dx-xw",
        "dq-zs-ws qz-ze-eq-sd-dx-xs wz-zx-xe wz-zd-dw",
        "qw-wz-sx-xe we-xe-qd wz-zq-qw-sq dq-zs-sw",
        "wz-ze-ex-xw-ws-sx wz-zx-xe zs-sd-sw",
        "qw-zx-ed se-ez-zw-wx-xs-sd zs-se-qd-wx",
        "zw-ex qw-wz-sx-xe dq-zs-sw",
      ];
      this.menuFracSequence = sequences[position];
    },
    shrinkMenuAndShowPage(page: number) {
      const pages: string[] = [
        "page-graphieros",
        "page-3-modes",
        "page-prefixes",
        "page-numbers",
        "page-phonology",
        "page-grammar",
      ];

      switch (page) {
        case 0:
          this.page0 = pages[0];
          break;
        case 1:
          this.page1 = pages[1];
          break;
        case 2:
          this.page2 = pages[2];
          break;
        case 3:
          this.page3 = pages[3];
          break;
        case 4:
          this.page4 = pages[4];
          break;
        case 5:
          this.page5 = pages[5];
      }

      this.menuActive = "key-menu-transition";
      this.menuFrac = "key-frac-transition";
      this.sideMenu = "side-menu-active";

      setTimeout(() => {
        this.menuActive = "key-menu-inactive";
        this.menuFrac = "key-frac-inactive";
      }, 250);
    },
    showMenuAndHidePages() {
      this.menuActive = "key-menu-active";
      this.menuFrac = "key-frac-active";
      this.sideMenu = "side-menu-inactive";
      this.page0 = "page-graphieros-inactive";
      this.page1 = "page-3-modes-inactive";
      this.page2 = "page-prefixes-inactive";
      this.page3 = "page-numbers-inactive";
      this.page4 = "page-phonology-inactive";
      this.page5 = "page-grammar-inactive";
    },
  },
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

.key-intro {
  width: 100%;
  box-sizing: border-box;
  padding-left: 10vw;
  padding-right: 10vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  div {
    transition: all 0.25s ease-in-out;
  }
}

.key-frac-active,
.key-frac-transition {
  height: 50vh;
  width: 50vh;
  filter: drop-shadow(0 2px 4px RGB(var(--c0)));
}

.key-menu-inactive,
.key-frac-inactive {
  display: none;
}

.key-menu-active,
.key-menu-transition {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  align-items: center;
  justify-items: center;
  box-shadow: 0px 10px 20px -10px RGB(var(--c1)),
    0px -10px 20px -10px RGB(var(--c3));
  border-radius: 30px;
  span {
    font-family: var(--logo);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    padding: 12px;
    border: 1px solid transparent;
    &:nth-child(1) {
      border-radius: 30px 0 0 0;
      border-bottom: 1px solid RGB(var(--c2));
      &:hover {
        box-shadow: 5px 5px 10px -5px RGB(var(--c1));
      }
    }
    &:nth-child(2) {
      border-bottom: 1px solid RGB(var(--c2));
      border-right: 1px solid RGB(var(--c2));
      border-left: 1px solid RGB(var(--c2));
      &:hover {
        box-shadow: 0 5px 10px -5px RGB(var(--c1));
      }
    }
    &:nth-child(3) {
      border-radius: 0 30px 0 0;
      border-bottom: 1px solid RGB(var(--c2));
      &:hover {
        box-shadow: -5px 5px 10px -5px RGB(var(--c1));
      }
    }
    &:nth-child(4) {
      border-radius: 0 0 0 30px;
      &:hover {
        box-shadow: 5px -5px 10px -5px RGB(var(--c1));
      }
    }
    &:nth-child(5) {
      border-right: 1px solid RGB(var(--c2));
      border-left: 1px solid RGB(var(--c2));
      &:hover {
        box-shadow: 0px -5px 10px -5px RGB(var(--c1));
      }
    }
    &:nth-child(6) {
      border-radius: 0 0 30px 0;
      &:hover {
        box-shadow: -5px -5px 10px -5px RGB(var(--c1));
      }
    }
    &:hover {
      background: RGBA(var(--c3), 0.2);
      color: RGB(var(--c3));
      border: 1px solid RGB(var(--c3));
    }
  }
}

.key-menu-active,
.key-frac-active {
  animation: keyMenuAppear 0.25s ease-in-out;
}

.key-menu-transition {
  animation: fadeAway 0.25s ease-in-out;
}

.key-frac-transition {
  animation: fadeAwayFrac 0.25s ease-out;
}

.side-menu-inactive {
  display: none;
}

.side-menu-active {
  position: fixed;
  top: 0px;
  right: 0px;
  height: 60px;
  width: 60px;
  border-radius: 3px 0 0 3px;
  background: radial-gradient(
    at left,
    RGB(var(--c2)),
    RGB(var(--c1)),
    RGB(var(--c0))
  );
  box-shadow: 0 5px 10px -5px RGB(var(--c0));
  animation: sideMenuAppear 0.25s ease-in;
  z-index: 1;
  cursor: pointer;
  div {
    filter: drop-shadow(0 2px 2px black);
  }
  &:hover {
    div {
      animation: wobble 0.25s ease-in-out;
    }
  }
}

.page-graphieros-inactive,
.page-3-modes-inactive,
.page-prefixes-inactive,
.page-numbers-inactive,
.page-phonology-inactive,
.page-grammar-inactive {
  display: none;
}

.page-graphieros-active,
.page-3-modes-active,
.page-prefixes-active,
.page-numbers-active,
.page-phonology-active,
.page-grammar-active {
  display: block;
}

@keyframes keyMenuAppear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeAway {
  100% {
    opacity: 0;
  }
}

@keyframes fadeAwayFrac {
  100% {
    opacity: 0;
  }
}

@keyframes sideMenuAppear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes wobble {
  0% {
    transform: rotate(-4deg);
  }
  25% {
    transform: rotate(3deg);
  }
  50% {
    transform: rotate(-2deg);
  }
  75% {
    transform: rotate(1deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@media (max-width: 750px) {
  .key-intro {
    display: block;
    padding: none;
  }
  .key-frac-active,
  .key-frac-transition {
    margin-left: 50%;
    transform: translateX(-50%);
  }
}

@media (max-width: 650px) {
  .logo-position {
    background: linear-gradient(to right, white, transparent);
  }
  .key-menu-active,
  .key-menu-transition {
    font-size: 0.6em;
    grid-template-rows: repeat(2, 70px);
  }
}
</style>
