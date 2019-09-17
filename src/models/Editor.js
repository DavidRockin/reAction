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
    }

    openGoal(goal, id)
    {
        ReactStore.commit('setActive', goal, i)
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
