<template>
  <div id="app">
    <Toolbar />
    <el-row class='ebola'>
      <el-col :span="5">
        <Sidebar />
      </el-col>
      <el-col :span="13">
        <MissingGoal v-if='!hasGoalActive' />
        <Editor v-if='hasGoalActive' />
      </el-col>
      <el-col :span="6">
        <Code />
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { ReactStore } from './store/react'

  import Toolbar from './components/template/Toolbar'
  import Sidebar from './components/template/Sidebar'
  import Editor from './components/template/Editor'
  import Code from './components/template/Code'
  import MissingGoal from './components/template/MissingGoal'

  export default {
    components: { Toolbar, Sidebar, Editor, Code, MissingGoal },
    computed: {
      hasGoalActive: () => ReactStore.state.activeGoal !== null
    }
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
