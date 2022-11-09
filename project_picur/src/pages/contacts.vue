<template>
  <div class="q-pa-md">
    <div class="row items-start q-gutter-md">
      <q-responsive :ratio="4 / 3" class="col">
        <div class="q-pa-md">
          <div v-if="selected != ''" class="q-pa-md q-gutter-sm">
            <q-avatar size="150px" style="display: block; margin: auto">
              <img :src="image" />
            </q-avatar>
          </div>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input filled v-model="id" label="cedula *" />
            <q-input filled v-model="image" label="foto *" />
            <q-input filled v-model="names" label="nombre completo *" />
            <q-input filled v-model="rol" label="rol *" />
            <q-input filled v-model="email" label="correo *" />
            <q-input filled v-model="entity" label="entidad *" />
            <q-input filled v-model="parent" label="relacion *" />
            <q-input filled v-model="custom" label="mensaje personalizado *" />
            <q-input filled v-model="contacts" label="telefono *" />
            <div>
              <q-btn
                v-if="selected != ''"
                label="Editar"
                @click="edit()"
                style="float: left"
                color="primary"
              />
              <q-btn
                v-if="selected == ''"
                style="float: left"
                label="Guardar"
                type="submit"
                color="green"
              />
              <q-btn
                style="float: right"
                label="Cancelar"
                type="reset"
                color="red"
              />
            </div>
          </q-form>
        </div>
      </q-responsive>

      <q-responsive :ratio="16 / 9" class="col">
        <q-table
          @click="idChanged()"
          title="Contactos del paciente"
          :rows="array"
          :columns="col"
          row-key="id"
          selection="single"
          v-model:selected="selected"
        />
      </q-responsive>
    </div>
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
      array: [],
      selected: [],
      col: [
        {
          name: "_id",
          required: true,
          label: "_id",
          align: "left",
          field: (row) => row._id,
          format: (val) => `${val}`,
          sortable: true,
        },
        { name: "names", label: "names", field: "names" },
        { name: "rol", label: "rol", field: "rol" },
        { name: "contacts", label: "contacts", field: "contacts" },
        { name: "email", label: "email", field: "email" },
        { name: "entity", label: "entity", field: "entity" },
        { name: "parent", label: "parent", field: "parent" },
        { name: "custom", label: "custom", field: "custom" },
      ],
    };
  },
  props: {},
  created() {
    fetch("https://localhost:3000/client/list")
      .then((response) => response.json())
      .then((data) => {
        this.array = data;

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
    idChanged() {
      this.id = this.selected[0].id;
      this.image = this.selected[0].image;
      this.names = this.selected[0].names;
      this.rol = this.selected[0].rol;
      this.history = this.selected[0].history;
      this.contacts = this.selected[0].contacts;
      this.email = this.selected[0].email;
      this.entity = this.selected[0].entity;
      this.parent = this.selected[0].parent;
      this.custom = this.selected[0].custom;
      this.year = this.selected[0].year;
      this.group = this.selected[0].group;
    },
    onSubmit() {
      let config = {
        method: "POST",
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

      fetch("https://localhost:3000/client/add/", config)
        .then((response) => response.json())
        .then((datas) => {})
        .catch((err) => {});
    },

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
      this.selected = "";
    },

    edit() {
      let config = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
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
        .then((datas) => {})
        .catch((err) => {});
    },
  },
});
</script>
