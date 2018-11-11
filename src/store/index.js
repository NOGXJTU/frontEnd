import Vue from 'vue'
import Vuex from 'vuex'

const debug = process.env.NODE_ENV !== 'production'

// import mutations
import { TOGGLE_LOGIN, TOGGLE_LOGOUT, SET_USERINFO } from './mutation-types'

Vue.use(Vuex)

// global states
const state = {
  // 默认测试数据
  isLogged: true,
  userInfo: { "id": "5b4403c9c9e77c0001b6d012", "meta": {}, "username": "qweasdzxc", "name": "二狗子", "email": "test@126.com", "phone": "12345678909", "description": "", "school": "西安交通大学大学", "avatar": "", "activitesId": [], "superUser": false }
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
