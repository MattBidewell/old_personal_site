<template>
  <div id="app">
    <Nav/>
    <Welcome/>
  </div>
</template>

<script>
import Welcome from './components/Welcome';
import Nav from "./components/Nav";

export default {
  name: 'App',
  components: {
    Nav,
    Welcome
  }
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');

  body {
    width: 100%;
    height: 100%;
    background: #1b1b1b;
    color: white;
    text-align:left;
    font-family: 'Roboto Mono', monospace;
    overflow-x: hidden;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    /* margin-top: 60px; */
  }

  .wrapper {
    padding-top:2%;
    margin-left:20%;
    margin-right:20%;
  }
</style>
