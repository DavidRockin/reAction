<template>
    <el-aside class='sidebar'>
        <el-menu mode="vertical"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 default-active="1"
        >
            <el-menu-item index="1">
                <span>Project Name</span>
            </el-menu-item>
            <el-menu-item index="2">
                <span>Project Name</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script>
  export default {
    name: 'Sidebar.vue'
  }
</script>

<style scoped>
    .sidebar, .sidebar > ul {
        height: calc(100vh - 60px);
    }
    .sidebar li.el-menu-item {
        text-align: left;
    }
</style>
