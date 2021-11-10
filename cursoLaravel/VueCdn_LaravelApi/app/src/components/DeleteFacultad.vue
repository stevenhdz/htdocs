<template>
  <div class="q-pa-md">
    
    <q-form class="q-gutter-md">
      <q-input filled v-model="facultad.idFacultad" label="idFacultad *" lazy-rules
      :rules="[ val => !val || /(^\d{1,10}$)/.test(val) || 'Ingrese idFacultad valido, debe ser un numero entero']"
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
  let url = "http://127.0.0.1:8000/api/Facultad/delete/";
  export default {
    name: "DeleteFacultad",
    data() {
      return {
        facultad: {
          idFacultad: null,
        },
      };
    },

    methods: {
       clear(){
        this.facultad.idFacultad = ''
      },
      deletes() {
        axios.delete(url + this.facultad.idFacultad)
                .then(response => {
//setTimeout("location.reload()", 1000);
console.log(response)
                });
            //this.rol.Descripcion = "";
      },
    },
  };
</script>
