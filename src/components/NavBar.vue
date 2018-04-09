<template>
  <div id="navbar">
    <div
      v-on:click="changeView('info')"
      v-bind:class="isSelected('info')"
      id="info"
      class="navbar-option">
      <h3>INFO</h3>
    </div>
    <div
      v-on:click="changeView('settings')"
      v-bind:class="isSelected('settings')"
      id="settings"
      class="navbar-option">
      <h3>SETTINGS</h3>
    </div>
    <div
      v-on:click="changeView('practise')"
      v-bind:class="isSelected('practise')"
      id="practise"
      class="navbar-option">
      <h3>PRACTISE</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  computed: {
    view: {
      get() {
        return this.$store.getters.view
      }
    },
  },
  methods: {
    changeView(view) {
      this.$store.dispatch('changeView', view)
    },
    isSelected(view) {
      if (this.$store.getters.view === view) {
        return { 'navbar-option--selected': true }
      } else {
        return { 'navbar-option--selected': false }
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  #navbar {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navbar-option {
    width: 5%;
    flex: 1 1 auto;
    padding: 0 2rem;
    margin: 0%;
    display: block;
    text-align: center;
    color: azure;
    background-color:lightslategrey;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &:hover,
    &--selected {
      background-color: darkslategrey;
    }
  }
</style>
