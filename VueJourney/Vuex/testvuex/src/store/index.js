import Vue from "vue";
import Vuex from "vuex";
import moduleA from './modules/moduleA'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      { id: 10, name: "hhe", age: 199 },
      { id: 11, name: "haha", age: 10 },
      { id: 22, name: "babe", age: 88 },
      { id: 33, name: "niuniu", age: 77 },
      { id: 55, name: "huahua", age: 66 }
    ],
    info: {
      age: 100,
      name: "kobe",
      height: 1.88
    }
  },
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA,
  }
});
export default store;
