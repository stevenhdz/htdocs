<template>
  <div>
    <Titulo texto="Hola" />
    <!-- <button @click="consumirAPI">Consumir API</button> -->

    <div v-for="item in arrayBlog" :key="item.id">
      <router-link :to="`/blog/${item.id}`">
        {{ item.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
import Titulo from "../components/Titulo";

export default {
  components: { Titulo },
  data() {
    return {
      arrayBlog: [],
    };
  },
  methods: {
    async consumirAPI() {
      try {
        let comp = this;
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const array = await data.json();
        console.log(array);
        comp.arrayBlog = array;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    let comp = this;
    comp.consumirAPI();
  },
};
</script>

<style>
</style>