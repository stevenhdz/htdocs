<template>
  <div>
    <img
      style="height: 150px; width: 250px"
      :src="props.url"
      alt=""
      srcset=""
    />
    <h1>{{ props.name }}</h1>
    <slots>
      <logo2></logo2>
    </slots>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import logo2 from "../components/logo2.vue";

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
</script>

<style></style>
