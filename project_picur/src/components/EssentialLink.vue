<template>
  <q-item clickable tag="a" target="_blank" :href="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ Paciente }}</q-item-label>
      <br />
      <q-item-label caption> <b>Edad:</b> {{ Edad }} </q-item-label>
      <br />
      <q-item-label caption>
        <b>Grupo sanguineo:</b> {{ grupo_sanguineo }}
      </q-item-label>
      <br />
      <q-item-label caption>
        <b>Historial medico:</b> {{ historial }}
      </q-item-label>
      <br />
      <q-item-label caption>
        <b>Contactos:</b> {{ numeros_auxiliares }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      required: true,
    },

    Paciente: {
      type: String,
      default: "",
    },

    Edad: {
      type: String,
      default: "",
    },

    grupo_sanguineo: {
      type: String,
      default: "",
    },
    ubicacion: {
      type: String,
      default: "",
    },
    historial: {
      type: String,
      default: "",
    },
    numeros_auxiliares: {
      type: String,
      default: "",
    },
  },
});
</script>
