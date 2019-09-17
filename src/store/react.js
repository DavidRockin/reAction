import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const ReactStore = new Vuex.Store({
    state: {
        actions: [],
        goals: [],
        activeGoal: null
    },
    mutations: {
        setActive (state, goal, index) {
            state.activeGoal = goal || state.goals[index]
        },
        newGoal (state, goal) {
            state.goals.push(goal)
        }
    }
})
