<template>
<div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-field label="Standard" stack-label>
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">{{ hola }}</div>
        </template>
      </q-field>
</div>
<div class="q-pa-md q-gutter-sm">
    <q-avatar color="red" text-color="white" icon="directions"></q-avatar>
    <q-avatar>
      <img src="https://cdn.quasar.dev/img/avatar.png">
    </q-avatar>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      hola: 'Holas1',
      factura: []
    }
  },

  methods: {
       cont2() {
         let cont = 'Mundo'
         let cont1 = this.hola + cont
         console.log(cont1)
       }
  }


}
</script>
