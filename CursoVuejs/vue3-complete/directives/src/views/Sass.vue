<template>
  <div class="container">
    <h1>Vue 3 + sass + $emit</h1>
    <Grid>
      <!--<Formulario :obtener="obtener"></Formulario> con props-->
      <Formulario @info-monedas="obtener"></Formulario>
      <Data
        :cripto="react.cripto"
        :moneda="react.moneda"
        :img="react.img"
        :precio="react.precio"
      ></Data>
    </Grid>
  </div>
</template>

<script setup>
import Formulario from "../components/Formulario.vue";
import Data from "../components/Data.vue";
import Grid from "../components/Grid.vue";

import { reactive } from "vue";

const react = reactive({
  cripto: "*",
  moneda: "*",
  img: "",
  precio: 0,
});

async function obtener(cripto, moneda) {
  const rest = await fetch(
    `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${encodeURI(
      cripto
    )}&tsyms=${encodeURI(moneda)}`
  );

  const { RAW } = await rest.json();
  const dataCripto = RAW[cripto];
  const data = dataCripto[moneda];
  console.log(data);

  react.cripto = cripto;
  react.moneda = moneda;
  react.img = data.IMAGEURL;
  react.precio = data.PRICE;
}
</script>

<style lang="css" scoped>
@import "../assets/base2.css";
</style>
