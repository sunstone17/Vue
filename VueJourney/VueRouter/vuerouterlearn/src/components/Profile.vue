<template>
  <div>
    <h2>我是profile</h2>
    <p>我是profile的内容, 嘿嘿嘿</p>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
    <h2>{{$route.query.height}}</h2>
  </div>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {
      
    }
  },
  created() {
    console.log('profile created')
  },
  destroyed() {
    console.log('profile destroyed')
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