import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    // The key thing every store has to have is store property
    state: {
        registrations: [],
        users: [
            { id: 1, name: 'Max', registered: false },
            { id: 2, name: 'Anna', registered: false },
            { id: 3, name: 'Chris', registered: false },
            { id: 4, name: 'Sven', registered: false }
        ]
    },
    getters: {
        unregisteredUsers(state) {
            return state.users.filter(user => {
                return !user.registered;
            })
        }
    }
});