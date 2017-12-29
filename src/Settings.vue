<template>
  <div id="settings">
    <h3>Syllabary</h3>
    <input
      type="checkbox"
      name="hiragana"
      value="syllabary:hiragana"
      v-model="checkedFilters"
    > Hiragana
    <input
    type="checkbox"
    name="katakana"
    value="syllabary:katakana"
    v-model="checkedFilters"
    > Katakana
    <h3>Family</h3>
    <input
      type="checkbox"
      name="monographs"
      value="family:monographs"
      v-model="checkedFilters"
    > Monographs
    <input
    type="checkbox"
    name="digraphs"
    value="family:digraphs"
    v-model="checkedFilters"
    > Digraphs
    <br>
    <input
      type="checkbox"
      name="diacritics"
      value="family:diacritics"
      v-model="checkedFilters"
    > Diacritics
    <input
    type="checkbox"
    name="digraphs&diacritics"
    value="family:digraphs&diacritics"
    v-model="checkedFilters"
    > Digraphs with diacritics
    <h3>Group</h3>
    <input
    type="checkbox"
    name="Ø"
    value="group:Ø"
    v-model="checkedFilters"
    > Ø (Vowels)
    <input
    type="checkbox"
    name="*"
    value="group:*"
    v-model="checkedFilters"
    > * (n)
    <br>
    <input
    type="checkbox"
    name="K"
    value="group:K"
    v-model="checkedFilters"
    > K
    <input
    type="checkbox"
    name="S"
    value="group:S"
    v-model="checkedFilters"
    > S
    <input
    type="checkbox"
    name="T"
    value="group:T"
    v-model="checkedFilters"
    > T
    <input
    type="checkbox"
    name="N"
    value="group:N"
    v-model="checkedFilters"
    > N
    <input
    type="checkbox"
    name="H"
    value="group:H"
    v-model="checkedFilters"
    > H
    <input
    type="checkbox"
    name="M"
    value="group:M"
    v-model="checkedFilters"
    > M
    <input
    type="checkbox"
    name="Y"
    value="group:Y"
    v-model="checkedFilters"
    > Y
    <input
    type="checkbox"
    name="R"
    value="group:R"
    v-model="checkedFilters"
    > R
    <input
    type="checkbox"
    name="W"
    value="group:W"
    v-model="checkedFilters"
    > W
  </div>
</template>

<script>
export default {
  name: 'settings',
  computed: {
    checkedFilters: {
      get() {
        return this.$store.getters.checkedFilters
      },
      set(filters) {
        this.$store.dispatch('updateFilters', filters)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
