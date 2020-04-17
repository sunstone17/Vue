<template>
  <div id="app">
    App--------------
    <h2>{{$store.state.counter}}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementBy5">+5</button>
    <button @click="addStudent">+Stu</button>
    <br />App mutations info--------------
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">update info</button>

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
    updateInfo(){
      this.$store.commit("updateInfo");
    }
  }
};
</script>

<style>
</style>
