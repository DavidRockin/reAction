import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const ReactStore = new Vuex.Store({
    state: {
        goals: [],
        activeGoal: null
    },
    getters: {
        activeGoal: s => s.goals.find(g => g._id === s.activeGoal ? g : null) || null
    },
    mutations: {
        setActive (state, id) {
            console.log(id)
            state.activeGoal = id
        },
        addGoal (state, goal) {
            goal.name += goal._id
            state.goals.push(goal)
        },
        updateActive (state, data) {
            for (var k in state.goals) {
                const g = state.goals[k]
                if (g._id === state.activeGoal)
                    state.goals[k] = { ...g, ...data }
            }
        }
    }
})
