import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// const splitter = {
//     namespaced: true,

//     state: {
//         currentPage: 'home',
//         openSide: false
//     },

//     getters: {
//         currentPage: state => state.currentPage
//     },

//     mutations: {
//         RESET_PAGE (state, page) {
//             state.currentPage = page;
//         },
//         toggleMenu(state){
//             state.openSide = !state.openSide;
//         }
//     },

//     actions: {
//         resetPage ({ commit, state }, page) {
//             commit('RESET_PAGE', page);
//         }
//     }
// }

import homePage from './pages/Home.vue';

const splitter = {
    strict: true,
    namespaced: true,
    state: {
        open: false
    },
    mutations: {
        toggle(state, shouldOpen) {
            if (typeof shouldOpen === 'boolean') {
                state.open = shouldOpen;
            } else {
                state.open = !state.open;
            }
        }
    }
}

const navigator = {
    strict: true,
    namespaced: true,
    state: {
        stack: [],
        options: {}
    },
    mutations: {
        push(state, page) {
            state.stack.push(page);
        },
        pop(state) {
            if (state.stack.length > 1) {
                state.stack.pop();
            }
        },
        replace(state, page) {
            state.stack.pop();
            state.stack.push(page);
        },
        reset(state, page) {
            state.stack = [page || state.stack[0]];
        },
        options(state, newOptions = {}) {
            state.options = newOptions;
        }
    }
}

export default new Vuex.Store({
    strict: debug,

    modules: {
        splitter,
        navigator
    }
})
