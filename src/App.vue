<template>
  <div id="app">
    <nav-bar></nav-bar>
    <info v-if="view === 'info'"></info>
    <settings v-else-if="view === 'settings'"></settings>
    <practise v-else-if="view === 'practise'"></practise>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import Info from './Info.vue'
import Settings from './Settings.vue'
import Practise from './Practise.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    Info,
    Settings,
    Practise,
  },
  computed: {
    view: {
      get() {
        return this.$store.getters.view
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
  font-family: 'Aoyagi Kouzan';
  src: url('./fonts/Aoyagi Kouzan.otf');
}

@font-face {
  font-family: 'Sazanami Mincho';
  src: url('./fonts/Sazanami Mincho.ttf');
}
</style>
