<script setup>
import logo from "../components/logo.vue";
</script>

<template>
  <div class="flex-container">
    <div>
      <logo
        :url="'https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png'"
        :name="'fb'"
      ></logo>
    </div>
    <div>
      <logo
        :url="'https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png'"
        :name="'fbs'"
      ></logo>
    </div>
    <div>
      <logo
        :url="'https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png'"
        :name="'fbs1'"
      ></logo>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

.flex-container {
  display: flex;
  flex-direction: row-reverse;
  padding: 1%;
}

.flex-container div {
  width: 30%;
  margin: 40px;
  text-align: center;
  line-height: 75px;
  font-size: 50px;
}
</style>
