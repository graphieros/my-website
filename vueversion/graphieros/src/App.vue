<template>
  <!--
  <div class="main-links">
      <router-link to="/glyphes">Glyphes</router-link>

  </div>
  -->
  <div class="main-bg" />
  <router-view />
</template>

<style lang="scss">
body {
  overflow-y: scroll;
}
body,
html {
  margin: 0;
  padding: 0;
}
.main-bg {
  background: var(--gradTop);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
}

:root {
  --c0: 29, 55, 104;
  --c1: 75, 106, 160;
  --c2: 122, 161, 216;
  --c3: 211, 227, 252;
  --gold: 255, 215, 0;
  --crad: 151, 147, 134;
  --gradTop: radial-gradient(
    at top,
    RGB(var(--c0)),
    RGB(var(--c1)),
    RGB(var(--c2)),
    RGB(var(--c3))
  );
  --gradTopLeft: radial-gradient(
    at top left,
    RGB(var(--c0)),
    RGB(var(--c1)),
    RGB(var(--c2)),
    RGB(var(--c3))
  );
  --gradTopLight: radial-gradient(at top, RGB(var(--c2)), RGB(var(--c0)));
  --gradTopLeftDark: radial-gradient(
    at top left,
    RGB(var(--c0)),
    RGB(var(--c1)),
    RGB(var(--c2))
  );
  --inter: "Inter", sans-serif;
  --megrim: "Megrim", cursive;
  --logo: "Righteous", cursive;
  --elite: "Special Elite", cursive;
  --hand0: "Monsieur La Doulaise", cursive;
  --hand1: "Mr Dafoe", cursive;
  --mono0: "Anonymous Pro", monospace;
  --mono1: "Nova Mono", monospace;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-links {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 48px;
  width: 100%;
}

body::-webkit-scrollbar {
  width: 1em;
}
body::-webkit-scrollbar-thumb {
  background: var(--gradTop);
  border-radius: 1em;
  box-shadow: 0 5px 10px -5px RGB(var(--c0));
}
</style>
