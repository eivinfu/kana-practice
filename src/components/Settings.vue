<template>
  <div id="settings-container">
    <h3>Syllabary</h3>
    <input
      type="checkbox"
      name="hiragana"
      value="syllabary:hiragana"
      v-model="filters"
    > Hiragana
    <input
      type="checkbox"
      name="katakana"
      value="syllabary:katakana"
      v-model="filters"
    > Katakana
    <h3>Family</h3>
    <input
      type="checkbox"
      name="monographs"
      value="family:monographs"
      v-model="filters"
    > Monographs
    <input
      type="checkbox"
      name="digraphs"
      value="family:digraphs"
      v-model="filters"
    > Digraphs
    <br>
    <input
      type="checkbox"
      name="diacritics"
      value="family:diacritics"
      v-model="filters"
    > Diacritics
    <input
      type="checkbox"
      name="digraphs&diacritics"
      value="family:digraphs&diacritics"
      v-model="filters"
    > Digraphs with diacritics
    <h3>Group</h3>
    <input
      type="checkbox"
      name="Ø"
      value="group:Ø"
      v-model="filters"
    > Ø (Vowels)
    <input
      type="checkbox"
      name="*"
      value="group:*"
      v-model="filters"
    > * (n)
    <input
      type="checkbox"
      name="K"
      value="group:K"
      v-model="filters"
    > K
    <br>
    <input
      type="checkbox"
      name="S"
      value="group:S"
      v-model="filters"
    > S
    <input
      type="checkbox"
      name="T"
      value="group:T"
      v-model="filters"
    > T
    <input
      type="checkbox"
      name="N"
      value="group:N"
      v-model="filters"
    > N
    <input
      type="checkbox"
      name="H"
      value="group:H"
      v-model="filters"
    > H
    <br>
    <input
      type="checkbox"
      name="M"
      value="group:M"
      v-model="filters"
    > M
    <input
      type="checkbox"
      name="Y"
      value="group:Y"
      v-model="filters"
    > Y
    <input
      type="checkbox"
      name="R"
      value="group:R"
      v-model="filters"
    > R
    <input
      type="checkbox"
      name="W"
      value="group:W"
      v-model="filters"
    > W <br>
    <input
      type="checkbox"
      name="special"
      value="group:special"
      v-model="filters"
    > Special Katakana
    <h3>Font</h3>
    <div class="font-preview" style="font-family:MS Gothic">
      <input
        type="checkbox"
        name="font-gothic"
        value="MS Gothic"
        v-model="fonts"
      > {{ previewKana }}
    </div>
    <div class="font-preview" style="font-family:Sazanami Mincho">
      <input
        type="checkbox"
        name="font-sazanami-mincho"
        value="Sazanami Mincho"
        v-model="fonts"
      > {{ previewKana }}
    </div>
    <div class="font-preview" style="font-family:Aoyagi Kouzan">
      <input
        type="checkbox"
        name="font-aoyagi-kouzan"
        value="Aoyagi Kouzan"
        v-model="fonts"
      > {{ previewKana }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'settings',
  computed: {
    filters: {
      get() {
        return this.$store.getters.filters
      },
      set(filters) {
        this.$store.dispatch('updateFilters', filters)
        const practiseKanas = this.$store.getters.filteredKanas.sort(() => Math.random() - 0.5)
        this.$store.dispatch('updatePractiseKanas', practiseKanas)
      }
    },
    fonts: {
      get() {
        return this.$store.getters.fonts
      },
      set(fonts) {
        this.$store.dispatch('updateFonts', fonts)
      }
    },
    previewKana() {
      return 'あいうえお'
    },
  }
}
</script>

<style lang="scss" scoped>
  input[type="checkbox"] {
    margin: 0%;
    padding: 0%;
    margin-left: 1%;
  }
  #settings-container {
    margin: 0%;
    padding: 0%;
    text-align: center;
  }
  .font-preview {
    font-size: 3rem;
  }
  #font-sushitar {
    font-family: Sushitar;
  }
</style>
