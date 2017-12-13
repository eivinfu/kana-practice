<template>
  <div id="app">
    <h1>{{ kana.kana }}</h1>
    <input
      ref="input"
      v-bind:value="value"
      v-on:input="updateValue($event.target.value)">
    <h2>{{ value }}</h2>
  </div>
</template>

<script>
import hiragana from './hiragana'

export default {
  name: 'app',
  data () {
    return {
      kana: hiragana[0],
      index: 1,
    }
  },
  props: ['value'],
  methods: {
    nextKana: function() {
      this.kana = hiragana[this.index++]
    },
    updateValue: function(value) {
      if (value === this.kana.romaji) {
        this.nextKana()
        this.$emit('input', '')
      }
      this.$emit('input', value)
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
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
