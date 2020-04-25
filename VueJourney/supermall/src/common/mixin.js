import { debounce } from "common/utils";

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