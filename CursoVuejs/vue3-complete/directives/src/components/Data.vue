<template>
  <div class="data">
    <h2>Información...</h2>

    <h3>
      <span class="cripto">{{ props.cripto }}</span>
      -
      <span class="moneda">{{ props.moneda }}</span>
    </h3>
    <img :src="`https://www.cryptocompare.com/${props.img}`" />
    <p>
      Precio: <strong>$ {{ props.precio }}</strong>
    </p>
  </div>
</template>

<script setup>
const props = defineProps(["cripto", "moneda", "img", "precio"]);
</script>

<style lang="css" scoped>
@import "../assets/base2.css";
</style>
