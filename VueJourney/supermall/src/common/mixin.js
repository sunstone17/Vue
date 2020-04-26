import { debounce } from "common/utils";

import BackTop from "components/content/backtop/BackTop";

export const itemListenerMixin = {
  data() {
    return {
      goodListItemImageListener: null,
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100);

    //保存刷新函数
    this.goodListItemImageListener = () => {
      this.newRefresh();
    };
    //监听GoodListItem ImageLoad，对当前scroll进行Y值刷新
    this.$bus.$on("itemImageLoad", this.goodListItemImageListener);
    console.log("i am mixin")
  },
  components:{

  }
}

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backTopClick() {
      //通过ref获取到scroll组件，获取到scroll对象
      this.$refs.scroll.scrollTo(0, 0);
    },
    listenShowBackTop(position){
      this.isShowBackTop = -position.y > 1000
    }
  },
  components:{
    BackTop,
  }
}