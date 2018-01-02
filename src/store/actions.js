export default {
  updateFilters({ commit }, filters) {
    commit('updateFilters', filters)
  },
  updateFonts({ commit }, fonts) {
    commit('updateFonts', fonts)
  },
  changeView({ commit }, view) {
    commit('changeView', view)
    commit('resetStats')
  },
  updateGuess({ commit }, guess) {
    commit('updateGuess', guess)
  },
  nextKana({ commit, state }, answerIsCorrect) {
    const kanas = state.practiseKanas
    const kana = kanas.shift()
    if (answerIsCorrect) {
      commit('incrementCorrect')
      kanas.push(kana)
    } else {
      commit('incrementWrong')
      const min = 2
      const max = Math.ceil(kanas.length / 2) + min
      const index = Math.floor(Math.random() * (max - min)) + min
      kanas.splice(index, 0, kana)
    }
    commit('changeFont')
    commit('updateShowAnswer', false)
    commit('updatePractiseKanas', kanas)
  },
  updatePractiseKanas({ commit }, kanas) {
    commit('updatePractiseKanas', kanas)
  },
  showAnswer({ commit }) {
    commit('updateShowAnswer', true)
  },
}
