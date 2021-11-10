<template>
  <div class="q-pa-md">
    <div class="row" v-if="siInicio != null && EmailUnique != ''">
      
      <div class="col-12">
        <q-card class="my-card" style="max-width: 100%; max-heigth: 90%">
          <div class="q-pa-md">
            <h5>Listar investigadores</h5>
            <q-table virtual-scroll dense :rows="investigadores" :columns="columns" row-key="name" />
          </div>
        </q-card>

        <br>
      </div>
       <div class="col-4">
        <q-card class="my-card" v-if="EmailUnique == 1">
         <CreateInvestigadores />
        </q-card>
      </div>

      <div class="col-4">
        <q-card class="my-card" v-if="EmailUnique == 1">
          <DeleteInvestigadores />
        </q-card>
      </div>
      <div class="col-4">
        <q-card class="my-card" v-if="EmailUnique == 1">
          <UpdateInvestigadores />
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
import CreateInvestigadores from "components/CreateInvestigadores.vue";
import DeleteInvestigadores from "components/DeleteInvestigadores.vue"
import UpdateInvestigadores from "components/UpdateInvestigadores.vue"
import axios from "axios";
let url = "http://127.0.0.1:8000/api/investigadores/";

export default {
  components: {
      Denied,
      CreateInvestigadores,
      DeleteInvestigadores,
      UpdateInvestigadores
    },
  data() {
    return {
      siInicio: "",
      model: null,
      files: null,
      investigadores: [],
      dialog: false,
      operacion: "",
      EmailUnique: "",
      Email: [],
      investigador: {
        Cedula: null,
        Nombre: "",
        Apellidos: "",
        Celular: "",
        CodigoRol: null,
      },
    };
  },
  mounted() {
    this.mostrar();
    this.siInicio = localStorage.getItem('username')
  },
  methods: {
    mostrar() {
      axios.get(url).then((response) => {
        this.investigadores = response.data;
            console.log(this.investigadores);
            var username = localStorage.getItem("username");
            this.Email = this.investigadores.filter(word => word.Email == username );
            this.EmailUnique =  this.Email[0].CodigoRol1
      });
    },
  },
};
</script>
