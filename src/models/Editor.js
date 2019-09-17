import { ReactStore } from '../store/react'

class EditorModel
{
    constructor()
    {
    }

    newGoal(data)
    {
        ReactStore.commit('newGoal', data || {
            name: `Untitle Goal`
        })
        this.useLastGoal()
    }

    useLastGoal()
    {
        var id, g = Object.keys(ReactStore.state.goals)
        if (g !== null && g.length !== 0 && (id = g.length - 1) >= 0)
            this.openGoal(g[id], id)
    }

    openGoal(goal, id)
    {
        ReactStore.commit('setActive', goal, id)
    }

    closeGoal(goal, id)
    {
    }

    importGoal(goal, id)
    {
    }

    exportGoal(goal, id)
    {
    }
}

export default new EditorModel
