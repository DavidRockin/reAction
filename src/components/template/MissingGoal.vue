<template>
    <el-container>
        <el-row style='width:100%'>
            <el-col :span='24'>
                <h1 class='title'>No Project Opened</h1>
            </el-col>
            <el-col :span='24'>
                <el-row>
                    <el-col :span='12'>
                        <div class='silly-crap'>
                            <i class='el-icon-folder'></i>
                            <span>Open Goal from File</span>
                        </div>
                    </el-col>
                    <el-col :span='12'>
                        <div class='silly-crap' @click='newGoal()'>
                            <i class='el-icon-plus'></i>
                            <span>Create new Goal</span>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </el-container>
</template>

<script>
    import EditorModel from '../../models/Editor'
    export default {
        methods: {
            newGoal: () => EditorModel.newGoal()
        }
    }
</script>

<style lang='css' scoped>
    h1.title {
        display: block;
        width: 100%;
        color: #999;
        padding: 9vh 0;
    }
    div.silly-crap {
        background: #ddd;
        color: #999;
        border: 1px solid #999;
        border-radius: 10px;
        max-width: 200px;
        margin: 0 auto;
        padding: 2rem 3rem;
    }
    div.silly-crap:hover {
        background: #cdcdcd;
        color: #888;
        border-color: #888;
        border-radius: 13px;
    }
    div.silly-crap i {
        font-size: 32pt;
        display: block;
        padding: 0 0 16px;
    }
    div.silly-crap span {
        font-size: 14pt;
    }
</style>
