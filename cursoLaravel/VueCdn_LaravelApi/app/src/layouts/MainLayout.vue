<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Gestor de proyectos de investigacion
        </q-toolbar-title>
<!--Quasar v{{ $q.version }}-->
        <div>{{ Email }}

              <q-btn  color="white" @click="eliminarSession()" text-color="black" label="Cerrar session"  v-if="Email1 != '' || Email != null"/>

              <q-btn color="white" @click="eliminarSession()" text-color="black" label="Iniciar session" v-else />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
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

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Roles',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
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
