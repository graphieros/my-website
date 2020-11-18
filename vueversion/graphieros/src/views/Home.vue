<template>
  <div class="home">
    <Logo />
    <h1>Graphieros</h1>
    <!--<HelloWorld
      :cbFunc="callBackFunc"
      :outFunc="callBackTwo"
      :inputFunc="inputFunction"
      msg="Graphieros boilerplate"
    />
    <p>{{ callBackMsg }}</p>
    <p>{{ inputMessage }}</p>
    <div>
      <span v-if="!inputMessage">please insert your FACE here</span>
      <button v-else>SMILE</button>
    </div>-->
    <Linear
      className="first-line"
      sequence="kli-keo mea-kadwa kio-tew-ma ! / ptae-toi ma nmae-kfa pkae-sme-zai / da mea-lgio-ney kli-glei-ksi-dro"
      colors="75,106,160"
      size="30"
    />
    <Molecule
      sequence="sro kfa du srei ktu foi ksi"
      size="250"
      colors="75,106,160"
      strokeWidth="6"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from "@/components/HelloWorld.vue";
import Logo from "@/components/Logo.vue"; // @ is an alias to /src
import Linear from "@/components/Linear.vue";
import Molecule from "@/components/Molecule.vue";

export default defineComponent({
  name: "Home",
  components: {
    // HelloWorld,
    Logo,
    Linear,
    Molecule
  },
  data() {
    return {
      callBackMsg: "",
      inputMessage: "",
      time: 0
    };
  },
  methods: {
    callBackFunc(message: string) {
      this.callBackMsg = message;
    },
    callBackTwo() {
      this.callBackMsg = "";
    },
    inputFunction(event: string) {
      clearTimeout(this.time);
      this.time = setTimeout(() => {
        this.inputMessage = event;
      }, 250);
    }
  }
});
</script>
<style lang="scss" scoped>
h1 {
  margin-top: 250px;
  font-family: var(--logo);
  color: RGB(var(--c1));
}
h1::after {
  display: block;
  content: "Alec Lloyd Probert";
  font-size: 0.33em;
  margin-top: -8px;
  margin-left: 70px;
  color: RGB(var(--c2));
}
.first-line {
  height: 300px;
}
</style>
