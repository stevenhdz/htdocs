<template>
  <div class="q-pa-md">
    <div class="row" v-if="siInicio != null && EmailUnique != ''">
      
      <div class="col-12">
        <q-card class="my-card" style="max-width: 100%; max-heigth: 90%">
          <div class="q-pa-md">
            <h5>Listar facultades</h5>
            <q-table virtual-scroll dense :rows="facultades" :columns="columns" row-key="name" />
          </div>

        </q-card>

        <br>
      </div>
       <div class="col-4">
        <q-card class="my-card" v-if="EmailUnique == 1">
          <CreateFacultad />
        </q-card>
      </div>

      <div class="col-4">
        <q-card class="my-card" v-if="EmailUnique == 1">
          <UpdateFacultad />
        </q-card>
      </div>
      <div class="col-4">
        <q-card class="my-card" v-if="EmailUnique == 1">
          <DeleteFacultad />
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
  import CreateFacultad from "components/CreateFacultad.vue";
  import DeleteFacultad from "components/DeleteFacultad.vue";
  import UpdateFacultad from "components/UpdateFacultad.vue";
  import Denied from "pages/Denied.vue";
  import axios from "axios";
  let url = "http://127.0.0.1:8000/api/Facultades/";
  let url1 = "http://127.0.0.1:8000/api/investigadores/";
  export default {
    components: {
      CreateFacultad,
      DeleteFacultad,
      UpdateFacultad,
      Denied
    },
    data() {
      return {
        siInicio: "",
        facultades: [],
        EmailUnique: "",
        investigadores: [],
        dialog: false,
        operacion: "",
        Email: [],
        rol: {
          CodigoRol: null,
          Descripcion: "",
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
          this.facultades = response.data;
        });
      },
    },
  };
</script>
