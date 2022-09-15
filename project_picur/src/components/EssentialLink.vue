<template>
  <q-item clickable tag="a" target="_blank" :href="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>Paciente: {{ Paciente }}</q-item-label>
      <q-item-label caption> Edad: {{ Edad }} </q-item-label>
      <q-item-label caption>
        Grupo sanguineo: {{ grupo_sanguineo }}
      </q-item-label>
      <q-item-label caption> Historial: {{ historial }} </q-item-label>
      <q-item-label caption>
        Numeros_auxiliares: {{ numeros_auxiliares }}
      </q-item-label>
    </q-item-section>
  </q-item>
  
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
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
      default: "#",
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
