import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import hiragana from '../assets/hiragana.json'
import katakana from '../assets/katakana.json'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    view: 'info',
    kanas: hiragana.concat(katakana),
    filters: [],
    fonts: ['MS Gothic'],
    font: 'MS Gothic',
    guess: '',
    showAnswer: false,
    practiseKanas: hiragana.concat(katakana).sort(() => Math.random() - 0.5),
    correct: 0,
    wrong: 0,
  },
  getters,
  mutations,
  actions,
})

export default store
