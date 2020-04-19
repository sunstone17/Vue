<template>
  <div class="recommend"> 
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image"/>
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.recommend {
  display: flex; /*水平布局*/
  width: 100%;
  text-align: center;/*居中*/
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}

.recommend-item{
  flex: 1;/*水平平分*/
}

.recommend-item img{/*图片style*/
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>