<template>
  <div class="q-pa-md">                                          
    <q-form class="q-gutter-md">
      <q-input filled v-model="revista.IdRevista" label="IdRevista *" lazy-rules
        :rules="[ val => !val && val.length < 10 || /(^\d{1,10}$)/.test(val) || 'Ingrese IdRevista, debe ser numerica']" />
      <q-input filled v-model="revista.Nombre" label="Nombre *" lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor ingrese una Nombre']" />
      <q-input filled v-model="revista.Pais" label="Pais *" lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor ingrese una Pais']" />
      <q-input filled v-model="revista.Detalles_Publicidad" label="Detalles_Publicidad *"  />
      <q-select standout="bg-primary text-white" v-model="revista.idClasificacion" :options="select"
        label="Seleccione clasificacionRevista" />
      <div>


        <q-btn label="Ingresar" type="submit" color="primary" class="q-ml-xs" @click="crear()" />

        <q-btn label="Cancelar" type="reset" color="red" class="q-ml-xs" @click="clear()" />

      </div>
    </q-form>
  </div>
</template>

<script>
  import axios from "axios";
  let url = "http://127.0.0.1:8000/api/Revista/create/"
  let url1 = "http://127.0.0.1:8000/api/ClasificacionRevista/"
  export default {
    name: "CreateRevista",
    data() {
      return {
        options: [],
        select: [],
        unique: '',
        foreignKey: null,
        revista: {
            IdRevista: "",
            Nombre: "",
            Pais: "",
            Detalles_Publicidad: "",
            idClasificacion: null,
        },
      };
    },
    mounted(){
        axios.get(url1).then((response) => {
          this.options = response.data
          this.options.forEach(element => {
              this.select.push(element.Detalle)
          });   
        });
    },
    methods: {
      clear(){
        this.clasificacionRevista.Detalle = ''
        this.revista.IdRevista = ''
        this.revista.Nombre = ''
        this.revista.Pais = ''
        this.revista.Detalles_Publicidad = ''
      },
      crear() {
        let clasificacionRevista = this.options.filter(word => word.Detalle == this.revista.idClasificacion );
        this.foreignKey =  clasificacionRevista[0].idClasificacion

        let parametros = {
            IdRevista: this.revista.IdRevista,
            Nombre: this.revista.Nombre,
            Pais: this.revista.Pais,
            Detalles_Publicidad: this.revista.Detalles_Publicidad,
            idClasificacion: this.foreignKey
        };
        axios.post(url, parametros).then((response) => {
          setTimeout("location.reload()", 1000);
        });
            //this.clasificacionRevista.Descripcion = "";
      },
    },
  };
</script>
