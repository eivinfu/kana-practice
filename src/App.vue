<template>
  <div id="app">
    <h1>Welcome!</h1>
    <settings></settings>
  </div>
</template>

<script>
import Settings from './Settings.vue'
import Practise from './Practise.vue'

export default {
  name: 'app',
  components: {
    Settings,
    Practise,
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
</style>
