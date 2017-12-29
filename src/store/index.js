import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import hiragana from '../assets/hiragana.json'
// import katakana from '../assets/katakana.json'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    kana: hiragana[0],
    index: 0,
    tip: hiragana[0].romaji,
    showTip: false,
    correct: 0,
    wrong: 0,
  },
  getters,
  mutations,
  actions,
})

export default store
