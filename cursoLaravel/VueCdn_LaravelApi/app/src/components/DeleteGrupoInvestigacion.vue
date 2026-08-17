<template>
  <div class="q-pa-md">

    <q-form class="q-gutter-md">
      

      <q-input filled v-model="GrupoInvestigacion.idG" label="idG *" lazy-rules
        :rules="[ val => !val && val.length < 10 || /(^\d{1,10}$)/.test(val) || 'Ingrese idG, debe ser numerica']" />

    
        
      <div>

          

        <q-btn label="Eliminar" type="submit" color="primary" class="q-ml-xs"  @click="crear()" />
        
        <q-btn label="Cancelar" type="reset" color="red" class="q-ml-xs" @click="clear()" />

      </div>
    </q-form>
  </div>
</template>

<script>
  import { defineComponent } from "vue";
  import axios from "axios";
  let url = "http://127.0.0.1:8000/api/GrupoInvestigacion/delete/";
  export default {
    name: "DeleteGrupoInvestigacion",
    data() {
      return {
        facultades: [],
        GrupoInvestigacion: {
          idG: null
        },
      };
    },

    methods: {
      clear(){
        this.GrupoInvestigacion.idG = ''
      },
      crear() {
        axios.delete(url + this.GrupoInvestigacion.idG).then((response) => {
          //setTimeout("location.reload()", 1000);
        });
            //this.facultad.Nombre = "";
      },
    },
  };
</script>
