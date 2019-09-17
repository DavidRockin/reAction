<template>
    <el-container class='page-content'>
        <el-card class="box-card" style="width: 100%">
            <div slot="header" class="clearfix" style='text-align: left'>
                <span><b>Goal Editor</b></span>
                <p style='float: right; color: #ccc; margin: 0'>
                    testings
                </p>
            </div>
            <div style='text-align: left'>
                <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
                    <el-form-item label="Name">
                        <el-input v-model="formLabelAlign.name"></el-input>
                    </el-form-item>
                    <el-form-item label="Activity zone">
                        <el-input v-model="formLabelAlign.region"></el-input>
                    </el-form-item>
                    <el-form-item label="Activity form">
                        <el-input v-model="formLabelAlign.type"></el-input>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </el-container>
</template>

<style scoped>
    .page-content {
        padding: 2rem 3rem;
    }
</style>

<script>
import { ReactStore } from '../../store/react'
export default {
    data() {
        return {
            labelPosition: 'right',
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            }
        }
    },
    watch: {
        formLabelAlign: {
            handler: function (t, f) {
                console.log(t)
                ReactStore.state.activeGoal = t
            },
            deep: true,
        }
    }
}
</script>
