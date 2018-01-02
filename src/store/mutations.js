export default {
  updateFilters(state, filters) {
    state.filters = filters
  },
  updateFonts(state, fonts) {
    state.fonts = fonts
  },
  changeView(state, view) {
    state.view = view
  },
  updateGuess(state, guess) {
    state.guess = guess
  },
  updateShowAnswer(state, showAnswer) {
    state.showAnswer = showAnswer
  },
  updatePractiseKanas(state, practiseKanas) {
    state.practiseKanas = practiseKanas
  },
  incrementCorrect(state) {
    state.correct += 1
  },
  incrementWrong(state) {
    state.wrong += 1
  },
  resetStats(state) {
    state.correct = 0
    state.wrong = 0
  },
  changeFont(state) {
    state.font = state.fonts[Math.floor(Math.random() * (state.fonts.length))]
  },
}
