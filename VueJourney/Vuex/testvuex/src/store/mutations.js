import { INCREMENT } from "./mutation-types";//命名导入

export default {
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
}