<template>
  <div class="q-pa-md">

    <q-form class="q-gutter-md">
     
             <q-select standout="bg-teal text-white" v-model="InvestigadoresProyecto.idProyecto" :options="select" label="idProyecto *" />

     <q-select standout="bg-teal text-white" v-model="InvestigadoresProyecto.Cedula" :options="selectInvestigadores" label="Cedula" />


       

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
  let url = "http://127.0.0.1:8000/api/InvestigadoresProyecto/create/";
    let url1 = "http://127.0.0.1:8000/api/investigadores/";
      let url2 = "http://127.0.0.1:8000/api/ProyectoInvestigacion/";
  export default {
    name: "CreateInvestigadoresProyecto",
    data() {
      return {
        investigadores: [],
        select: [],
        selectInvestigadores:[],
        options: [], 
        InvestigadoresProyecto: {
          idProyecto: "",
          Cedula: ""
        },
      }
    },
    mounted(){
       axios.get(url1).then((response) => {
          this.investigadores = response.data
           this.investigadores.forEach(element => {
              this.selectInvestigadores.push(element.Cedula)
          }); 
        });

         axios.get(url2).then((response) => {
          this.options = response.data
           this.options.forEach(element => {
              this.select.push(element.idProyecto)
          });   
        });
    },
    methods: {
      clear(){
        this.InvestigadoresProyecto.idProyecto = '',
         this.InvestigadoresProyecto.Cedula = ''
      },
      crear() {
        let parametros = {
          idProyecto: this.InvestigadoresProyecto.idProyecto,
           Cedula: this.InvestigadoresProyecto.Cedula
        };
        axios.post(url, parametros).then((response) => {
          setTimeout("location.reload()", 1000);
          //excepcion
        });
            //this.InvestigadoresProyecto.idProyecto = "";
      },
    },
  };
</script>
