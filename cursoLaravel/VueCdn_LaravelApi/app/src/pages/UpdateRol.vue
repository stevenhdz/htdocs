<template>
  <div class="q-pa-md" style="max-width: 400px">
    <h5>Actualizar</h5>

    <q-form class="q-gutter-md">
       <q-input filled v-model="rol.CodigoRol" label="id *" lazy-rules
       />
      <q-input filled v-model="rol.Descripcion" label="Descripcion *" lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']" />

  <div>

        <q-btn label="Submit" type="submit" color="primary" @click="actualizar()" />

        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />

      </div>
    </q-form>
  </div>
</template>

<script>
  import { defineComponent } from "vue";
  import axios from "axios";
  let url = "http://127.0.0.1:8000/api/rols/update/";
  export default {
    name: "UpdateRol",
    data() {
      return {
        roles: [],
        rol: {
          Descripcion: "",
          CodigoRol: null
        },
      };
    },

    methods: {
      actualizar() {
        let parametros = {
          Descripcion: this.rol.Descripcion,
          CodigoRol: this.rol.CodigoRol
        };
        axios.put(url + this.rol.CodigoRol , parametros).then((response) => {
          setTimeout("location.reload()", 1000);
        }).catch(error => {
              console.log(error);
            });
            //this.rol.Descripcion = "";
      },
    },
  };
</script>
