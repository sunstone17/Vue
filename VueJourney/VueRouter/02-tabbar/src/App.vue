<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
//封装的完全独立的组件
import MainTabBar from "./components/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>

<style>
/* 引入css文件，需要用@import */
@import "./assets/css/base.css";
</style>
