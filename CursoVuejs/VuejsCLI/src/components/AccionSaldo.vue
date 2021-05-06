<template>
 <dir>
     <button @click="this.$emit('accion')" :disabled="desactivar">{{texto}}</button>
 </dir>
</template>

<script>
export default {
    props:{
        texto: String,
        desactivar: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>

</style>