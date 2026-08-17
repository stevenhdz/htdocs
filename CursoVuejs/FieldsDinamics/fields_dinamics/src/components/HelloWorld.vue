<template>
 
    <form action="">

      <select v-model="select" name="" id="">
        <option value="password">password</option>
             <option value="button">button</option>
                  <option value="text">text</option>
                       <option value=""></option>
                            <option value=""></option>
      </select>

crear
    <div v-if="select == 'password'">
       <input type="text" name="name" id="" v-model="name">
        <input type="text" name="types" id="" v-model="types">
        <button v-on:click.stop.prevent="crear()">agregar</button>
    </div>
     <div v-else-if="select == 'button'">
       <input type="text" name="name" id="" v-model="name">
        <input type="text" name="types" id="" v-model="types">
        <input type="text" name="names" v-model="names">
        <button v-on:click.stop.prevent="crear()">agregar</button>
    </div>
      <div v-else-if="select == 'text'">
       <input type="text" name="name" id="" v-model="name">
        <input type="text" name="types" id="" v-model="types">
        <button v-on:click.stop.prevent="crear()">agregar</button>
    </div>

    <div v-for="(types,ids) in type" :key="ids">
    

   <div v-if="select == 'button'">
       <label :for="types.name">{{types.name}}</label><br>
       <input :type="types.types" :value="types.names">
    </div>

       <div v-else-if="select == 'password'">
       <label :for="types.name">{{types.name}}</label><br>
       <input :type="types.types" :name="types.name" :value="types.names" v-model="types.names">
    </div>

     <div v-else-if="select == 'text'">
       <label :for="types.name">{{types.name}}</label><br>
       <input :type="types.types" :name="types.name" v-model="text">
    </div>

    </div>
    </form>
   
</template>

<script>
export default {
  name: 'HelloWorld',
   data() {
      return {
        password: '',
        text: '',
        select:'',
        types:'',
        name: '',
         type: []

        }
    },
    methods: {
      crear(){
/* 'button','checkbox','color','date','datetime','email','file','hidden','image','month','number','password','radio','range','reset','search','submit','tel','text','time','url','week' */

        this.type.push({types: this.types, name: this.name, names: this.names})
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
