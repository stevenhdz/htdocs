<template>
  <div class="q-pa-md">

    <q-form class="q-gutter-md">
      <q-input filled v-model="facultad.Nombre" label="Nombre *" lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor ingrese una Nombre']" />
      <div>

        <q-btn label="Ingresar" type="submit" color="primary" class="q-ml-xs"  @click="crear()" />
        
        <q-btn label="Cancelar" type="reset" color="red" class="q-ml-xs" @click="clear()" />

      </div>
    </q-form>
  </div>
</template>

<script>
  import { defineComponent } from "vue";
  import axios from "axios";
  let url = "http://127.0.0.1:8000/api/Facultad/create/";
  export default {
    name: "CreateFacultad",
    data() {
      return {
        facultades: [],
        facultad: {
          Nombre: "",
        },
      };
    },

    methods: {
      clear(){
        this.facultad.Nombre = ''
      },
      crear() {
        let parametros = {
          Nombre: this.facultad.Nombre,
        };
        axios.post(url, parametros).then((response) => {
          setTimeout("location.reload()", 1000);
        });
            //this.facultad.Nombre = "";
      },
    },
  };
</script>
