
<template>
  <div class="q-pa-md">
    <div class="row" v-if="siInicio != null && EmailUnique != ''">
      
      <div class="col-12">
        <q-card class="my-card" style="max-width: 100%; max-heigth: 90%">
          <div class="q-pa-md">
            <h5>Listar Programas</h5>
            <q-table virtual-scroll dense :rows="Programa" :columns="columns" row-key="name" />
          </div>
        </q-card>
        <br>
        
      </div>
       <div class="col-4">
        <q-card class="my-card" v-if="EmailUnique == 1">
          <CreatePrograma />
        </q-card>
      </div>

      <div class="col-4">
        <q-card class="my-card" v-if="EmailUnique == 1">
          <DeletePrograma />
        </q-card>
      </div>
        
      <div class="col-4">
        <q-card class="my-card" v-if="EmailUnique == 1">
          <UpdatePrograma />
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
  import CreatePrograma from "components/CreatePrograma.vue";
  import DeletePrograma from "components/DeletePrograma.vue";
  import UpdatePrograma from "components/UpdatePrograma.vue";
  import Denied from "pages/Denied.vue";
  import axios from "axios";
  let url = "http://127.0.0.1:8000/api/Programa/";
  let url1 = "http://127.0.0.1:8000/api/investigadores/";
  export default {
    components: {
      CreatePrograma,
      DeletePrograma,
      UpdatePrograma,
      Denied
    },
    data() {
      return {
        siInicio: "",
        Investigadores: [],
        EmailUnique: "",
        Programa: [],
        dialog: false,
        operacion: "",
        Email: [],
        Programas: {
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
          this.Programa = response.data;
        });
      },
    },
  };
</script>
