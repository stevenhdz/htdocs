<script setup>
import { reactive } from "vue";

const html = "<pre>soy html</pre>";
const val = 8;
const name = "alex";

const react = reactive({
  vals: 8,
  numbers: [
    {
      name: "cambio",
    },
    {
      name: "cambio2",
    },
  ],
});

function refresh() {
  console.log(react.vals);
}
</script>

<template>
  <div>
    <h1 v-text="'soy texto'"></h1>
    <h1 v-html="html"></h1>
    <h1 v-show="true">soy un show</h1>
    <div>
      <h1 v-if="val <= 8">soy menor a 8</h1>
      <h1 v-else-if="val > 8 && val < 16">soy mayor a 8 y menor a 16</h1>
      <h1 v-else>soy mayor a 16</h1>
    </div>
    <div v-for="(number, key) in react.numbers" :key="key">
      soy un for {{ number.name }}
    </div>
    <input type="text" v-model="val" />
    <button v-on:click="refresh">increment</button>
    <input type="text" :placeholder="'bind ' + name" />
  </div>
</template>

<style></style>
