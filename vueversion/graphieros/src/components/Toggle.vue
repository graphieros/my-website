<template>
  <div>
    <div class="toggle-wrap">
      <div>
        <div v-bind:class="toggleClass" @click="toggle"></div>
      </div>
    </div>
  </div>
  <span v-bind:class="toggleLangFr">fr</span>
  <span v-bind:class="toggleLangEn">en</span>
</template>

<script>
import { defineComponent } from "vue";
import store from "@/store/index.ts";

export default defineComponent({
  name: "Toggle",
  computed: {
    toggleClass() {
      return store.getters.toggleClass;
    },
    toggleLangFr() {
      return store.getters.toggleLangFr;
    },
    toggleLangEn() {
      return store.getters.toggleLangEn;
    }
  },
  methods: {
    toggle() {
      store.commit("toggle", {
        togRight: "toggle-right",
        togLeft: "toggle-left",
        togFrAct: "fr-active",
        togFrInact: "fr-inactive",
        togEnAct: "en-active",
        togEnInact: "en-inactive"
      });
    }
  }
});
</script>
<style lang="scss" scoped>
.toggle-wrap {
  display: block;
  background: rgb(231, 231, 231);
  width: 60px;
  height: 25px;
  border-radius: 36px;
  box-shadow: 2px 5px 10px -5px RGB(var(--c0)), -2px -5px 10px -5px white,
    -2px -5px 10px white inset;
  div {
    height: 20px;
    width: 55px;
    border-radius: 36px;
    background: white;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 5px RGB(var(--c0)) inset;
    div {
      cursor: pointer;
      position: relative;
      margin-top: 50%;
      transform: translateY(-50%);
      height: 19px;
      width: 19px;
      border-radius: 100%;
      background: var(--gradTopLeft);
      box-shadow: 0 2px 5px -2px black;
    }
    .toggle-left {
      margin-left: -27px;
      animation: toggleToLeft 0.2s ease-in-out;
    }
    .toggle-right {
      margin-left: 8px;
      animation: toggleToRight 0.2s ease-in-out;
    }
  }
}

@keyframes toggleToLeft {
  0% {
    margin-left: 8px;
  }
  100% {
    margin-left: -27px;
  }
}

@keyframes toggleToRight {
  0% {
    margin-left: -27px;
  }
  100% {
    margin-left: 8px;
  }
}

span {
  font-family: var(--logo);
  display: block;
  position: absolute;
  top: 3px;
}
span.fr-active,
span.fr-inactive {
  left: -18px;
}

span.en-active,
span.en-inactive {
  right: -22px;
}

span.fr-active,
span.en-active {
  color: RGB(var(--c0));
}

span.fr-inactive,
span.en-inactive {
  color: RGB(var(--c2));
}
</style>
