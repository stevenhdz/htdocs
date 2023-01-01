<template>
    <div>
        <h1>Saldo: ${{  store.saldo }}</h1>
        <button v-on:click.prevent="store.addSaldo">+100</button>
        <button v-on:click.prevent="store.diaSaldo">-100</button>
    </div>
</template>

<script setup>
import store from '../stores/store'

</script>