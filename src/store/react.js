import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const ReactStore = new Vuex.Store({
    state: {
        actions: [],
        goals: []
    },
    mutations: {
        newGoal (state, goal) {
            state.goals.push(goal)
        }
    }
})
