<template>
  <div class="q-pa-md">

    <q-form class="q-gutter-md">
      

      <q-input filled v-model="DepartamentoInvestigacion.CodigoV" label="CodigoV *" lazy-rules
        :rules="[ val => !val && val.length < 10 || /(^\d{1,10}$)/.test(val) || 'Ingrese CodigoV, debe ser numerica']" />

      <q-input filled v-model="DepartamentoInvestigacion.Nombre" label="Nombre *" lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor ingrese Nombre']" />

<q-input filled v-model="DepartamentoInvestigacion.Ubicacion" label="Ubicacion *" lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor ingrese Ubicacion']" />

<q-input filled v-model="DepartamentoInvestigacion.Contacto_Tel" label="Contacto_Tel *" lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor ingrese Contacto_Tel']" />

<q-input filled v-model="DepartamentoInvestigacion.Email" label="Email *" lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor ingrese Email']" />

        
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
  let url = "http://127.0.0.1:8000/api/DepartamentoInvestigaciones/create/";
  export default {
    name: "CreateDepartamentoInvestigaciones",
    data() {
      return {
        facultades: [],
        DepartamentoInvestigacion: {
          CodigoV: null,
          Nombre: '',
          Ubicacion: '',
          Contacto_Tel: '',
          Email: ''
        },
      };
    },

    methods: {
      clear(){
        this.DepartamentoInvestigacion.CodigoV = '',
        this.DepartamentoInvestigacion.Nombre = '',
        this.DepartamentoInvestigacion.Ubicacion = '',
        this.DepartamentoInvestigacion.Contacto_Tel = '',
        this.DepartamentoInvestigacion.Email = ''
      },
      crear() {
        let parametros = {
          CodigoV: this.DepartamentoInvestigacion.CodigoV,
          Nombre: this.DepartamentoInvestigacion.Nombre,
          Ubicacion: this.DepartamentoInvestigacion.Ubicacion,
          Contacto_Tel: this.DepartamentoInvestigacion.Contacto_Tel,
          Email: this.DepartamentoInvestigacion.Email,
        };
        axios.post(url, parametros).then((response) => {
          setTimeout("location.reload()", 1000);
        });
            //this.facultad.Nombre = "";
      },
    },
  };
</script>
