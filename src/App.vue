<template>
  <div id="app">
    <h1>Welcome!</h1>
    <settings></settings>
  </div>

</template>

<script>
import Settings from './Settings.vue'

export default {
  name: 'app',
  components: {
    Settings,
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
  margin-top: 3rem;
  padding-bottom: 2rem;
  border: 1px solid black;
  border-radius: 1rem;
}
</style>
