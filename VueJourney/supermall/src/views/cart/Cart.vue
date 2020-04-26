<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";

export default {
  name: "Cart",

  computed: {
    //两种语法对getters中的属性进行映射
    // ...mapGetters(["cartLength", "cartList"])
    ...mapGetters({ 
      length: "cartLength", 
      carts: "cartList" 
      })
  },
  components: {
    NavBar,
    CartList
  },
};
</script>

<style scoped>

.cart{
  height: 100vh;
}

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
