export default {
  updateCheckedFilters(state, filters) {
    state.checkedFilters = filters
  },
  updateFilters(state, filters) {
    const newFilters = {}
    filters.forEach((filter) => {
      const [key, value] = filter.split(':')
      if (!newFilters[key]) newFilters[key] = []
      newFilters[key].push(value)
    })
    state.filters = newFilters
  },
}
