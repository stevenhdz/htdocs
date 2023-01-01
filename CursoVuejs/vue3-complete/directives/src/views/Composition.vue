<template>
  <div>
    <h1>
      Refs + reactive + methods + computed + props + { emit } + composables
    </h1>
    <hr />

    <form action="">
      <div>
        <label>
          Tecnologias:
          <input type="number" min="1" max="5" v-model="formulario.numero" />
        </label>
      </div>

      <div v-for="(numero, key) in formulario.numero" :key="key">
        <label> Tecnologia #{{ numero }}: </label>

        <input type="text" v-model="formulario.nombre[key]" />
        <select name="nivel" v-model="formulario.nivel[key]" id="nivel">
          <option value="" disabled>Seleccione un nivel...</option>
          <option>Basico</option>
          <option>Intermedio</option>
          <option>Avanzado</option>
        </select>
      </div>
      <button v-on:click.prevent="enviar">Enviar</button>
    </form>

    <h1>{{ porcentaje }} %</h1>

    <h3>{{ formulario.nombre }} - {{ formulario.nivel }}</h3>
    <h1>{{ names3 }}</h1>
  </div>
</template>

<script setup>
import { reactive, computed, defineProps } from "vue";

//composables
import { name1 } from "../composables/variable";

//ref una referencia reactiva
/* const nombre = ref("vue.js");
const nivel = ref(""); */

const props = defineProps({
  initial: {
    required: true,
    type: Number,
  },
});

console.log(props);

const formulario = reactive({
  nombre: [],
  nivel: [],
  numero: 1,
});

const enviar = () => {
  console.log(formulario);
};

const emit = defineEmits(["cambiar"]);

console.log(emit("cambiar"));

const porcentaje = computed(() => {
  return formulario.numero * 0.16;
});

//composables
const { names3 } = reactive(name1());
</script>
