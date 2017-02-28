import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        topics: []
    },

    getters: {

    },

    mutations: {
        SET_TOPICS(state, topics) {
            state.topics = topics;
        }
    }
});