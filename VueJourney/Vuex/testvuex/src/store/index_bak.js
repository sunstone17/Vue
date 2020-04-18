import Vue from "vue";
import Vuex from "vuex";
import { INCREMENT } from "./mutation-types";//命名导入
import moduleA from './modules/moduleA'
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
  mutations: {
    [INCREMENT](state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementBy(state, payload) {
      state.counter += payload.count;
    },
    addStudent(state, payload) {
      state.students.push(payload);
    },
    updateInfo(state) {
      Vue.set(state.info, "id", 1000); //响应式
      Vue.delete(state.info, "age"); //响应式
      state.info["bigbang"] = "bangbangbang"; //不是响应式
    }
  },
  actions: {
    // asyncUpdateInfo(context, payload){//上下文, 异步操作需要在action中执行
    //   setTimeout(() => {
    //     console.log(payload)
    //     context.commit('updateInfo');
    //   }, 1000);
    // }
     asyncUpdateInfo(context, payload){//上下文, 异步操作需要在action中执行
      return new Promise((resolve, reject)=>{
        setTimeout(() => {
          console.log(payload)
          context.commit('updateInfo');
          resolve(payload + ' promise output')
        }, 1000);        
      })
    }
  },
  getters: {
    more60Stus(state) {
      //第一个参数默认为state
      return state.students.filter(x => x.age > 60);
    },
    more60StusLength(state, getters) {
      ////第二个参数默认为getters
      return getters.more60Stus.length;
    },
    moreAgeStus(state, getters) {
      //这里只能传入2个参数
      //返回一个函数，外部当作一个函数调用
      return age => {
        return state.students.filter(x => x.age > age);
      };
    }
  },
  modules: {
    a: moduleA,
  }
});
export default store;
