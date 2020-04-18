export default {
  state:{
    name: 'zhangsan'
  },
  actions:{
    asyncUpdateName(context, payload){
      setTimeout(() => {
        console.log(context)
        console.log(context.rootGetters)
        context.commit('updateName', payload);
      }, 1000);
    }
  },
  mutations:{
    updateName(state, payload){
      state.name = payload
    }
  },
  getters:{
    fullname(state){
      return state.name + '1111';
    },
    fullname2(state,getters){
      return getters.fullname + '2222';
    },
    fullname3(state,getters,rootState){//rootState是根state
      return getters.fullname2 + '2222' + rootState.counter;
    }
  },
}
