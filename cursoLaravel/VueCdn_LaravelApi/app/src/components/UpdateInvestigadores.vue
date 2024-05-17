<template>
  <div class="q-pa-md">

    <q-form class="q-gutter-md">
      <q-input filled v-model="investigadores.Cedula" label="Cedula *" lazy-rules
        :rules="[ val => !val && val.length < 10 || /(^\d{1,10}$)/.test(val) || 'Ingrese cedula, debe ser numerica']" />
      <q-input filled v-model="investigadores.Nombre" label="Nombre *" lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor ingrese una Nombre']" />
      <q-input filled v-model="investigadores.Apellidos" label="Apellidos *" lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor ingrese una Apellidos']" />
      <q-input filled v-model="investigadores.Email" label="Email *" lazy-rules
        :rules="[ val => !val || /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(val) || 'Ingrese correo, debe ser example@test.com']" />
      <q-input filled v-model="investigadores.Celular" label="Celular *" lazy-rules
        :rules="[ val => !val && val.length < 10 || /(^\d{1,10}$)/.test(val) || 'Ingrese celular, debe ser un numerico']" />
      <q-select standout="bg-primary text-white" v-model="investigadores.CodigoRol1" :options="select"
        label="Seleccione rol" />
      <div>


        <q-btn label="Actualizar" type="submit" color="primary" class="q-ml-xs" @click="crear()" />

        <q-btn label="Cancelar" type="reset" color="red" class="q-ml-xs" @click="clear()" />

      </div>
    </q-form>
  </div>
</template>

<script>
  import axios from "axios";
  let url = "http://127.0.0.1:8000/api/Investigadores/update/"
  let url1 = "http://127.0.0.1:8000/api/rols/"
  export default {
    name: "CreateInvestigadores",
    data() {
      return {
        options: [],
        select: [],
        unique: '',
        investigadores: {
          Cedula: "",
          Nombre: "",
          Apellidos: "",
          Email: "",
          Celular: "",
          CodigoRol1: null,
        },
      };
    },
    mounted(){
        axios.get(url1).then((response) => {
          this.options = response.data
          this.options.forEach(element => {
              this.select.push(element.Descripcion)
          });   
        });
    },
    methods: {
      clear(){
        this.rol.Descripcion = ''
        this.investigadores.Cedula = ''
        this.investigadores.Nombre = ''
        this.investigadores.Apellidos = ''
        this.investigadores.Email = ''
        this.investigadores.Celular = ''
        this.investigadores.CodigoRol1 = null
      },
      crear() {
        let rol = this.options.filter(word => word.Descripcion == this.investigadores.CodigoRol1 );
        this.foreignKey =  rol[0].CodigoRol

        let parametros = {
            Nombre: this.investigadores.Nombre,
            Apellidos: this.investigadores.Apellidos,
            Email: this.investigadores.Email,
            Celular: this.investigadores.Celular,
            CodigoRol1: this.foreignKey
        };
        axios.put(url + this.investigadores.Cedula, parametros).then((response) => {
            console.log(response)
        });
            //this.rol.Descripcion = "";
      },
    },
  };
</script>
