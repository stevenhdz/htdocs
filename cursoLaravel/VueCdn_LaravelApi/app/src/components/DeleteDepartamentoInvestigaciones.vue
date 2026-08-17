<template>
  <div class="q-pa-md">

    <q-form class="q-gutter-md">
      

      <q-input filled v-model="DepartamentoInvestigacion.CodigoV" label="CodigoV *" lazy-rules
        :rules="[ val => !val && val.length < 10 || /(^\d{1,10}$)/.test(val) || 'Ingrese CodigoV, debe ser numerica']" />

    
        
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
  let url = "http://127.0.0.1:8000/api/DepartamentoInvestigacion/delete/";
  export default {
    name: "DeleteDepartamentoInvestigacion",
    data() {
      return {
        facultades: [],
        DepartamentoInvestigacion: {
          CodigoV: null
        },
      };
    },

    methods: {
      clear(){
        this.DepartamentoInvestigacion.CodigoV = ''
      },
      crear() {
        axios.delete(url + this.DepartamentoInvestigacion.CodigoV).then((response) => {
          //setTimeout("location.reload()", 1000);
        });
            //this.facultad.Nombre = "";
      },
    },
  };
</script>
