<template>
  <div className="menu-body">
    <router-link to="/">Home</router-link> |
    <router-link to="/glyphes">Glyphes</router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Menu"
});
</script>

<style lang="scss" scoped>
.menu-body {
    position: absolute;
}
</style>
