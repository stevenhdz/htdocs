<template>
  <div>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item, key) in uri" :key="key">
        <img :src="item.uri" alt="item" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  uri: Array,
});
</script>

<style scoped>
.el-carousel {
  padding: 3%;
  width: 400px;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

img {
  width: 100%;
  height: 100%;
}

h1 {
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
