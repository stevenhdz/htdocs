<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 10vh">
        Error debes iniciar sesion
      </div>

      <div class="text-h2" style="opacity:.4">
        Asegurate de ingresar la contraseña/correo correctos
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Ir a login"
       @click="eliminarSession()"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Denied',
  methods: {
  eliminarSession(){
     localStorage.removeItem("username");
  }
  }
})
</script>

