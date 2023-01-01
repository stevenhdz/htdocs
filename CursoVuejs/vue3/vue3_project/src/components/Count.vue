<script>
export default {
    props:{
        start: {
            Number,
        }
    },
    data() {
        return {
            contador: 10,
        }
    },
    methods: {
        increment(){
            this.contador++
        },
        decrement(){
            this.contador--
        },
        reset(start){
            this.contador = start
        }
    },
}
</script>


<template>
    <div>
        <h2>{{ contador }}</h2>
        <button v-on:click="increment()">+1</button>
        <button v-on:click="decrement()">-1</button>
        <button v-on:click="reset(start)">reset</button>
    </div>
</template>

<style scoped>

</style>