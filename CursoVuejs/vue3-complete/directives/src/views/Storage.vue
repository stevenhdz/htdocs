<template>
  <div>
    {{ react.users }}
    <button v-on:click="addUser()">addUser</button>
    <button v-on:click="save()">save</button>
    <button v-on:click="empty()">empty</button>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";

const react = reactive({
  users: [],
});

function addUser() {
  react.users.push([{ name: "alex" }, { name: "adrian" }]);
  //lleno variable
  localStorage.setItem("react.users", JSON.stringify(react.users));
  console.log("addUser");
}

function save() {
  react.users = JSON.parse(react.users);
  localStorage.setItem("react.users", JSON.stringify(react.users));
}

function empty() {
  localStorage.removeItem("react.users");
}

onMounted(() => {
  //creo variable
  react.users = localStorage.getItem("react.users") || [];
});
</script>
