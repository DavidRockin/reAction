import { ReactStore } from '../store/react'
import download from 'in-browser-download'

/**
 * Editor Model
 *
 * Responsible for general project and goal management
 * in the editor.
 */
class EditorModel
{
    constructor()
    {
    }

    /**
     * Creates a new React Goal
     * @param data general informaion about the goal
     */
    newGoal(data, open)
    {
        data = {
            _id: Math.random().toString(26),
            name: 'Untitled Goal',
            description: 'This goal will do something magical!',
            author: 'VolmitSoftware Studio',
            enabled: true,
            conditions: null,
            reactions: null,
            'action-health-max': '',
            'action-health-regen': '',
            'action-health-damage': '',
            ...data,
        }
        ReactStore.commit('addGoal', data)

        if (open) {
            this.openGoal(data._id)
        }

        return data
    }

    /**
     * Switches to a specific goal in our state
     * @param goal the goal to use, if null we'll use the index
     * @param id the goal's index ID
     */
    openGoal(id)
    {
        console.log(id)
        ReactStore.commit('setActive', id)
    }

    /**
     * Removes the goal from the editor
     * @param goal
     * @param id
     */
    closeGoal(goal, id)
    {
        delete ReacStore.state.goals[id]
    }

    /**
     * Imports a user's goal from fileupload
     * @param goal
     */
    importGoal(goal)
    {
        ReactStore.commit('newGoal', goal)
    }

    /**
     * Exports goals to a file for the user
     * @param goal
     */
    exportGoal(goal)
    {
        const json = goal || ReactStore.getters.activeGoal
        if (null === json) return
        delete json._id
        var name = (goal.name || 'untitled goal').trim().toLowerCase().replace(' ', '-').replace(/([^A-Za-z0-9-_.]+)/, "")
        download(JSON.stringify(json), name + '.json')
    }
}

export default new EditorModel
