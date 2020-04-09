<template>
  <div>
    <h2 class="title">{{message}}2</h2>
    <Cpn></Cpn>
  </div>
</template>

<script>

import Cpn from './Cpn.vue'

export default {
  name: "App",
  data() {
    return {
      message: "hello webpack"
    };
  },
  components:{
    Cpn
  }
};
</script>

<style scoped>
.title {
  color: green;
}
</style>