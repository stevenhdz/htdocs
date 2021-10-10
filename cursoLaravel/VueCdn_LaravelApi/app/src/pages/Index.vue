<template>
<h1>Articulos: </h1>
<div class="q-pa-md">
    <q-table
      title="Treats"
      dense
      :rows="articulos"
      :columns="columns"
      row-key="name"
    />
  </div>

   <div class="q-pa-md q-gutter-sm">
    <q-btn color="white" text-color="black" label="Standard" />
    </div>


</template>

<script> 
import { defineComponent } from 'vue';
import axios from "axios";
let url = 'http://127.0.0.1:8001/api/articulos/';

export default {
    data() {
      return {
         articulos: [],
          dialog: false,
          operacion: '',
          articulo: {
            id: null,
            descripcion: '',
            precio: '',
            stock: ''
          }
      }
    },
      mounted() {
        this.mostrar()
      },
      methods: {
       
        mostrar() {
          axios.get(url)
            .then(response => {
              this.articulos = response.data;
            })
        },
      }
};
</script>
