export default {
  view: state => state.view,
  kanas: state => state.kanas,
  filters: state => state.filters,
  filterObject: (state, { filters }) => {
    const filterObject = {}
    filters.forEach((filter) => {
      const [key, value] = filter.split(':')
      if (!filterObject[key]) filterObject[key] = []
      filterObject[key].push(value)
    })
    return filterObject
  },
  filteredKanas: (state, { kanas, filterObject }) =>
    kanas.filter((kana) => {
      let include = true
      Object.keys(filterObject).forEach((key) => {
        if (!filterObject[key].includes(kana[key])) {
          include = false
        }
      })
      return include
    }),
  practiseKanas: state => state.practiseKanas,
  fonts: state => state.fonts,
  font: state => state.font,
  guess: state => state.guess,
  showAnswer: state => state.showAnswer,
  correct: state => state.correct,
  wrong: state => state.wrong,
}
