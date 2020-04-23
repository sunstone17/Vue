<template>
  <div class="goods">
    <good-list-item v-for="item in goodsList" :goodsItem="item"/>
  </div>
</template>

<script>
import GoodListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  components: {
    GoodListItem
  }
};
</script>


<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 3px;
  }


</style>
