<template>
  <div class="q-pa-md">

    <q-form class="q-gutter-md">
      

      <q-input filled v-model="GrupoInvestigacion.idG" label="idG *" lazy-rules
        :rules="[ val => !val && val.length < 10 || /(^\d{1,10}$)/.test(val) || 'Ingrese idG, debe ser numerica']" />

      <q-input filled v-model="GrupoInvestigacion.Nombre" label="Nombre *" lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor ingrese una Nombre']" />

<q-input filled v-model="GrupoInvestigacion.Categoria_Minciencias" label="Categoria_Minciencias *" lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor ingrese una Categoria_Minciencias']" />

        
      <div>

          

        <q-btn label="Actualizar" type="submit" color="primary" class="q-ml-xs"  @click="crear()" />
        
        <q-btn label="Cancelar" type="reset" color="red" class="q-ml-xs" @click="clear()" />

      </div>
    </q-form>
  </div>
</template>

<script>
  import { defineComponent } from "vue";
  import axios from "axios";
  let url = "http://127.0.0.1:8000/api/GrupoInvestigacion/update/";
  export default {
    name: "UpdateGrupoInvestigacion",
    data() {
      return {
        facultades: [],
        GrupoInvestigacion: {
          idG: null,
          Nombre: '',
          Categoria_Minciencias: ''
        },
      };
    },

    methods: {
      clear(){
        this.GrupoInvestigacion.idG = '',
        this.GrupoInvestigacion.Nombre = '',
        this.GrupoInvestigacion.Categoria_Minciencias = ''
      },
      crear() {
        let parametros = {
          idG: this.GrupoInvestigacion.idG,
          Nombre: this.GrupoInvestigacion.Nombre,
          Categoria_Minciencias: this.GrupoInvestigacion.Categoria_Minciencias,
        };
        axios.put(url + this.GrupoInvestigacion.idG, parametros).then((response) => {
          setTimeout("location.reload()", 1000);
        });
            //this.facultad.Nombre = "";
      },
    },
  };
</script>
