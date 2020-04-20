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
    this.scroll = new BScroll(this.$refs.divWrapper, {
      click: true,
      probeType: 3,//滚动侦测
      pullUpLoad: true//触发时机：在一次上拉加载的动作后，这个时机一般用来去后端请求数据。
    });

    this.scroll.on("scroll", (postion)=>{
       console.log(postion)
    })

    this.scroll.on("pullingUp", ()=>{
      console.log("本次加载结束")
      setTimeout(() => {
        this.scroll.finishPullUp();
      }, 2000);
    })
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
