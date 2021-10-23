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
