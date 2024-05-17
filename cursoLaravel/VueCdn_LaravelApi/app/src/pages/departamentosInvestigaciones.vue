<template>
  <div class="q-pa-md">
    <div class="row" v-if="siInicio != null && EmailUnique != ''">
      
      <div class="col-12">
        <q-card class="my-card" style="max-width: 100%; max-heigth: 90%">
          <div class="q-pa-md">
            <h5>Listar DepartamentoInvestigaciones</h5>
            <q-table virtual-scroll dense :rows="DepartamentoInvestigaciones" :columns="columns" row-key="name" />
          </div>

        </q-card>

        <br>
      </div>
       <div class="col-4">
        <q-card class="my-card" v-if="EmailUnique == 1">
         <CreateDepartamentoInvestigaciones />
        </q-card>
      </div>

      <div class="col-4">
        <q-card class="my-card" v-if="EmailUnique == 1">
          <DeleteDepartamentoInvestigaciones />
        </q-card>
      </div>
      <div class="col-4">
        <q-card class="my-card" v-if="EmailUnique == 1">
          <UpdateDepartamentoInvestigaciones />
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
import CreateDepartamentoInvestigaciones from "components/CreateDepartamentoInvestigaciones.vue";
import DeleteDepartamentoInvestigaciones from "components/DeleteDepartamentoInvestigaciones.vue"
import UpdateDepartamentoInvestigaciones from "components/UpdateDepartamentoInvestigaciones.vue"
import axios from "axios";
let url = "http://127.0.0.1:8000/api/DepartamentoInvestigacion/";
 let url1 = "http://127.0.0.1:8000/api/investigadores/";
export default {
  components: {
      Denied,
      CreateDepartamentoInvestigaciones,
      DeleteDepartamentoInvestigaciones,
      UpdateDepartamentoInvestigaciones
    },
  data() {
    return {
      siInicio: "",
      model: null,
      files: null,
      DepartamentoInvestigaciones: [],
      dialog: false,
      operacion: "",
      EmailUnique: "",
      Email: [],
      DepartamentoInvestigacion: {
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
          this.DepartamentoInvestigaciones = response.data;
        });
      },
    },
};
</script>
