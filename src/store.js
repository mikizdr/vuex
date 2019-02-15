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
        },
        registrations(state) {
            return state.registrations;
        },
        totalRegistrations(state) {
            return state.registrations.length;
        }
    },
    // In mutations async code can't be run (that's why we use actions property)
    mutations: {
        register(state, userId) {
            const date = new Date();
            const user = state.users.find(user => {
                return user.id == userId
            });
            user.registered = true;
            const registration = {
                userId: userId,
                name: user.name,
                date: date.getMonth() + 1 + "/" + date.getDate()
            }
            state.registrations.push(registration);
        },
        unregister(state, payload) {
            const user = state.users.find(user => {
                return user.id == payload.userId
            });
            user.registered = false;
            const registration = state.registrations.find(registration => registration.userId == payload.userId);
            state.registrations.splice(state.registrations.indexOf(registration), 1);
        }
    },
    // In actions we can run async code
    actions: {
        register(context, userId) {
            // This will late registratio for 1 msec
            setTimeout(() => {
                context.commit('register', userId)
            }, 1);
        },
        // 1st way
        // unregister(context, payload) {
        //     context.commit('unregister', payload);
        // }
        // 2nd way
        unregister({ commit }, payload) {
            commit('unregister', payload)
        }
    }
});