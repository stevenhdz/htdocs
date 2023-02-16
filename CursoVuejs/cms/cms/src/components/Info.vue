<template>
  <div>
    <h1>Building exactly the eCommerce website you want.</h1>
    <img
      class="img1"
      src="https://i0.wp.com/www.euroscientist.com/wp-content/uploads/2015/02/shutterstock_250176199.jpg?resize=672%2C372&ssl=1"
      alt=""
    />
    <img
      class="img2"
      src="https://i0.wp.com/www.euroscientist.com/wp-content/uploads/2015/02/shutterstock_250176199.jpg?resize=672%2C372&ssl=1"
      alt=""
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  uri: Array,
});
</script>

<style scoped>
.img1 {
  float: left;
  width: 100px;
  height: 100px;
}

.img2 {
  float: right;
  width: 100px;
  height: 100px;
}
</style>
