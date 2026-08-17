<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const events = reactive({ value: [] });

events.value = [
  {
    name: "Music metal",
    image:
      "https://www.autopistarock.com/images/easyblog_articles/5697/PosterKnotAf.jpeg",
  },
  {
    name: "Music rock",
    image:
      "https://www.autopistarock.com/images/easyblog_articles/3377/b2ap3_amp_AficheDiaDeRock.jpg",
  },
  {
    name: "Music salsa",
    image:
      "https://ilvalle.com.co/website/wp-content/uploads/2022/07/VIVA-LA-SALSA-2022.png",
  },
];

const to = (event) => {
  router.push("/shop/" + event);
};
</script>

<template>
  <div>
    <h1>Events 2022</h1>
    <el-carousel :interval="4000" type="card" height="800px">
      <el-carousel-item v-for="item in events.value" :key="item">
        <img :src="item.image" v-on:click="to(item.name)" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
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

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>