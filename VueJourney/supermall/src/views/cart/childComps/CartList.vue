<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <!-- <div v-for="item in 100">{{item}}</div> -->
      <cart-list-item 
        v-for="(item, index) in cartList" 
        :item-info ="item"
        :key="index">{{item}}</cart-list-item>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Scroll from "components/common/scroll/Scroll";

import CartListItem from "./CartListItem";

export default {
  name: "CartList",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartLength", "cartList"])
  },
  activated(){//进来时就算好了，添加数据scroll不知道，所以需要刷新
    this.$refs.scroll.refresh()
  },
  components: {
    Scroll,
    CartListItem
  }
};
</script>

<style scoped>
/* .content {
  height: calc(100% - 49px);
} */
.cart-list {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;

}
.content {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>