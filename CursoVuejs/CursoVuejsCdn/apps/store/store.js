"use strict"
const store = new Vuex.Store({
    state: {
        all: []
    },
    mutations: {
        all(state, all) {
            this.state.all = all
        }
    },
    getters: {
        all: state => state.all
    }
})