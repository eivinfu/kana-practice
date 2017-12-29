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
  },
  getters,
  mutations,
  actions,
})

export default store

// FILTERING EXAMPLE
const kanas = hiragana.concat(katakana)
const filters = { family: ['monographs'], syllabary: ['hiragana'], group: ['*', 'Ø', 'K', 'S'] }

/* eslint-disable */
const x = kanas
  .filter((kana) => {
    let include = true
    Object.keys(filters).forEach((key) => {
      if (!filters[key].includes(kana[key])) {
        include = false
      }
    })
    return include
  })

x.forEach(e => console.log(e.kana, e.romaji))
