import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = {
  nowNumber: 0
}
export const mutations = {
  increment(state) {
    state.nowNumber++
  },
  decrement(state) {
    if (state.nowNumber <= 0) return
    state.nowNumber--
  },
  reset(state) {
    state.nowNumber = 0
  }
}
export const actions = {
  increment({ commit }) {
    console.log('increment')
    commit('increment')
  },
  decrement({ commit }) {
    console.log('decrement')
    commit('decrement')
  },
  reset({ commit }) {
    console.log('reset')
    commit('reset')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
