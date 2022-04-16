<template>
  <div class="create">
    <br />
    <br />
    <el-divider content-position="left"
      ><h1 style="color: #409eff; font-size: 30px">
        Creacion proyecto
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
    <el-form-item label="nombre" prop="nombre">
        <el-input style="width: 20%" v-model="form.nombre" />
      </el-form-item>
      <el-form-item label="descripcion" prop="descripcion">
        <el-input style="width: 20%" v-model="form.descripcion" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button v-on:click="$router.push({ path: '/proyecto' })">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      proyectoOptions: [
        { label: "admin", value: 1 },
        { label: "agente", value: 2 },
      ],
      form: {
        id: "",
         nombre: "",
        descripcion: "",
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
        proyecto: [
          {
            required: true,
            message: "Por favor ingresar primer nombre",
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
