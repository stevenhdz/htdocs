<template>
  <div class="q-pa-md">

    <q-form class="q-gutter-md">
       <q-input filled v-model="rol.CodigoRol" label="Codigo rol *" lazy-rules
       :rules="[ val => !val || /(^\d{1,10}$)/.test(val) || 'Ingrese id valido, debe ser un numero entero']"
       />
      <q-input filled v-model="rol.Descripcion" label="Descripcion *" lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor ingrese una descripcion']" />

  <div>

        <q-btn label="Actualizar" type="submit" color="primary" class="q-ml-xs" @click="actualizar()" />

        <q-btn label="Cancelar" type="reset" color="red" class="q-ml-xs" @click="clear()" />

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
       clear(){
        this.rol.Descripcion = ''
        this.rol.CodigoRol = ''
      },
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
