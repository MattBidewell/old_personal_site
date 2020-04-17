<template>
  <div id="app">
    <Social/>
    <Welcome/>
    <br>
  </div>
</template>

<script>
import Welcome from './components/Welcome';
import Social from "./components/Social";

export default {
  name: 'App',
  components: {
    Social,
    Welcome
  }
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');

  :root {
    --font-color: #d6d6d6;
    --font-color-dark:#16191b;
    --background-color: #16191b;
    --background-color-light: #e7e7e7;
  }

  .dark {
    --bg: var(--background-color);
    --font: var(--font-color);
  }

  .light {
    --bg: var(--background-color-light);
    --font: var(--font-color-dark);
  }

  body {
    width: 100%;
    height: 100%;
    color: white;
    text-align:left;
    font-family: 'Roboto Mono', monospace;
    overflow-x: hidden;
    background: var(--bg);
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #030303;
    width: 100%;
    height: 100%;
    /* margin-top: 60px; */
  }

  .wrapper {
    padding-top:2%;
    margin-left:20%;
    margin-right:20%;
  }

</style>
