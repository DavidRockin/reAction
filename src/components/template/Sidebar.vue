<template>
    <el-aside class='sidebar'>
        <el-menu mode="vertical"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 @select='changeProject'
        >
            <el-menu-item v-for='(p, k) in $store.state.goals' :key='k' :index='k + ""' :data-gid='p._id'>
                <span>{{ p.name || 'Untitled Project' }}</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script>
    import EditorModel from '../../models/Editor'
    import { ReactStore } from '../../store/react'
    export default {
        store: ReactStore,
        name: 'Sidebar.vue',
        methods: {
            changeProject (i, j, k) {
                this.$nextTick(function() {
                    EditorModel.openGoal(k.$el.attributes['data-gid'].value)
                })
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
