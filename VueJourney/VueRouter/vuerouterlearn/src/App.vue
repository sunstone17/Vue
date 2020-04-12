<template>
  <div id="app">
    <h2>哈哈哈</h2>
    <!--tag replace active-->
    <!-- <router-link to="/home" tag="button" replace active-class='active'>首页</router-link>
    <router-link to="/about" tag="button" replace active-class='active'>关于</router-link>-->
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="'/user/'+userId" tag="button">用户</router-link>
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "zhangsan"
    };
  },
  methods: {
    homeClick() {
      //push => pushState
      // this.$router.push('/home')
      //replace => replaceState
      this.$router.replace("/home");
    },
    aboutClick() {
      // this.$router.push('/about')
      //replace => replaceState
      this.$router.replace("/about");
    }
  }
};
</script>

<style>
/* .router-link-active { 
    color: #f00
  } */
.active {
  color: #f00;
}
</style>
