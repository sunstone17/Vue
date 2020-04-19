<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType, //滚动侦测
      pullUpLoad: this.pullUpLoad //触发时机：在一次上拉加载的动作后，这个时机一般用来去后端请求数据。
    });
  },
  methods: {}
};
</script>

<style scoped>

</style>