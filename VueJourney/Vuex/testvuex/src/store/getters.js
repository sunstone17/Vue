export default {
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
}