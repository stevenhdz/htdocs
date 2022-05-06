<template>
  <div class="about">
    <br />
    <br />
    <br />
    <el-divider content-position="left"
      ><h1 style="color: #209eff; font-size: 30px">
        Configuracion
      </h1></el-divider
    >

    <br />
    <br />
    <el-divider content-position="left"><h5>Usuarios</h5></el-divider>

    <el-row :gutter="12">
      <el-col :span="3">
        <el-card shadow="hover">
          <User width="40" />
          <br />
          <el-button type="primary" v-on:click="$router.push({ path: '/rol' })"
            >Rol
          </el-button></el-card
        >
      </el-col>
    </el-row>

    <br />
    <br />
    <el-divider content-position="left"><h5>Tickets</h5></el-divider>

    <el-row :gutter="12">
      <el-col :span="3">
        <el-card shadow="hover">
          <User width="40" />
          <br />
          <el-button type="primary" v-on:click="$router.push({ path: '/rol' })"
            >Proyectos
          </el-button></el-card
        >
      </el-col>
      <el-col :span="3">
        <el-card shadow="hover">
          <User width="40" />
          <br />
          <el-button type="primary" v-on:click="$router.push({ path: '/rol' })"
            >Categorias
          </el-button></el-card
        >
      </el-col>
      <el-col :span="3">
        <el-card shadow="hover">
          <User width="40" />
          <br />
          <el-button type="primary" v-on:click="$router.push({ path: '/rol' })"
            >Prioridades
          </el-button></el-card
        >
      </el-col>
      <el-col :span="3">
        <el-card shadow="hover">
          <User width="40" />
          <br />
          <el-button type="primary" v-on:click="$router.push({ path: '/rol' })"
            >Estados
          </el-button></el-card
        >
      </el-col>
      <el-col :span="3">
        <el-card shadow="hover">
          <User width="40" />
          <br />
          <el-button type="primary" v-on:click="$router.push({ path: '/rol' })"
            >Tipos de casos
          </el-button></el-card
        >
      </el-col>
    </el-row>

    <br />
    <br />
    <el-divider content-position="left"><h5>Envios</h5></el-divider>

    <el-row :gutter="12">
      <el-col :span="3">
        <el-card shadow="hover">
          <User width="40" />
          <br />
          <el-button type="primary" v-on:click="$router.push({ path: '/rol' })"
            >Estados
          </el-button></el-card
        >
      </el-col>
    </el-row>


     <br />
    <br />
    <el-divider content-position="left"><h5>Computadores</h5></el-divider>

    <el-row :gutter="12">
      <el-col :span="3">
        <el-card shadow="hover">
          <User width="40" />
          <br />
          <el-button type="primary" v-on:click="$router.push({ path: '/rol' })"
            >Marcas
          </el-button></el-card
        >
      </el-col>
      <el-col :span="3">
        <el-card shadow="hover">
          <User width="40" />
          <br />
          <el-button type="primary" v-on:click="$router.push({ path: '/rol' })"
            >Modelos
          </el-button></el-card
        >
      </el-col>
      <el-col :span="3">
        <el-card shadow="hover">
          <User width="40" />
          <br />
          <el-button type="primary" v-on:click="$router.push({ path: '/rol' })"
            >Tipos
          </el-button></el-card
        >
      </el-col>
         <el-col :span="3">
        <el-card shadow="hover">
          <User width="40" />
          <br />
          <el-button type="primary" v-on:click="$router.push({ path: '/rol' })"
            >Stock
          </el-button></el-card
        >
      </el-col>
    </el-row>


    <br />
    <br />
    <el-divider content-position="left"><h5>Externo</h5></el-divider>

    <el-row :gutter="12">
      <el-col :span="3">
        <el-card shadow="hover">
          <User width="40" />
          <br />
          <el-button type="primary" v-on:click="$router.push({ path: '/rol' })"
            >Proveedores
          </el-button></el-card
        >
      </el-col>
    </el-row>

    <br />
    <br />
    <el-divider content-position="left"><h5>Respaldos</h5></el-divider>
    
  <el-row :gutter="12">
      <el-col :span="3">
        <el-card shadow="hover">
          <User width="40" />
          <br />
          <el-button type="primary" v-on:click="$router.push({ path: '/rol' })"
            >General
          </el-button></el-card
        >
      </el-col>
       <el-col :span="10">
        <el-card shadow="hover">
          <User width="40" />
          <br />
          <el-button type="primary" v-on:click="$router.push({ path: '/rol' })"
            >Por fecha
          </el-button>
           <el-date-picker v-model="value1" style="width: 120px" type="date" placeholder="Pick a day" /></el-card
        >
      </el-col>

       <br />
    <br />
    <el-divider content-position="left"><h5>Reportes</h5></el-divider>

       <el-col :span="24">
       
     

<br>


      


 <el-divider content-position="left"><h5>Incumplidos</h5></el-divider>
  <div class="demo-progress">
    <el-progress type="circle"  color="red" :percentage="20" />
  </div>

      </el-col>

 <el-col :span="24">
       
       
<br>


     <el-divider content-position="left"><h5>Cumplidos</h5></el-divider>  
<div class="demo-progress">
    <el-progress type="circle" color="green" :percentage="80" />
  </div>


 
      </el-col>


    </el-row>

  </div>
</template>

<script>
import { User, Delete, Plus } from "@element-plus/icons-vue";
export default {
  components: {
    User,
    Delete,
    Plus,
  },
  data() {
    return {
      value1: ''
    };
  },
  methods: {},
};
</script>


<style lang="css" scoped>
.el-card {
  width: 150px !important;
}
.el-button {
  width: 100px !important;
}
</style>
