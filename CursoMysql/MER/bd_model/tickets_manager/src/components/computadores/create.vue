<template>
  <div class="create">
    <br />
    <br />
    <el-divider content-position="left"
      ><h1 style="color: #409eff; font-size: 30px">
        Creacion computadores
      </h1></el-divider>
    <br />
    <el-form 
      :model="form"
      label-width="130px"
      class="demo-ruleForm"
      :rules="rules"
    >
       <el-form-item label="tipo" prop="tipo">
         <el-input style="width: 20%" v-model="form.tipo" />
      </el-form-item>
    <el-form-item label="modelo" prop="modelo">
        <el-input style="width: 20%" v-model="form.modelo" />
      </el-form-item>
       <el-form-item label="marca" prop="marca">
         <el-input style="width: 20%" v-model="form.marca" />
      </el-form-item>
       <el-form-item label="descripcion" prop="descripcion">
         <el-input style="width: 20%" v-model="form.descripcion" />
      </el-form-item>
      <el-form-item label="serial" prop="serial">
        <el-input style="width: 20%" v-model="form.serial" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button v-on:click="$router.push({ path: '/computadores' })">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      computadoresOptions: [
        { label: "admin", value: 1 },
        { label: "agente", value: 2 },
      ],
      form: {
          id: "",
           tipo: "",
          modelo: "",
          marca: "",
          descripcion: "",
          serial: ""
      },
      rules: {
        id: [
          {
            required: true,
            message: "Por favor ingresar id",
          },
          {
            type: "number",
            message: "Solo numeros",
          },
        ],
        computadores: [
          {
            required: true,
            message: "Por favor ingresar primer id_stock_computers",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
      },
    };
  },
};
</script>
