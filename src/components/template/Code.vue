<template>
    <div class='h-100'>
        <code>
            <span>Your action JSON file will automagically be generated below:</span>
            <pre>{{ previewGoalTarget }}</pre>
        </code>
    </div>
</template>

<script>
    import { ReactStore } from '../../store/react'
    import { mapState } from 'vuex'

    export default {
        store: ReactStore,
        data() {
            return {
                previewGoalTarget: ''
            }
        },
        computed: mapState(['activeGoal', 'goals']),
        methods: {
            updatePreview() {
                this.$nextTick(function() {
                    console.log('fff')
                    this.previewGoalTarget = ReactStore.getters.activeGoal || ''
                })
            }
        },
        watch: {
            'activeGoal': 'updatePreview',
            'goals': 'updatePreview'
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
        word-break: break-word;
        overflow: hidden auto;
    }
    code > pre {
        white-space: pre-wrap;
        line-height: 1.3;
    }
</style>
