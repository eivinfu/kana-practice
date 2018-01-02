<template>
  <div id="practise">
    <div id="kana" v-bind:style="{ fontFamily: font }">
      {{ practiseKanas[0].kana }}
    </div>
    <div v-show="showAnswer">
      {{ practiseKanas[0].romaji }}
    </div>
    <br v-show="!showAnswer">
    <input type="text" v-model="guess">
    <div id="stats">
      <p>Correct: {{ correct }}</p>
      <p>Wrong: {{ wrong }}</p>
      <p>Total: {{ total }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'practise',
  computed: {
    practiseKanas() {
      return this.$store.getters.practiseKanas
    },
    font() {
      return this.$store.getters.font
    },
    guess: {
      get() {
        return this.$store.getters.guess
      },
      set(guess) {
        const kana = this.practiseKanas[0]
        if(guess.length === kana.romaji.length) {
          if(guess === kana.romaji) {
            this.$store.dispatch('updateGuess', '')
            this.$store.dispatch('nextKana', !this.showAnswer)
            return
          } else {
            this.$store.dispatch('showAnswer')
          }
        }
        this.$store.dispatch('updateGuess', guess)
      }
    },
    showAnswer() {
      return this.$store.getters.showAnswer
    },
    correct() {
      return this.$store.getters.correct
    },
    wrong() {
      return this.$store.getters.wrong
    },
    total() {
      return this.correct + this.wrong
    }
  }
}
</script>

<style lang="scss" scoped>
  #kana {
    font-size: 5rem;
    margin: 4%;
  }
  input {
    margin: 2%;
    text-align: center;
    font-size: 1.1rem;
  }
</style>
