<template>
  <div id="app">
    <h1 id="kana">{{ kana.kana }}</h1>
    <h2 id="tip" v-if="showTip">{{ tip }}</h2>
    <br v-else>
    <input
      v-bind:value="value"
      v-on:input="updateValue($event.target.value)"
    ><br>
    <span v-if="correct">Correct: {{ correct }}</span>
    <span v-if="wrong">Wrong: {{ wrong }}</span>
    <br v-if="!correct || !wrong">
  </div>
</template>

<script>
import hiragana from './hiragana'

export default {
  name: 'app',
  data () {
    return {
      kana: hiragana[0],
      index: 0,
      tip: hiragana[0].romaji,
      showTip: false,
      correct: 0,
      wrong: 0,
    }
  },
  props: ['value'],
  methods: {
    nextKana: function() {
      this.index === hiragana.length ? this.index = 0 : this.index++
      this.kana = hiragana[this.index]
      this.tip = this.kana.romaji
      this.showTip ? this.wrong++ : this.correct++
      this.showTip = false
    },
    updateValue: function(value) {
      if (value === this.kana.romaji) {
        this.nextKana()
        this.$emit('input', '')
        return
      } else if (value.length === this.kana.romaji.length) {
        this.showTip = true
        return this.$emit('input', value)
      }
      return this.$emit('input', value)
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
  margin-top: 3rem;
  padding-bottom: 2rem;
  border: 1px solid black;
  border-radius: 1rem;
}

#tip {
  line-height: 0;
  font-weight: normal;
}

#kana {
  font-size: 4rem;
  font-weight: 500;
}
</style>
