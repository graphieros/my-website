<template>
  <router-link to="/">
    <div class="minilogo-body" :style="mainStyle">
      <span :style="spanStyle">Graphieros</span>
      <Fractal
        className="fractal-mini-logo"
        sequence="zw-wd-dz-qs-se-xs"
        :colors="glyphColor"
        :svgSize="glyphSize"
      />
    </div>
  </router-link>
</template>

<script lang="js">
import { defineComponent } from "vue";
import Fractal from '@/components/Fractal.vue';

export default defineComponent({
  name: "MiniLogo",
  props: {
      glyphSize: String,
      height: String,
      fontSize: String,
      textColor: String,
      glyphColor: String
  },
  components: {
      Fractal
  },
  computed: {
      mainStyle(){
          return `height:${Number(this.height)}px; width:${Number(this.height) * 3}px`
      },
      spanStyle(){
          return `font-size:${Number(this.fontSize)}px; color: rgb(${this.textColor})`
      },
      logoStyle(){
          return `height:${Number(this.glyphSize)}px; width:${Number(this.glyphSize)}px`
      }
  }
});

</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: inherit;
}
.minilogo-body {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  grid-template-columns: auto auto;
  font-family: var(--logo);
  padding-left: 20px;
  padding-right: 20px;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
  span {
    display: block;
  }
  .fractal-mini-logo {
    animation: spin 6s linear infinite;
  }
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>