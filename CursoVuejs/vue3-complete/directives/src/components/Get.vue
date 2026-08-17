<template>
  <div>
    <h1>
      {{ $route.params.id }}
    </h1>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

console.log(router);
console.log(route);
</script>
