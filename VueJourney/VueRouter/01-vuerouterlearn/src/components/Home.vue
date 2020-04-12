<template>
  <div>
    <h2>我是home</h2>
    <p>我是home的内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  activated() {
    console.log("home activated");
  },
  deactivated() {
    console.log("home deactivated");
  },
  created() {
    console.log("home created");
  },
  destroyed() {
    console.log("home destroyed");
  },
  beforeRouteEnter (to, from, next) {
    // ...
    console.log('home beforeRouteEnter', to.fullPath)
    next()
  }
};
</script>

<style scoped>
</style>