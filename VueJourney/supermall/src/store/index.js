import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutation"
import actions from "./actions"
import getters from "./getters"
//1. 安装
Vue.use(Vuex)

//2. 实例化
const state = {
  cartList:[]
}
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules:{
  }
})

export default store