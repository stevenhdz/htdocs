<template>

  <div class="hello">




<el-row :gutter="10">
  <el-col :xs="12" :sm="8" :md="12" :lg="12" :xl="12">
    <div class="grid-content bg-purple">
        <el-card v-for="lenguaje in lenguajes" :key="lenguaje.id">
            {{lenguaje}}
        </el-card>
    </div>
  </el-col>
  <el-col :xs="12" :sm="8" :md="12" :lg="12" :xl="12">
    <div class="grid-content bg-purple-light">
        <el-card v-for="database in database" :key="database.id">
            {{database}}
        </el-card>
    </div>
  </el-col>
  <el-col :xs="12" :sm="8" :md="12" :lg="12" :xl="12">
    <div class="grid-content bg-purple">
        <el-card v-for="others in others" :key="others.id">
            {{others}}
            <img :src='others' alt="">
        </el-card>
    </div>
  </el-col>
</el-row>




</div>
</template>


<script>
export default {
   data() {
    return {
      nivel: 0,
      lenguajes: { 
        php: 'https://desarrolloweb.com/storage/tag_images/actual/6T8eGecQ0XXvTHOvic4ba8mlQXmSEW3vrI7jenmv.png',
        javascript: 'javascript',
        python: 'python',
      },
      database: {  
        mysql: 'mysql', 
        sqlite: 'sqlite', 
        mongodb: 'mongodb'
      },
      others:{
        css: 'css',
        html: 'html',
        vuejs: 'vuejs',
        element: 'element-ui'
      }   
    };
  },
  methods: {
      
    }
}
</script>


<style scoped>
 .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>

