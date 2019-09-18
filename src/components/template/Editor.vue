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
                    <el-form-item label="Description">
                        <el-input v-model="formLabelAlign.description"></el-input>
                    </el-form-item>
                    <el-form-item label="Author">
                        <el-input v-model="formLabelAlign.author"></el-input>
                    </el-form-item>
                    <el-form-item label="Conditions">
                        <el-input v-model="formLabelAlign.conditions"></el-input>
                    </el-form-item>
                    <el-form-item label="Reactions">
                        <el-input v-model="formLabelAlign.reactions"></el-input>
                    </el-form-item>
                    <el-form-item label="Interval">
                        <el-input v-model="intervalAmount"></el-input>
                        <el-select v-model="intervalType">
                            <el-option
                                v-for="(v, k) in intervalAmounts"
                                :key="k"
                                :label="v"
                                :value="k"
                            />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Max Health">
                        <el-input v-model="formLabelAlign['action-health-max']"></el-input>
                    </el-form-item>
                    <el-form-item label="Regen Health">
                        <el-input v-model="formLabelAlign['action-health-regen']"></el-input>
                    </el-form-item>
                    <el-form-item label="Damage Health">
                        <el-input v-model="formLabelAlign['action-health-damage']"></el-input>
                    </el-form-item>
                    <el-form-item label="Enabled">
                        <el-switch
                            v-model="formLabelAlign.enabled"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                        </el-switch>
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
// infer from https://github.com/VolmitSoftware/React/blob/master/src/main/java/com/volmit/react/xrai/RAIGoal.java

import { ReactStore } from '../../store/react'
export default {
    data() {
        return {
            labelPosition: 'right',
            intervalAmounts: {
              t: 'Ticks',
              s: 'Seconds',
              m: 'Minutes',
              h: 'Hours',
              d: 'Days'
            },
            intervalAmount: 0,
            intervalType: 's',
            formLabelAlign: {
                name: 'My test goal',
                description: 'This will do some magic',
                author: 'VolmitSoftware Studio',
                enabled: true,
                conditions: null,
                reactions: null,
                'action-health-max': '',
                'action-health-regen': '',
                'action-health-damage': ''
            }
        }
    },
    methods: {
        updateGoal (t) {
            t = typeof t === 'object' ? t : this.formLabelAlign
            t.interval = this.interval
            ReactStore.state.activeGoal = t || this.formLabelAlign
        }
    },
    computed: {
        interval: function() {
            return this.intervalAmount + this.intervalType
        }
    },
    watch: {
        formLabelAlign: {
            handler: 'updateGoal',
            deep: true,
        },
        intervalAmount: 'updateGoal',
        intervalType: 'updateGoal'
    }
}
</script>
