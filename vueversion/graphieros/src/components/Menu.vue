<template>
  <div className="menu-body">
    <!--<router-link to="/"><div class="menu-link">Home</div></router-link>-->

    <router-link to="/editor">
      <div v-if="selectedLang === 'toggle-right'" class="menu-link">Editor</div>
      <div v-else class="menu-link">Editeur</div>
    </router-link>

    <router-link to="/key">
      <div
        v-if="selectedLang === 'toggle-right'"
        class="menu-link"
        id="center-link-key"
      >
        the Key
      </div>
      <div v-else class="menu-link" id="center-link-key">la Clé</div>
    </router-link>

    <router-link to="/glyphes">
      <div v-if="selectedLang === 'toggle-right'" class="menu-link">Glyphs</div>
      <div v-else class="menu-link">Glyphes</div>
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import store from "@/store/index.ts";

export default defineComponent({
  name: "Menu",
  computed: {
    selectedLang() {
      return store.getters.toggleClass;
    }
  }
});
</script>

<style lang="scss" scoped>
.menu-body {
  position: relative;
  width: 100%;
  height: 60px;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  .menu-link {
    height: 60px;
    width: 60px;
    background: radial-gradient(at top, white, RGB(var(--c2)));
    border-radius: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--logo);
    color: RGB(var(--c1));
    font-size: 0.8em;
    box-shadow: 0 10px 20px -10px RGB(var(--c1)), 0 -10px 20px -10px white;
    opacity: 0.9;
    transition: opacity 0.25s ease-in-out;
    border-top:1px solid white;
  }
  #center-link-key{
    background: radial-gradient(at top, RGB(var(--c2)), RGB(var(--c1)), RGB(var(--c0)));
    color: RGB(var(--c3));
  }
  div:hover {
    opacity: 1;
    animation: menuWow 1s infinite linear;
  }
  a {
    text-decoration: none;
    color: inherit;
  }


  @keyframes menuWow {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.1, 1.1);
    }
    100% {
      transform: scale(1, 1);
    }
  }
}
</style>
