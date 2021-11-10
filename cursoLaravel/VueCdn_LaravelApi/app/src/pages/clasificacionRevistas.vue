<template>
  <div class="q-pa-md">
    <div class="row" v-if="siInicio != null && EmailUnique != ''">
      
      <div class="col-12">
        <q-card class="my-card" style="max-width: 100%; max-heigth: 90%">
          <div class="q-pa-md">
            <h5>Listar clasificacionRevistas</h5>
            <q-table virtual-scroll dense :rows="clasificacionRevistas" :columns="columns" row-key="name" />
          </div>

        </q-card>

        <br>
      </div>
       <div class="col-4">
        <q-card class="my-card" v-if="EmailUnique == 1">
         <CreateClasificacionRevistas />
        </q-card>
      </div>

      <div class="col-4">
        <q-card class="my-card" v-if="EmailUnique == 1">
          <DeleteClasificacionRevistas />
        </q-card>
      </div>
      <div class="col-4">
        <q-card class="my-card" v-if="EmailUnique == 1">
          <UpdateClasificacionRevistas />
        </q-card>
      </div>
        
      
    </div>
    <div v-else>
      <Denied />
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .my-card
     width: 100%
     max-width: 98%
</style>


<script>
import { defineComponent } from "vue";
import Denied from "pages/Denied.vue";
import CreateClasificacionRevistas from "components/CreateClasificacionRevistas.vue";
import DeleteClasificacionRevistas from "components/DeleteClasificacionRevistas.vue"
import UpdateClasificacionRevistas from "components/UpdateClasificacionRevistas.vue"
import axios from "axios";
let url = "http://127.0.0.1:8000/api/ClasificacionRevista/";
 let url1 = "http://127.0.0.1:8000/api/investigadores/";
export default {
  components: {
      Denied,
      CreateClasificacionRevistas,
      DeleteClasificacionRevistas,
      UpdateClasificacionRevistas
    },
  data() {
    return {
      siInicio: "",
      model: null,
      files: null,
      clasificacionRevistas: [],
      dialog: false,
      operacion: "",
      EmailUnique: "",
      Email: [],
      clasificacionRevista: {
        idClasificacion: null,
        Detalle: ""
      },
    };
  },
  mounted() {


           this.mostrar();


                this.siInicio = localStorage.getItem('username')


       axios.get(url1).then((response) => {
          this.investigadores = response.data;
            console.log(this.investigadores);
            var username = localStorage.getItem("username");
            this.Email = this.investigadores.filter(word => word.Email == username );
            this.EmailUnique =  this.Email[0].CodigoRol1


        });

    },
    methods: {
      mostrar() {
        axios.get(url).then((response) => {
          this.clasificacionRevistas = response.data;
        });
      },
    },
};
</script>
