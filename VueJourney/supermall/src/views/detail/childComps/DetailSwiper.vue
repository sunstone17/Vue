<template>
  <div>
    <swiper class="detail-swiper">
      <swiper-item v-for = "(item, index) in topImages" :key="index">
        <img :src="item" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components:{
    Swiper, 
    SwiperItem
  }
};
</script>
<style scoped>
  /* 图片太高了 */
.detail-swiper{
  height: 300px;  
  overflow: hidden;
}
</style>