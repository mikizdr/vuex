export default {
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