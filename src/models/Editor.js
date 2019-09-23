import { ReactStore } from '../store/react'

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
    newGoal(data)
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
        //this.openGoal(data._id)
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
    }
}

export default new EditorModel
