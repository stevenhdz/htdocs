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

<div class="q-pa-md">
    <div class="q-gutter-md row items-start">

<q-file color="orange" filled v-model="model" label="Label">
        <template v-if="model" v-slot:append>
          <q-icon name="cancel" @click.stop.prevent="model = null" class="cursor-pointer" />
        </template>
      </q-file>


      <q-file
        v-model="files"
        label="Pick files"
        filled
        counter
        max-files="3"
        multiple
        style="max-width: 300px"
      />
    </div>
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
        model: null,
          files: null,
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
