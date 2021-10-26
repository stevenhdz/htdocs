<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer()"
        />

        <q-toolbar-title>
          Gestor de proyectos de investigacion
        </q-toolbar-title>
<!--Quasar v{{ $q.version }}-->
        <div>{{ Email }}

              <q-btn  color="red" @click="eliminarSession()" text-color="white" label="Cerrar session"  v-if="Email1 != '' || Email != null"/>

              <q-btn color="red" @click="eliminarSession()" text-color="white" label="Iniciar session" v-else />
        </div>
      </q-toolbar>
    </q-header>


     <q-footer elevated class="bg-primary text-white"> 
        <q-toolbar  class="text-center">
          <q-toolbar-title class="text-overline">Copyright © 2021 SLtechnology</q-toolbar-title>
        </q-toolbar>
      </q-footer>

    <q-drawer v-if="leftDrawerOpen == true"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu
        </q-item-label>


        <div class="q-pa-md">
            <div class="row">
               <div class="col-12">
                  <q-btn to="/roles"   color="primary" class="ps" text-color="white" label="Roles" @click="toggleLeftDrawer()"/>
               </div>
               <div class="col-12">
                  <q-btn to="/Investigadores"  class="ps"  color="primary" text-color="white" label="Investigadores" @click="toggleLeftDrawer()" />
               </div>
                <div class="col-12">
                  <q-btn to="/ClasificacionRevista"  class="ps"  color="primary" text-color="white" label="Clasificacion Revista" @click="toggleLeftDrawer()" />
               </div>
                <div class="col-12">
                  <q-btn to="/DepartamentoInvestigacion"  class="ps"  color="primary" text-color="white" label="Departamento Investigacion" @click="toggleLeftDrawer()" />
               </div>
                <div class="col-12">
                  <q-btn to="/Facultad"  class="ps"  color="primary" text-color="white" label="Facultad" @click="toggleLeftDrawer()" />
               </div>
                <div class="col-12">
                  <q-btn to="/GrupoInvestigacion"  class="ps"  color="primary" text-color="white" label="Grupo Investigacion" @click="toggleLeftDrawer()" />
               </div>
                <div class="col-12">
                  <q-btn to="/InvestigadoresProyecto"  class="ps"  color="primary" text-color="white" label="Investigadores Proyecto" @click="toggleLeftDrawer()" />
               </div>
                <div class="col-12">
                  <q-btn to="/Producto"  class="ps"  color="primary" text-color="white" label="Producto" @click="toggleLeftDrawer()" />
               </div>
                <div class="col-12">
                  <q-btn to="/Programa"  class="ps"  color="primary" text-color="white" label="Programa" @click="toggleLeftDrawer()" />
               </div>
                <div class="col-12">
                  <q-btn to="/ProyectoInvestigacion"  class="ps"  color="primary" text-color="white" label="Proyecto Investigacion" @click="toggleLeftDrawer()" />
               </div>
                <div class="col-12">
                  <q-btn to="/Revista"  class="ps"  color="primary" text-color="white" label="Revista" @click="toggleLeftDrawer()" />
               </div>
            </div>
        </div>

         
           
         

        
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="sass" scoped>
  .ps
     padding: 2
     margin-top: 5px
     width: 100%
     heigth: 100% 
</style>

<script>

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      Email1: "",
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  },

   mounted() {
         this.Email1 = localStorage.getItem("username");
      },
    methods: {
      eliminarSession() {
         this.$router.push('/')
         localStorage.removeItem("username");
      },
      iniciarSession() {
         this.$router.push('/')
      },
    }


})
</script>
