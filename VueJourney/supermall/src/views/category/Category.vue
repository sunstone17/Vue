<template>
  <div class="wrapper" ref="divWrapper">
    <ul class="content">
      <li v-for="item in num" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Category",
  data() {
    return {
      num: 100,
      scroll: null
    };
  },
  mounted() {
    //需要等组件挂载完成之后才能找到divWrapper
    this.scroll = new BScroll(this.$refs.divWrapper, {});
  }
};
</script>

<style scoped>
.wrapper {
  height: 150px;
  background-color: red;
  overflow-y: scroll;
}
</style>
