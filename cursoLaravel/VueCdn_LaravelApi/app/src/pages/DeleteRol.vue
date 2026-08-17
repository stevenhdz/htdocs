<template>
  <div class="q-pa-md">
    
    <q-form class="q-gutter-md">
      <q-input filled v-model="rol.CodigoRol" label="Codigo rol *" lazy-rules
      :rules="[ val => !val || /(^\d{1,10}$)/.test(val) || 'Ingrese id valido, debe ser un numero entero']"
       />
      <div>

        <q-btn label="Eliminar" type="submit" color="primary" class="q-ml-xs" @click="deletes()" />

        <q-btn label="Cancelar" type="reset" color="red"  class="q-ml-xs"  @click="clear()"  />

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
       clear(){
        this.rol.CodigoRol = ''
      },
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
