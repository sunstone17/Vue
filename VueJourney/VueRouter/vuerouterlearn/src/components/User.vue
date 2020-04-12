<template>
  <div>
    <h2>我是user</h2>
    <p>我是user的内容, 嘿嘿嘿</p>
    <h2>{{userId}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {};
  },
  methods: {
    btnClick() {
      console.log("route", this.$route);
      console.log("$router", this.$router);
      this.$test()
    }
  },
  computed: {
    userId() {
      return this.$route.params.userId;
    }
  }
};
</script>

<style scoped>
</style>