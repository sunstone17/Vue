<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" @load="imageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoadOneImg: false
    };
  },
  methods:{
    imageLoad(){
      if(this.isLoadOneImg){
        return;
      }
      this.isLoadOneImg = true;
      this.$emit("swiperImageLoad");
    }
  },
  components:{
    Swiper, SwiperItem
  }
};
</script>

<style scoped>
</style>