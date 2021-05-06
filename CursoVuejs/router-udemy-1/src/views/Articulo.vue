<template>
    <div>
      <Titulo texto="Articulo" />
      <h2>Parametro: {{ $route.params.id }}</h2>
      <h3>{{articulo.title}}</h3>
      <p>{{articulo.id}} - {{articulo.body}}</p>
    </div>
</template>

<script>
import Titulo from '../components/Titulo.vue'

export default {  
    components:{ Titulo },
    data() {
        return {
            articulo: {}
        }
    },
    methods:{
        async consumirArticulo(){
            try {
                let comp = this
                const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${comp.$route.params.id}`)
                const objeto = await data.json()
                console.log(objeto)
                comp.articulo = objeto
            } catch (error) {
                console.log(error)
              }
        }
    },
    created() {
        let comp = this
        comp.consumirArticulo()
    },
}
</script>

<style>

</style>