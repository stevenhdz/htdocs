<template>
  <div class="q-pa-md">

    <q-form class="q-gutter-md">
      <q-input filled v-model="rol.Descripcion" label="Descripcion *" lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor ingrese una descripcion']" />
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
  let url = "http://127.0.0.1:8000/api/rols/create/";
  export default {
    name: "CreateRol",
    data() {
      return {
        roles: [],
        rol: {
          Descripcion: "",
        },
      };
    },

    methods: {
      clear(){
        this.rol.Descripcion = ''
      },
      crear() {
        let parametros = {
          Descripcion: this.rol.Descripcion,
        };
        axios.post(url, parametros).then((response) => {
          setTimeout("location.reload()", 1000);
        });
            //this.rol.Descripcion = "";
      },
    },
  };
</script>
