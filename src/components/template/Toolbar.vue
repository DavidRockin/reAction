<template>
    <el-header style="padding: 0">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item>
                <i class="el-icon-folder"></i> Load Goal
            </el-menu-item>
            <el-menu-item>
                <i class="el-icon-share"></i> Export
            </el-menu-item>
            <el-menu-item>
                <i class="el-icon-plus"></i> Create Goal
            </el-menu-item>
            <el-menu-item style="float:right" @click="newTab('https://github.com/DavidRockin/reAction')">
                <i class="el-icon-monitor"></i> Github
            </el-menu-item>
            <el-menu-item style="float:right" @click="newTab('https://volmit.com')">
                <i class="el-icon-info"></i> VolmitSoftware
            </el-menu-item>
        </el-menu>
    </el-header>
</template>

<script>
  export default {
    name: 'Toolbar',
    methods: {
      newTab(href) {
        window.open(href, '_blank');
      }
    }
  }
</script>
