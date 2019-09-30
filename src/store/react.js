import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const ReactStore = new Vuex.Store({
    state: {
        goals: [],
        activeGoal: null,
        conditions: {
            'entity_time_lock': {
                'label': 'Entity TLCK',
                'info': 'Samples Entity Tick Time Lock'
            },
            'tile_time_lock': {
                'label': 'Tile TLCK',
                'info': 'Samples Tile Tick Time Lock'
            },
            'entity_time': {
                'label': 'Ent TIME',
                'info': 'Samples Entity Tick Time'
            },
            'react_time': {
                'label': 'R Time',
                'info': 'Samples react total tick time'
            },
            'react_task_time': {
                'label': 'RTT',
                'info': 'Samples react task queue'
            },
            'tile_time': {
                'label': 'Tile Tick',
                'info': 'Samples Tile Tick Time'
            },
            'entity_droptick': {
                'label': 'Ent Droptick',
                'info': 'Samples Dropped Entity Ticks'
            },
            'tile_droptick': {
                'label': 'Tile Droptick',
                'info': 'Samples Dropped Tile Ticks'
            },
            'redstone_tick_usage': {
                'label': 'Red TIU',
                'info': 'Samples Redstone Tick Time Utilization'
            },
            'redstone_tick': {
                'label': 'RS/t',
                'info': 'Samples redstone updates per tick'
            },
            'redstone_second': {
                'label': 'RS/s',
                'info': 'Samples redstone updates per second'
            },
            'redstone_time': {
                'label': 'RS Time',
                'info': 'Samples Redstone Tick Time'
            },
            'physics_time': {
                'label': 'Phy Tick',
                'info': 'Samples Physics Tick Time'
            },
            'hopper_tick_usage': {
                'label': 'Hopper TIU',
                'info': 'Samples Hopper Tick Time Utilization'
            },
            'hopper_tick': {
                'label': 'Hopper Per Tick',
                'info': 'Samples hopper updates per tick'
            },
            'hopper_second': {
                'label': 'Hoppers Per Second',
                'info': 'Samples hopper updates per second'
            },
            'hopper_time': {
                'label': 'Hopper Tick',
                'info': 'Samples Hopper Tick Time'
            },
            'fluid_tick_usage': {
                'label': 'Fluid TIU',
                'info': 'Samples Fluid Tick Time Utilization'
            },
            'fluid_tick': {
                'label': 'Fluid/t',
                'info': 'Samples fluid updates per tick'
            },
            'fluid_second': {
                'label': 'Fluid/s',
                'info': 'Samples fluid updates per second'
            },
            'fluid_time': {
                'label': 'Fluid Tick',
                'info': 'Samples Fluid Tick Time'
            },
            'tps': {
                'label': 'TPS',
                'info': 'Samples the tps'
            },
            'tick': {
                'label': 'Tick Time',
                'info': 'Tick time in milliseconds'
            },
            'cpu': {
                'label': 'CPU',
                'info': 'Java Process Usage'
            },
            'playercount': {
                'label': 'PLR',
                'info': 'Player Count'
            },
            'tiu': {
                'label': 'TIU',
                'info': 'Tick usage via percent'
            },
            'mem': {
                'label': 'Used Memory',
                'info': 'Memory currently used'
            },
            'freemem': {
                'label': 'Free Memory',
                'info': 'Memory currently free'
            },
            'memtotals': {
                'label': 'memtotals',
                'info': 'Samples memory totals'
            },
            'maxmem': {
                'label': 'Max Memory',
                'info': 'Maximum Memory'
            },
            'allocmem': {
                'label': 'Alloc Mem',
                'info': 'Allocated Memory'
            },
            'mahs': {
                'label': 'MAH/s',
                'info': 'Memory allocated per second'
            },
            'chk_time': {
                'label': 'Chk Time',
                'info': 'Samples Chunk total load times'
            },
            'explosion_time': {
                'label': 'Explosion MS',
                'info': 'Calculates milliseconds spent on explosions'
            },
            'growth_time': {
                'label': 'Grow MS',
                'info': 'Calculates milliseconds spent on growth tick'
            },
            'chk': {
                'label': 'Chunks',
                'info': 'Total loaded chunks'
            },
            'chks': {
                'label': 'Chunks/s',
                'info': 'Chunks per second'
            },
            'ent': {
                'label': 'Entities',
                'info': 'Total Entities'
            },
            'entliv': {
                'label': 'Living',
                'info': 'Total Living'
            },
            'entdrop': {
                'label': 'Drops',
                'info': 'Total Drops'
            },
            'enttile': {
                'label': 'Tiles',
                'info': 'Total Tiles'
            }
        }
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
