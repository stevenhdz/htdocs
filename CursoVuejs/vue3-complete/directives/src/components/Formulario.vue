<template>
  <div>
    <form @submit.prevent="$emit('infoMonedas', react.cripto, react.moneda)">
    <!--<form @submit.prevent="obtener(react.cripto,react.moneda)">-->
      <div>
        <label> Moneda Nacional: </label>
        <select v-model="react.moneda" required>
          <option value="" disabled selected>Seleccione una Moneda...</option>
          <option>MXN</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
      </div>
      <div>
        <label> Criptomoneda: </label>
        <select v-model="react.cripto" required>
          <option value="" disabled selected>
            Seleccione una Criptomoneda...
          </option>
          <option>BTC</option>
          <option>ETH</option>
          <option>LTC</option>
        </select>
      </div>
      <div>
        <button type="submit">Cotizar</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const react = reactive({
  cripto: '',
  moneda: '',
})

/* const props = defineProps({
  obtener: []
}) */



</script>

<style lang="css" scoped>
@import "../assets/base2.css";
</style>