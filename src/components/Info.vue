<template>
  <div id="info-container">
    <p>
      Choose what kana you want to practise under settings.
      Then under practise type the corresponding romaji,
      for the displayed kana.
    </p>
    <p>
      This is version 0.0.1, purely a functional demo.
    </p>
    <p>
      If you don't know the answer just keep typing,
      the answer will show if your input is the same length
      but not the same letters as the correct romaji.
    </p>
  </div>
</template>

<script>
export default {
  name: 'info',
}
</script>

<style lang="scss" scoped>
  #info-container {
    text-align: center;
    margin: auto;
  }
</style>
