<template>
  <div id="app">
    <h2>哈哈哈</h2>
    <!--tag replace active-->
    <!-- <router-link to="/home" tag="button" replace active-class='active'>首页</router-link>
    <router-link to="/about" tag="button" replace active-class='active'>关于</router-link>-->
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="'/user/'+userId" tag="button">用户</router-link>
    <router-link
      :to="{path: '/profile', query:{
      age:19, height: 1.88, name:'sgj'
    }}"
      tag="button"
    >档案</router-link>

    <!-- <button @click="profileClick">用户2</button> -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>-->
    <keep-alive exclude="profile">
      <router-view></router-view>
    </keep-alive>
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
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          age: 19,
          height: 1.88,
          name: "sgj"
        }
      });
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
