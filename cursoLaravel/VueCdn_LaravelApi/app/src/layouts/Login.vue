<template>
 <div class="q-pa-md bg" style="max-width: 400px; text-align:center; margin: 0 auto;float: none;margin-bottom: 10px; margin-top: 200px;">
<q-card class="my-card" flat>

  <div class="q-pa-md q-gutter-sm">
 <q-avatar size="100px">
      <img src="https://cdn.quasar.dev/img/avatar.png">
    </q-avatar>
    </div>

   <q-input
        filled
        v-model="username"
        label="Email"
        lazy-rules
        :rules="[ val => !val || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val) || 'Correo de usuario no valido']"
      />


      <q-input v-model="password" filled label="Password" :type="isPwd ? 'password' : 'text'"
      lazy-rules
        :rules="[
          val => !val  || /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(val) || 'Contraseña no valida'
        ]">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <div>
        <q-btn label="Iniciar sesion" type="submit" @click="iniciarSesion()" color="primary"/>

      </div>

   </q-card>
  </div>
</template>

<style lang="sass" scoped>
  .bg
     background: #FFFFFF !important
</style>

<script>
  import axios from "axios";
  let url = "http://127.0.0.1:8000/api/rols/";
  export default {
    components: {
    },
    data() {
      return {
        roles: [],
        username: "",
        password: "",
        isPwd: true
      };
    },
    mounted() {
      this.mostrarRoles();
    },
    methods: {
      mostrarRoles() {
        axios.get(url).then((response) => {
          this.roles = response.data;
        });
      },
      iniciarSesion(){
        this.$router.push('roles')
        localStorage.setItem("username", this.username);
      }
    },
  };
</script>
