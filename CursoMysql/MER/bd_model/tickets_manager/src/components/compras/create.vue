<template>
  <div class="create">
    <br />
    <br />
    <el-divider content-position="left"
      ><h1 style="color: #409eff; font-size: 30px">
        Creacion compras
      </h1></el-divider>
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
       <el-form-item label="count" prop="count">
         <el-input-number vstyle="width: 20%" v-model="form.count" :min="1" :max="10" />
      </el-form-item>
    <el-form-item label="descripcion" prop="descripcion">
        <el-input style="width: 20%" v-model="form.descripcion" />
      </el-form-item>
      <el-form-item label="date" prop="date">
          <el-date-picker
          v-model="form.date"
          type="date"
          placeholder="Pick a day"
          disabled
        />
      </el-form-item>
      <el-form-item label="id_user" prop="id_user">
        <el-input style="width: 20%" v-model="form.id_user" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button v-on:click="$router.push({ path: '/compras' })">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comprasOptions: [
        { label: "admin", value: 1 },
        { label: "agente", value: 2 },
      ],
      form: {
          id: "",
           count: "",
          descripcion: "",
          date: "",
          id_user: ""
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
        compras: [
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
