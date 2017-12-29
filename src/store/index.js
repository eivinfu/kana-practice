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
    kanas: hiragana.concat(katakana),
    filters: {},
    checkedFilters: [],
  },
  getters,
  mutations,
  actions,
})

export default store
