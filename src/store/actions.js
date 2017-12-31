export default {
  updateFilters({ commit }, filters) {
    commit('updateFilters', filters)
  },
  updateFonts({ commit }, fonts) {
    commit('updateFonts', fonts)
  },
  changeView({ commit }, view) {
    commit('changeView', view)
  },
}
