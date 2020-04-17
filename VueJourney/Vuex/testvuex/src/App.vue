<template>
  <div id="app">
    App state module--------------
    <h2>{{$store.state.a.name}}</h2> <!--调用方式特殊-->
    <button @click="updateName">update module  name</button>
    <h2>{{$store.getters.fullname}}</h2><!--调用方式相同-->
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>

    App state--------------
    <h2>{{$store.state.counter}}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementBy5">+5</button>
    <button @click="addStudent">+Stu</button>
    <br />App mutations info是否是响应式的--------------
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">update info</button>
    <button @click="asyncUpdateInfo">asyncUpdateInfo</button>

    <br />app getter----------------
    <h2>{{$store.getters.more60Stus}}</h2>
    <h2>{{$store.getters.more60StusLength}}</h2>
    <h2>{{$store.getters.moreAgeStus(100)}}</h2>HelloWorld-------
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import store from "./store";
import { INCREMENT } from "./store/mutation-types";

export default {
  name: "App",
  store,
  components: {
    HelloWorld
  },
  methods: {
    increment() {
      this.$store.commit(INCREMENT);
    },
    decrement() {
      this.$store.commit("decrement");
    },
    incrementBy5() {
      this.$store.commit("incrementBy", { count: 5 });
    },
    addStudent() {
      const stu = { id: 1000, name: "添加一个", age: 100 };
      this.$store.commit("addStudent", stu);
    },
    updateInfo() {
      this.$store.commit("updateInfo");
    },
    asyncUpdateInfo() {
      this.$store.dispatch("asyncUpdateInfo", "我是payload")
      .then(data => {
        console.log('里面完成了提交')
        console.log(data);
      });
    },
    updateName(){
      this.$store.commit("updateName", 'lisi')//一样的调用方式
    }
  }
};
</script>

<style>
</style>
