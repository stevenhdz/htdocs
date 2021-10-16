<template>
  <div class="q-pa-md">
    <h5>Eliminar</h5>

    <q-form class="q-gutter-md">
      <q-input filled v-model="rol.CodigoRol" label="id *" lazy-rules
       />
      <div>

        <q-btn label="Submit" type="submit" color="primary" @click="deletes()" />

        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />

      </div>
    </q-form>
  </div>
</template>

<script>
  import { defineComponent } from "vue";
  import axios from "axios";
  let url = "http://127.0.0.1:8000/api/rols/delete/";
  export default {
    name: "DeleteRol",
    data() {
      return {
        rol: {
          CodigoRol: null,
        },
      };
    },

    methods: {
      deletes() {
        axios.delete(url + this.rol.CodigoRol)
                .then(response => {
setTimeout("location.reload()", 1000);
                });
            //this.rol.Descripcion = "";
      },
    },
  };
</script>
