<template>
  <div class="about">
    <br />
    <br />
    <el-divider content-position="left"
      ><h1 style="color: #409eff; font-size: 30px">
        Creacion usuarios
      </h1></el-divider
    >
    <br />
    <el-form
      :model="form"
      label-width="130px"
      class="demo-ruleForm"
      :rules="rules"
    >
      <el-form-item label="Cedula" prop="cedula">
        <el-input style="width: 20%" v-model.number="form.cedula" />
      </el-form-item>
      <el-form-item label="Primer Nombre" prop="nombre1">
        <el-input style="width: 20%" v-model="form.nombre1" />
      </el-form-item>
      <el-form-item label="Segundo Nombre">
        <el-input style="width: 20%" v-model="form.nombre2" />
      </el-form-item>
      <el-form-item label="Primer Apellido" prop="apellido1">
        <el-input style="width: 20%" v-model="form.apellido1" />
      </el-form-item>
      <el-form-item label="Segundo Apellido">
        <el-input style="width: 20%" v-model="form.apellido2" />
      </el-form-item>
      <el-form-item label="Correo" prop="correo">
        <el-input style="width: 20%" v-model="form.correo" />
      </el-form-item>
      <el-form-item label="Contraseña">
        <el-input
          style="width: 10%"
          v-model="form.contrasena"
          type="password"
          placeholder="Please input password"
          show-password
        />
      </el-form-item>
      <el-form-item label="Celular">
        <el-input style="width: 10%" v-model="form.numero" />
      </el-form-item>
      <el-form-item label="Usuario activo">
        <el-switch v-model="form.activo" />
      </el-form-item>
      <el-form-item label="Rol">
        <el-select v-model="form.rol" class="m-2" placeholder="Select">
          <el-option
            v-for="item in rolOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Fecha Ingreso">
        <el-date-picker
          v-model="form.fechaIngreso"
          type="date"
          placeholder="Pick a day"
          disabled
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rolOptions: [
        { label: "admin", value: 1 },
        { label: "agente", value: 2 },
      ],
      form: {
        cedula: "",
        nombre1: "",
        nombre2: "",
        apellido1: "",
        apellido2: "",
        correo: "",
        contrasena: "",
        numero: "",
        activo: true,
        rol: "",
        fechaIngreso: new Date(),
        desc: "",
      },
      rules: {
        cedula: [
          {
            required: true,
            message: "Por favor ingresar cedula",
          },
          {
            type: "number",
            message: "Solo numeros",
          },
        ],
        nombre1: [
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
        apellido1: [
          {
            required: true,
            message: "Por favor ingresar primer apellido",
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
