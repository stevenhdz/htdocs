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
          <router-link to="/" tag="button" style="color: white">
            CarefulEasyMonitor</router-link
          >
        </q-toolbar-title>

        <div>
          <router-link to="/contacts" tag="button" style="color: white"
            >Agregar contactos</router-link
          >
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header style="text-align: center">
          Informacion del paciente
        </q-item-label>

        <div id="logo">
          <q-img width="90px" position="50%" src="" alt="" />
        </div>

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
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    Paciente: "Steven hernandez",
    Edad: "25",
    grupo_sanguineo: "B+",
    ubicacion: "https://quasar.dev",
    historial:
      "Con antecedentes de alergia con Los  (AINEs) constituyen un grupo farmacológico, químicamente heterogéneo y ampliamente utilizado, no solo en el tratamiento de patologías del aparato locomotor (artrosis, artritis reumatoide, trastornos músculoesqueléticos), sino también en otras indicaciones terapéuticas (fiebre, ...",
    numeros_auxiliares: "3002988526, 30303030300",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="css">
#logo {
  text-align: center;
}
</style>
