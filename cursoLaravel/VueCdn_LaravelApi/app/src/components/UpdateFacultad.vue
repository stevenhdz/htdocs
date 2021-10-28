<template>
  <div class="q-pa-md">

    <q-form class="q-gutter-md">
       <q-input filled v-model="facultad.idFacultad" label="idFacultad *" lazy-rules
       :rules="[ val => !val || /(^\d{1,10}$)/.test(val) || 'Ingrese id valido, debe ser un numero entero']"
       />
      <q-input filled v-model="facultad.Nombre" label="Nombre *" lazy-rules
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
  let url = "http://127.0.0.1:8000/api/Facultad/update/";
  export default {
    name: "UpdateFacultad",
    data() {
      return {
        roles: [],
        facultad: {
          Nombre: "",
          idFacultad: null
        },
      };
    },

    methods: {
       clear(){
        this.facultad.Nombre = ''
        this.facultad.idFacultad = ''
      },
      actualizar() {
        let parametros = {
          Nombre: this.facultad.Nombre,
          idFacultad: this.facultad.idFacultad
        };
        axios.put(url + this.facultad.idFacultad , parametros).then((response) => {
          setTimeout("location.reload()", 1000);
        }).catch(error => {
              console.log(error);
            });
            //this.rol.Descripcion = "";
      },
    },
  };
</script>
