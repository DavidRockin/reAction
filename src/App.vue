<template>
  <div id="app">
    <Toolbar />
  </div>
</template>

<script>
  import Toolbar from './components/template/Toolbar'

  export default {
    components: { Toolbar }
  }
</script>

<style>
  html, body {
    padding: 0;
    margin: 0;
    background: #f1f1f1;
  }
  #app {
    font-family: Helvetica, sans-serif;
    text-align: center;
  }
</style>
