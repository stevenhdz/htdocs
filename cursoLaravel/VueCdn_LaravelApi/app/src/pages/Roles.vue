<template>
<div>
<h1>roles: </h1>
<q-card class="my-card">
<div class="q-pa-md">
    <q-table
      title="Treats"
      dense
      :rows="roles"
      :columns="columns"
      row-key="name"
    />
</div>

   <div class="q-pa-md q-gutter-sm">
    <q-btn to="/investigadores" color="white" text-color="black" label="Investigadores" />
    </div>
</q-card>

</div>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>

<script>
import { defineComponent } from 'vue';
import axios from "axios";
let url = 'http://127.0.0.1:8000/api/rols/';

export default {
    data() {
      return {
         roles: [],
          dialog: false,
          operacion: '',
          rol: {

            CodigoRol: null,
            Descripcion: ''

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
              this.roles = response.data;
            })
        },
      }
};
</script>
