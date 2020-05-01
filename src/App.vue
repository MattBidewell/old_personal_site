<template>
  <div id="app" v-bind:class="theme">
    <div>
      <ul class="theme-switch flex-child">
          <i class="fas fa-sun" v-on:click="switchTheme" v-bind:class="darkMode ? '': 'hidden'"></i>
          <i class="fas fa-moon" v-on:click="switchTheme" v-bind:class="darkMode ? 'hidden': ''"></i>
      </ul>
      <Social class="flex-child"/>
    </div>
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
      darkMode: true
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
        this.darkMode=false;
      } else {
        this.theme.dark=true;
        this.theme.light=false;
        this.darkMode=true;
      }
    }
  }
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');

  :root {
    --font-color: #d6d6d6;
    --font-color-dark:#16191b;
    
    --font-link: #6f6f6f;
    --font-link-dark: #b9b9b9;

    --font-link-hover: #a2a2a2;
    --font-link-hover-dark:#16191b;

    --background-color: #16191b;
    --background-color-light: #e7e7e7;
  }

  .dark {
    --bg: var(--background-color);
    --font: var(--font-color);
    --link: var(--font-link);
    --link-hover: var(--font-link-hover);
  }

  .light {
    --bg: var(--background-color-light);
    --font: var(--font-color-dark);
    --link: var(--font-link-dark);
    --link-hover: var(--font-link-hover-dark);
    /* --font-link: var(); */
  }

  html,body {
    height: 100%;
    margin:0;
  }

  body {
    text-align:left;
    font-family: 'Roboto Mono', monospace;
    letter-spacing: 1px;
  }

  #app {
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--font);
    min-width: 100%;
    min-height: 100%;
    background: var(--bg);
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
      display: flex;
      float: left;
      cursor: pointer;
  }

  .flex-child {
    flex:1;
  }

  .theme-switch i {
      font-size: 20px;
  }
  .theme-switch .fa-moon {
    color:#777;
  }

  .hidden {
    display:none;
  }

  @media only screen and (min-width: 600px) {
    .welcome {
      margin-left:5rem;
    }
  }

</style>
