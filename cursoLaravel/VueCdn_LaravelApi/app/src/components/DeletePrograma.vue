<template>
  <div class="q-pa-md">

    <q-form class="q-gutter-md">
        <q-input filled v-model="Revista.IdRevista" label="IdRevista *" lazy-rules
        :rules="[ val => !val && val.length < 10 || /(^\d{1,10}$)/.test(val) || 'Ingrese IdRevista, debe ser numerica']" />
      <div>


        <q-btn label="Ingresar" type="submit" color="primary" class="q-ml-xs"  @click="crear()" />
        
        <q-btn label="Cancelar" type="reset" color="red" class="q-ml-xs" @click="clear()" />

      </div>
    </q-form>
  </div>
</template>

<script>
  import axios from "axios";
  let url = "http://127.0.0.1:8000/api/Revista/delete/"
  export default {
    name: "DeletePrograma",
    data() {
      return {
        Revista: {
          IdRevista: null,
        },
      };
    },
    methods: {
      clear(){
        this.Revista.IdRevista = ''
      },
      crear() {
        axios.delete(url+this.Revista.IdRevista).then((response) => {
            console.log(response)
          //setTimeout("location.reload()", 1000);
        });
            //this.rol.Descripcion = "";
      },
    },
  };
</script>
