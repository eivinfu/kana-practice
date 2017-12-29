export default {
  updateFilters({ commit }, filters) {
    commit('updateCheckedFilters', filters)
    commit('updateFilters', filters)
  },
}
