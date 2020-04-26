<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick ="navTitleClick" ref="navBarCpn"></detail-nav-bar>
    <scroll class="content"
      ref="scroll"
      :probeType = 3
      @scroll="detailContentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="goodsInfoImageLoad" ref="goodsInfoCpn" />
      <detail-param-info :param-info="goodsParam" ref = "paramInfoCpn"/>
      <detail-comment-info :comment-info="commentInfo" ref = "commentInfoCpn"/>
      <goods-list :goods-list="recommends" ref="recommendsCpn" />
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend
} from "network/detail";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";

import { debounce } from "common/utils";
import { itemListenerMixin, backTopMixin } from "common/mixin";

//child
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

export default {
  name: "Detail",
  mixins:[itemListenerMixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParam: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: []
    };
  },
  created() {
    // console.log("detail created")
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      // console.log(res);
      //1. 获取数据
      const data = res.result;

      //2. 轮播图数据
      this.topImages = data.itemInfo.topImages;

      //3. 商品对象
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //4. 店铺信息
      this.shop = new Shop(data.shopInfo);

      //5. 详情信息
      this.detailInfo = data.detailInfo;

      //6. 参数信息
      this.goodsParam = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      //7. 评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }

      //8. 推荐
      getRecommend().then(res => {
        this.recommends = res.data.list;
      });

      // this.$nextTick(()=>{
      //  DOM已经被渲染出来
      //   //这里的DOM还是没有包含图片
      //   this.setThemeTopYs();
      //   console.log(this.themeTopYs)
      // })
    });
  },
  mounted() {
  },
  methods: {
    goodsInfoImageLoad() {
      // this.$refs.scroll.refresh();
      // console.log("banner refresh")
      this.newRefresh();
      this.setThemeTopYs();
      // console.log(this.$refs.paramInfoCpn.$el.offsetTop)
    },
    setThemeTopYs(){
      this.themeTopYs = [];
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.paramInfoCpn.$el.offsetTop)
      this.themeTopYs.push(this.$refs.commentInfoCpn.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommendsCpn.$el.offsetTop)
    },
    detailContentScroll(position){
      // console.log(position);
      var posY = -position.y;
      this.listenShowBackTop(position);
      // console.log(this.themeTopYs)
      // console.log(position)
      if(posY >= this.$refs.recommendsCpn.$el.offsetTop){
        this.$refs.navBarCpn.currentIndex = 3
      }else if(posY >= this.$refs.commentInfoCpn.$el.offsetTop){
        this.$refs.navBarCpn.currentIndex = 2
      }else if(posY >= this.$refs.paramInfoCpn.$el.offsetTop){
        this.$refs.navBarCpn.currentIndex = 1
      }else{
        this.$refs.navBarCpn.currentIndex = 0
      }
    },
    navTitleClick(index){
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    addToCart(){
      const product = {
        image: this.topImages[0],
        title: this.goods.title,
        desc: this.goods.desc,
        price: this.goods.realPrice,
        iid: this.iid,
      }

      this.$store.dispatch("addCart", product);
    }
  },

  destroyed() {
    //销毁刷新
    this.$bus.$off("itemImageLoad", this.goodListItemImageListener);
    // console.log("detail destroyed")
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
/* .content {
  height: calc(100%-44px);
  overflow: hidden;
} */
/*  相对定位*/
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
/* 相对定位 */
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>

