<script setup>
import { ref, onMounted, onUpdated, onUnmounted } from "vue";


let intervalId

onMounted(() => {
  intervalId = setInterval(() => {
    console.log('2');
  })
})

onUnmounted(() => clearInterval(intervalId))

const count = ref(0)

onUpdated(() => {
  // text content should be the same as current `count.value`
  console.log(document.getElementById('count').textContent)
})


</script>

<template>
  <div>

    <button id="count" @click="count++">{{ count }}</button>


  </div>
</template>
