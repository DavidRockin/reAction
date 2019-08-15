<template>
  <div id="app">
    <Toolbar />
    <el-row class='ebola'>
      <el-col :span="4">
        <Sidebar />
      </el-col>
      <el-col :span="14">
        <Editor />
      </el-col>
      <el-col :span="6">
        <Code />
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Toolbar from './components/template/Toolbar'
  import Sidebar from './components/template/Sidebar'
  import Editor from './components/template/Editor'
  import Code from './components/template/Code'

  export default {
    components: { Toolbar, Sidebar, Editor, Code }
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
  .ebola > .el-col, .h-100 {
    height: calc(100vh - 60px);
  }
</style>
