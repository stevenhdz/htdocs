<template>
  <div class="q-pa-md">
    <div class="row" v-if="siInicio != null && EmailUnique != ''">
      <div class="col-4">

        <q-card class="my-card" v-if="EmailUnique == 1">
          <CreateRol />
        </q-card>

        <br>

        <q-card class="my-card" v-if="EmailUnique == 1">
          <DeleteRol />
        </q-card>

        <br>

         <q-card class="my-card" v-if="EmailUnique == 1">
          <UpdateRol />
        </q-card>
      </div>


      <div class="col-8">
        <q-card class="my-card" style="max-width: 100%; max-heigth: 100%">
          <div class="q-pa-md">
            <h5>Listar</h5>
            <q-table virtual-scroll title="Treats" dense :rows="roles" :columns="columns" row-key="name" />
          </div>

          <div class="q-pa-md q-gutter-sm">
            <q-btn to="/investigadores" color="white" text-color="black" label="Investigadores" />
          </div>
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
     max-width: 93%
</style>

<script>
  import CreateRol from "pages/CreateRol.vue";
  import DeleteRol from "pages/DeleteRol.vue";
  import UpdateRol from "pages/UpdateRol.vue";
  import Denied from "pages/Denied.vue";
  import axios from "axios";
  let url = "http://127.0.0.1:8000/api/rols/";
  let url1 = "http://127.0.0.1:8000/api/investigadores/";
  export default {
    components: {
      CreateRol,
      DeleteRol,
      UpdateRol,
      Denied
    },
    data() {
      return {
        siInicio: "",
        roles: [],
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
          this.roles = response.data;
        });
      },
    },
  };
</script>
