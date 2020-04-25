<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行','新款', '精选']"
      @tabClick="tabClick"
      ref="tabControlHidden"
      class="tab-control"
      v-show="isTabFixed"
    ></tab-control>

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款', '精选']" @tabClick="tabClick" ref="tabControlShow"></tab-control>

      <good-list :goodsList="showGoods"></good-list>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
    <ul></ul>
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
import BackTop from "components/content/backtop/BackTop";
//js
import { getHomeMultidata, getHomeGoods } from "network/home.js";
import { debounce } from "common/utils";
import { itemListenerMixin } from "common/mixin";

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
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      homeSaveY: 0,
    };
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodList,
    Scroll,
    BackTop
  },
  mixins:[itemListenerMixin],
  destroyed() {
    console.log("home destoryed");
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    //监听事件图片加载完成
    // const refresh = debounce(this.$refs.scroll.refresh, 50);

    // //保存监听函数
    // this.homeGoodListItemImageListener = () => {
    //   //图片加载不完，scroll计算高度时，不会算入未加载的图片的高度
    //   // console.log("------------")
    //   // this.$refs.scroll.refresh();
    //   refresh();
    // };
    // this.$bus.$on("itemImageLoad", this.homeGoodListItemImageListener);

    //2.监听tabControl的offsetTop
    //所有的组件对象都有$el属性，可以拿到当前组件
    // 这里拿的值是不对的，图片还没有加载
    console.log(this.$refs.tabControlShow.$el);
  },
  activated() {
    //恢复监听
    console.log("恢复监听")
    this.$bus.$on("itemImageLoad", this.goodListItemImageListener);
    //回来的时候自动到离开的位置
    // console.log("activated", this.homeSaveY);
    this.$refs.scroll.scrollTo(0, this.homeSaveY, 0);
    //刷新一下，防止scroll出现问题
    this.$refs.scroll.refresh();
  },
  deactivated() {
    //保存Y值
    this.homeSaveY = this.$refs.scroll.getScrollY();
    //取消监听goodsItem imageLoad
    console.log("取消监听")
    this.$bus.$off("itemImageLoad", this.goodListItemImageListener);
    // console.log("deactived", this.homeSaveY);
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
      this.$refs.tabControlShow.currentIndex = index;
      this.$refs.tabControlHidden.currentIndex = index;
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
        this.$refs.scroll.finishPullUp(); //本次下拉加载完成
      });
    },
    backTopClick() {
      //通过ref获取到scroll组件，获取到scroll对象
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad() {
      //监听轮播图片加载，得出来正确的高度
      console.log(this.$refs.tabControlShow.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControlShow.$el.offsetTop;
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
  /* padding-top: 44px; */
  height: 100vh; /* vh: viewpoint heigh: 可视窗口高度 */
  /* position: relative; */
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /*原生滚动时需要*/
  /* position: fixed; 这里滚动的是scroll，不需要在fixed了，不会在动了
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}

/* .content{
  height: 300px;
  overflow: hidden;
} */
/* 使用定位，来确定中间这部分的高度*/
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.tab-control {
  position: relative;
  z-index: 9;
}

/* .fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
} */
</style>
