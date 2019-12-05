export default {
    namespaced: true,
    state: {
        name: 'lys'
    },
    mutations: {
        CHANGE_NAME (state, data) {
            state.name = data;
        }
    },
    actions: {
        handleName ({commit}, data) {
            commit('CHANGE_NAME', data)
        }
    }
}