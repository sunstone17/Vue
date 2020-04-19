<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-control" :titles="['流行','新款', '精选']" @tabClick="tabClick"></tab-control>

      <good-list :goodsList="showGoods"></good-list>
    </scroll>
    <ul>
      <li v-for="item in num">sssssssssssssss{{item}}</li>
    </ul>
  </div>
</template>

<script>
//child
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

//common
import Scroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodList from "components/content/goods/GoodsList";
//js
import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      keywords: [],
      dKeyworkd: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      num: 50
    };
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodList,
    Scroll
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    //子组件回调
    tabClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    getHomeMultidata() {
      getHomeMultidata()
        .then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
          this.keywords = res.data.keywords;
          this.dKeyworkd = res.data.dKeyworkd;
        })
        .catch(err => {});
    },
    getHomeGoods(type) {
      //获取商品
      // 属性可以这样获取
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        //不能直接赋值，需要push进去，可变参数
        //... 将list解析成单个元素
        this.goods[type].list.push(...res.data.list);
        //页码++
        this.goods[type].page += 1;
      });
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh; /* vh: viewpoint heigh: 可视窗口高度 */
  /* position: relative; */
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
/* .content{
  height: 300px;
  overflow: hidden;
} */
/* 使用定位，来确定中间这部分的高度*/
.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
