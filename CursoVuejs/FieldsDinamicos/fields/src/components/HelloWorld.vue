<template>
 
    <form action="">

crear
    <div>
       <input type="text" name="name" id="" v-model="name">
        <input type="text" name="types" id="" v-model="types">
        <button v-on:click.stop.prevent="crear()">agregar</button>
    </div>

    <div v-for="(types,ids) in type" :key="ids">
      <label :for="types.name">{{types.name}}</label><br>
      <input :type="types.types" :name="types.name" >
    </div>
    </form>
   
</template>

<script>
export default {
  name: 'HelloWorld',
   data() {
      return {
        types:'',
        name: '',
         type: []

        }
    },
    methods: {
      crear(){
/* 'button','checkbox','color','date','datetime','email','file','hidden','image','month','number','password','radio','range','reset','search','submit','tel','text','time','url','week' */

        this.type.push({types: this.types, name: this.name})
      }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
