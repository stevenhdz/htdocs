<script setup>
import { reactive, computed } from "vue";
const react = reactive({
  nombre: "",
  edad: 0,
  email: "",
  users: [],
});

function addUser() {
  const user = {
    nombre: react.nombre,
    edad: react.edad,
    email: react.email,
  };

  react.users.push(user);
  console.table(user);

  react.nombre = "";
  react.edad = 0;
  react.email = "";
}

const countUsers = computed(() => react.users.length);
const porcentaje = computed(() => {
  let completados = 0;
  completados++;
  return (completados * 100) / countUsers.value;
});
</script>

<template>
  <div>
    <h3 class="text-center">0%</h3>

    <div class="progress">
      <div
        class="
          progress-bar progress-bar-striped progress-bar-animated
          bg-success
        "
        role="progressbar"
        :aria-valuenow="porcentaje"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="`width: ${porcentaje}%`"
      ></div>
    </div>

    <form class="row g-3" @submit.prevent="addUser">
      <div class="mb-3 row">
        <label class="form-label">
          Nombre:
          <input
            class="form-control"
            v-model="react.nombre"
            id="nombre"
            type="text"
            name="nombre"
            placeholder="Nombre"
            required
          />
        </label>
      </div>
      <div class="mb-3 row">
        <label class="form-label">
          Edad:
          <input
            class="form-control"
            v-model="react.edad"
            id="edad"
            type="number"
            min="15"
            max="160"
            name="edad"
            placeholder="Edad"
            required
          />
        </label>
      </div>
      <div class="mb-3 row">
        <label class="form-label">
          Correo:
          <input
            class="form-control"
            v-model="react.email"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </label>
      </div>
      <div>
        <button type="submit" class="btn btn-primary mb-3">Enviar</button>
      </div>
    </form>

    <h3>Total usuarios: {{ countUsers }}</h3>
    <hr />

    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>nombre</th>
            <th>edad</th>
            <th>correo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user1, index) in react.users" :key="index">
            <td class="table-dark">{{ index + 1 }}</td>
            <td class="table-dark">{{ user1.nombre }}</td>
            <td :class="user1.edad >= 18 ? 'bg-success' : 'bg-danger'">
              {{ user1.edad }}
            </td>
            <td class="table-dark">{{ user1.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
</style>
