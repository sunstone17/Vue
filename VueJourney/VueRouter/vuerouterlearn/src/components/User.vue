<template>
  <div>
    <h2>我是user</h2>
    <p>我是user的内容, 嘿嘿嘿</p>
    <h2>{{userId}}</h2>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      
    }
  },
  computed: {
    userId(){
      return this.$route.params.userId
    }
  },
};
</script>

<style scoped>
</style>