export default {
  kanas: state => state.kanas,
  filters: state => state.filters,
  checkedFilters: state => state.checkedFilters,
  filteredKanas: (state, { kanas, filters }) =>
    kanas.filter((kana) => {
      let include = true
      Object.keys(filters).forEach((key) => {
        if (!filters[key].includes(kana[key])) {
          include = false
        }
      })
      return include
    }),
}
