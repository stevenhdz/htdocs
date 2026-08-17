<template>
  <div class="q-pa-md">                                          
    <q-form class="q-gutter-md">
      <q-input filled v-model="programa.IdPrograma" label="Cedula *" lazy-rules
        :rules="[ val => !val && val.length < 10 || /(^\d{1,10}$)/.test(val) || 'Ingrese cedula, debe ser numerica']" />
      <q-input filled v-model="programa.Nombre" label="Nombre *" lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor ingrese una Nombre']" />
      <q-select standout="bg-primary text-white" v-model="programa.idF" :options="select"
        label="Seleccione clasificacionprograma" />
      <div>


        <q-btn label="Ingresar" type="submit" color="primary" class="q-ml-xs" @click="crear()" />

        <q-btn label="Cancelar" type="reset" color="red" class="q-ml-xs" @click="clear()" />

      </div>
    </q-form>
  </div>
</template>

<script>
  import axios from "axios";
  let url = "http://127.0.0.1:8000/api/Programa/create/"
  let url1 = "http://127.0.0.1:8000/api/Facultades/"
  export default {
    name: "CreatePrograma",
    data() {
      return {
        options: [],
        select: [],
        unique: '',
        programa: {
            IdPrograma: "",
            Nombre: "",
            idF: null
        },
      };
    },
    mounted(){
        axios.get(url1).then((response) => {
          this.options = response.data
          this.options.forEach(element => {
              this.select.push(element.Nombre)
          });   
        });
    },
    methods: {
      clear(){
        this.facultades.idFacultad = ''
        this.programa.IdPrograma = ''
        this.programa.Nombre = ''
        this.programa.idF = ''
      },
      crear() {
        let facultades = this.options.filter(word => word.idFacultad == this.programa.idF );
        this.foreignKey =  facultades[0].idF

        let parametros = {
            IdPrograma: this.programa.IdPrograma,
            Nombre: this.programa.Nombre,
            idF: this.foreignKey
        };
        axios.post(url, parametros).then((response) => {
          setTimeout("location.reload()", 1000);
        });
            //this.clasificacionprograma.Descripcion = "";
      },
    },
  };
</script>
