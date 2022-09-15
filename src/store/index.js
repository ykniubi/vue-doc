import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jumpMenu: []
  },
  mutations: {
    SETJUMPMENU(state, jumpMenu) {
      state.jumpMenu = jumpMenu
    }
  },
  actions: {
    setJumpMenu({ commit }, jumpMenu) {
      commit('SETJUMPMENU', jumpMenu)
    }
  }
})
