<template>
  <q-item clickable tag="a" :href="link">
    <q-item-section>
      <div class="q-pa-md q-gutter-sm">
        <q-avatar size="150px" style="display: block; margin: auto">
          <img :src="image" />
        </q-avatar>
      </div>
      <q-item-label>{{ names }}</q-item-label>
      <br />
      <q-item-label caption> <b>Edad:</b> {{ year }} </q-item-label>
      <br />
      <q-item-label caption> <b>Grupo sanguineo:</b> {{ group }} </q-item-label>
      <br />
      <q-item-label caption>
        <b>Historial medico:</b> {{ history }}
      </q-item-label>
      <br />
      <q-item-label caption> <b>Contactos:</b> {{ contacts }} </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  data() {
    return {
      link: "http://localhost:8084/#/client",
      id: "",
      image: "",
      names: "",
      rol: "",
      history: "",
      contacts: "",
      email: "",
      entity: "",
      parent: "",
      custom: "",
      year: "",
      group: "",
    };
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
  created() {
    fetch("https://localhost:3000/client/list/paciente")
      .then((response) => response.json())
      .then((data) => {
        this.id = data.id;
        this.image = data.image;
        this.names = data.names;
        this.rol = data.rol;
        this.history = data.history;
        this.contacts = data.contacts;
        this.email = data.email;
        this.entity = data.entity;
        this.parent = data.parent;
        this.custom = data.custom;
        this.year = data.year;
        this.group = data.group;
      });
  },
});
</script>
