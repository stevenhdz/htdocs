<template>
  <div class="create">
    <br />
    <br />
    <el-divider content-position="left"
      ><h1 style="color: #409eff; font-size: 30px">
        Creacion adquisicion
      </h1></el-divider
    >
    <br />
    <el-form 
      :model="form"
      label-width="130px"
      class="demo-ruleForm"
      :rules="rules"
    >
      <el-form-item label="id" prop="id">
        <el-input style="width: 20%" v-model.number="form.id" />
      </el-form-item>
    <el-form-item label="id_proveedor" prop="id_proveedor">
        <el-input style="width: 20%" v-model="form.id_proveedor" />
      </el-form-item>
      <el-form-item label="id_shopping" prop="id_shopping">
        <el-input style="width: 20%" v-model="form.id_shopping" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button v-on:click="$router.push({ path: '/adquisicion' })">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adquisicionOptions: [
        { label: "admin", value: 1 },
        { label: "agente", value: 2 },
      ],
      form: {
          id: "",
          id_proveedor: "",
          id_shopping: "",
          
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
        adquisicion: [
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
