<template>
  <div id="app" v-bind:class="theme">
    <ul class="theme-switch">
        <i class="fas fa-sun" v-on:click="switchTheme" v-bind:class="lightIcon"></i>
        <i class="fas fa-moon" v-on:click="switchTheme" v-bind:class="darkIcon"></i>
    </ul>
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
  data: () => {
    return {
      theme: {
        dark:true,
        light:false
      },
      lightIcon:false,
      darkIcon:true
    }
  },
  components: {
    Social,
    Welcome
  },
  methods: {
    switchTheme: function() {
      if(this.theme.dark){
        this.theme.dark=false;
        this.theme.light=true;
        this.darkIcon=true;
        this.lightIcon=false;
      } else {
        this.theme.dark=true;
        this.theme.light=false;
        this.darkIcon=false;
        this.lightIcon=true;
      }
    }
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

  html,body {
    height: 100%;
    margin:0;
  }

  body {
    text-align:left;
    font-family: 'Roboto Mono', monospace;
    /* background: var(--bg); */
    /* overflow-x: hidden; */
  }

  #app {
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #030303;
    min-width: 100%;
    min-height: 100%;
    background: var(--bg);
  }

  .wrapper {
    padding-top:2%;
    margin-left:20%;
    margin-right:20%;
  }

  .welcome {
    margin-left:10rem;
  }

  .crypto{
    color: #444444;
  }

  .crypto-post {
    color: var(--font);
  }

  .theme-switch {
      padding:1rem;
      display:inline;
  }

  .theme-switch i {
      font-size: 25px;
      color:white;
  }

  .lightIcon, .darkIcon {
    display:none;
  }

</style>
