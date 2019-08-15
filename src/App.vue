<template>
  <div id="app">
    <Toolbar />
    <Sidebar />
  </div>
</template>

<script>
  import Toolbar from './components/template/Toolbar'
  import Sidebar from './components/template/Sidebar'

  export default {
    components: { Toolbar, Sidebar }
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
