<template>
    <div class='h-100'>
        <code>
            <span>Your action JSON file will automagically be generated below.</span>
            <pre>{{ previewGoalTarget }}</pre>
        </code>
    </div>
</template>

<script>
    import { ReactStore } from '../../store/react'
    export default {
        computed: {
            previewGoalTarget () {
                const r = ReactStore.state.activeGoal || null
                if (r === null) return ''
                delete r.index
                return r
            }
        }
    }
</script>

<style scoped>
    code > span {
        color: #FFF;
        background: #3f3f3f;
        padding: 16px 20px;
        display: inline-block;
        margin: -16px -20px 15px;
    }
    code {
        background: #303133;
        color: #dedede;
        display: block;
        width: 100%;
        height: 100%;
        text-align: left;
        padding: 16px 20px;
        box-sizing: border-box;
        y-overflow: auto;
        x-overflow: hidden;
    }
    code > pre {
        white-space: pre-wrap;
        line-height: 1.3;
    }
</style>
