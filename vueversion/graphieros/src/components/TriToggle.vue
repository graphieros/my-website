<template>
  <div>
    <div class="tritog-wrap">
      <div v-bind:class="tritog" @click="toggle3" />
      <div class="tritog-bot">
        <div></div>
      </div>
      <div class="tritog-left">
        <div></div>
      </div>
      <div class="tritog-right">
        <div></div>
      </div>
      <span v-bind:class="toggleTop" id="label-top">{{ labelTop }}</span>
      <span v-bind:class="toggleLeft" id="label-left">{{ labelLeft }}</span>
      <span v-bind:class="toggleRight" id="label-right">{{ labelRight }}</span>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from "vue";
import store from "@/store/index.ts";

export default defineComponent({
  name: "TriToggle",
  props: {
    labelTop: String,
    labelLeft: String,
    labelRight: String
  },
  computed: {
    tritog(){
      return store.getters.tritog;
    },
    toggleTop() {
      if (this.tritog === "tritog-toggle-top") {
        return "labels-active";
      } else {
        return "labels-inactive";
      }
    },
    toggleLeft() {
      if (this.tritog === "tritog-toggle-left") {
        return "labels-active";
      } else {
        return "labels-inactive";
      }
    },
    toggleRight() {
      if (this.tritog === "tritog-toggle-right") {
        return "labels-active";
      } else {
        return "labels-inactive";
      }
    }
  },
  methods: {
    toggle3(){
      store.commit("toggle3", {
        tritog: "tritog-toggle-top",
        toggleTop: "tritog-toggle-top",
        toggleLeft: "tritog-toggle-left",
        toggleRight: "tritog-toggle-right"
      })
    }
  }
});
</script>
<style lang="scss" scoped>
.tritog-wrap {
  width: 60px;
  height: 60px;
  position: relative;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
  span.labels-active,
  span.labels-inactive {
    color: RGB(var(--c3));
    font-family: var(--logo);
    font-size: 0.8em;
    display: inline-block;
    position: absolute;
    &#label-top {
      left: 50%;
      transform: translateX(-50%);
      top: -16px;
    }
    &#label-left {
      left: -26px;
      bottom: -12px;
    }
    &#label-right {
      right: -20px;
      bottom: -12px;
    }
  }
  span.labels-active {
    color: RGB(var(--c3));
  }
  span.labels-inactive {
    color: RGB(var(--c2));
  }
  div {
    position: absolute;
    height: 20px;
    width: 60px;
    border-radius: 20px;
    background: RGB(var(--c0));
    div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 16px;
      width: 56px;
      box-shadow: 0 0 4px 1px RGB(var(--c0)) inset;
      background: white;
    }
  }
  .tritog-bot {
    bottom: 0;
    box-shadow: 0 10px 20px 5px RGB(var(--c0));
  }
  .tritog-left {
    bottom: 18px;
    left: -11px;
    transform: rotate(-60deg);
    box-sizing: border-box;
  }
  .tritog-right {
    bottom: 18px;
    right: -11px;
    transform: rotate(60deg);
  }
  .tritog-toggle-top,
  .tritog-toggle-left,
  .tritog-toggle-right {
    height: 16px;
    width: 16px;
    border-radius: 100%;
    position: absolute;
    background: var(--gradTopLeft);
    box-shadow: 0 3px 6px 0px RGB(var(--c0));
    box-sizing: border-box;
    border-left: 1px solid white;
    cursor: pointer;
    z-index: 1;
  }
  .tritog-toggle-top {
    left: 50%;
    top: 6px;
    transform: translateX(-50%);
  }
  .tritog-toggle-right {
    right: 2px;
    bottom: 2px;
  }
  .tritog-toggle-left {
    left: 0px;
    bottom: 2px;
  }
}
</style>
