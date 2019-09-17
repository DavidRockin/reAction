<template>
    <el-aside class='sidebar'>
        <el-menu mode="vertical"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 @select='changeProject'
        >
            <el-menu-item v-for='(p, k) in projects' :key='k' :index='k + ""'>
                <span>{{ k }} :: {{ p.name || 'Untitled Project' }}</span> {{ defaultProject.index || 'n/a' }}
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script>
    import { ReactStore } from '../../store/react'
    export default {
        name: 'Sidebar.vue',
        data() {
            return {
                defaultProject: 0
            }
        },
        computed: {
            projects: () => ReactStore.state.goals
        },
        methods: {
            changeProject (i) {
                ReactStore.commit('setActive', this.projects[i], i)
                this.projects[i].index = i
                this.defaultProject = this.projects[i] || null
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        width: 100% !important;
    }
    .sidebar, .sidebar > ul {
        height: 100%;
    }
    .sidebar li.el-menu-item {
        text-align: left;
    }
</style>
