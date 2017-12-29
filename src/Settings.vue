<template>
  <div id="settings">
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
    <br>
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
        this.$store.commit('updateFilters', filters)
      }
    }
  }
}
</script>

<style>

</style>
