<template>
<div>
<h1>investigadores: </h1>
<div class="q-pa-md">
    <q-table
      title="Treats"
      dense
      :rows="investigadores"
      :columns="columns"
      row-key="name"
    />
  </div>

   <div class="q-pa-md q-gutter-sm">
    <q-btn color="white" text-color="black" label="Standard" />
    </div>

</div>
</template>

<script>
import { defineComponent } from 'vue';
import axios from "axios";
let url = 'http://127.0.0.1:8000/api/investigadores/';

export default {
    data() {
      return {
         investigadores: [],
          dialog: false,
          operacion: '',
          investigador: {
            Cedula: null,
            Nombre: '',
            Apellidos: '',
            Celular: '',
            CodigoRol: null

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
              this.investigadores = response.data;
            })
        },
      }
};
</script>
