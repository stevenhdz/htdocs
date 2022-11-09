<template>
  <div class="q-pa-md" style="max-width: auto">
    <div class="q-pa-md q-gutter-sm">
      <q-avatar size="150px" style="display: block; margin: auto">
        <img :src="image" />
      </q-avatar>
    </div>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input filled v-model="image" label="foto *" />
      <q-input filled v-model="names" label="nombre completo *" />
      <q-input filled v-model="year" label="edad *" />
      <q-input filled v-model="group" label="sanguineo *" />
      <q-input filled v-model="rol" label="rol *" />
      <q-input filled v-model="email" label="correo" />
      <q-input v-model="history" filled type="textarea" />
      <q-input filled v-model="contacts" type="textarea" label="contactos *" />

      <div>
        <q-btn
          v-if="id != ''"
          label="Editar"
          @click="edit()"
          style="float: left"
          color="primary"
        />
        <q-btn
          v-if="id == ''"
          style="float: left"
          label="Guardar"
          type="submit"
          color="green"
        />
        <q-btn style="float: right" label="Reset" type="reset" color="red" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  data() {
    return {
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
  props: {},
  created() {
    fetch("https://localhost:3000/client/list/paciente")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
  methods: {
    edit() {
      let config = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: this.id,
          image: this.image,
          names: this.names,
          rol: this.rol,
          history: this.history,
          contacts: this.contacts,
          email: this.email,
          entity: this.entity,
          parent: this.parent,
          custom: this.custom,
          year: this.year,
          group: this.group,
        }),
      };

      fetch("https://localhost:3000/client/edit/" + this.id, config)
        .then((response) => response.json())
        .then((datas) => {
          this.edits();
        })
        .catch((err) => {
          this.errors();
        });
    },

    onSubmit() {},

    onReset() {
      (this.image = ""),
        (this.names = ""),
        (this.rol = ""),
        (this.history = ""),
        (this.contacts = ""),
        (this.email = ""),
        (this.entity = ""),
        (this.parent = ""),
        (this.custom = ""),
        (this.year = ""),
        (this.group = "");
    },
  },
});
</script>
