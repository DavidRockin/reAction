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
    code {
        background: #303133;
        color: #FFF;
        display: block;
        width: 100%;
        height: 100%;
        text-align: left;
        padding: 16px 20px;
        box-sizing: border-box;
    }
</style>
