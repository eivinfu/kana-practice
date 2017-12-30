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
    view: 'settings',
    kanas: hiragana.concat(katakana),
    filters: [],
    fonts: ['MS Gothic'],
  },
  getters,
  mutations,
  actions,
})

export default store
