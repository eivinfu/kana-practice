<template>
  <div id="navbar">
    <div id="info" class="navbar-option">
      <h3>Info</h3>
    </div>
    <div id="settings" class="navbar-option">
      <h3>Settings</h3>
    </div>
    <div id="practise" class="navbar-option">
      <h3>Practise</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
}
</script>

<style lang="scss" scoped>
  #navbar {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navbar-option {
    flex: 0 1 auto;
    padding: 0 2rem;
    margin: 0%;
    border: 1px solid black;
    display: block;
    background-color:lightslategrey;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
  }
</style>
