import Vue from 'vue'
import Vuex from 'vuex'

const debug = process.env.NODE_ENV !== 'production'

// import mutations
import { TOGGLE_LOGIN, TOGGLE_LOGOUT, SET_USERINFO } from './mutation-types'

Vue.use(Vuex)

// global states
const state = {
  // 默认测试数据
  isLogged: false,
  userInfo: {}
}

export default new Vuex.Store({
  state,
  mutations: {
    [TOGGLE_LOGIN](state) {
      state.isLogged = true
    },
    [TOGGLE_LOGOUT](state) {
      state.isLogged = false
    },
    [SET_USERINFO](state, info) {
      state.userInfo = info
    }
  }
})
