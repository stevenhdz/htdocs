<template>
  <div class="create">
    <br />
    <br />
    <el-divider content-position="left"
      ><h1 style="color: #409eff; font-size: 30px">
        Editando ticket {{$route.params.id}}
      </h1></el-divider
    >
    <br />
    <el-form 
      :model="form"
      label-width="130px"
      class="demo-ruleForm"
      :rules="rules"
    >
      <el-form-item label="idTicket">
        <el-input style="width: 20%" v-model.number="form.idTicket" />
      </el-form-item>
      <el-form-item label="title" prop="nombre1">
        <el-input style="width: 20%" v-model="form.title" />
      </el-form-item>
      <el-form-item label="description">
        <el-input style="width: 20%" v-model="form.description" />
      </el-form-item>
      <el-form-item label="files" prop="apellido1">
        <el-input style="width: 20%" v-model="form.files" />
      </el-form-item>
      <el-form-item label="solution">
        <el-input style="width: 20%" v-model="form.solution" />
      </el-form-item>
       <el-form-item label="updated Ingreso">
        <el-date-picker
          v-model="form.updated"
          type="date"
          placeholder="Pick a day"
          disabled
        />
      </el-form-item>
       <el-form-item label="created Ingreso">
        <el-date-picker
          v-model="form.created"
          type="date"
          placeholder="Pick a day"
          disabled
        />
      </el-form-item>
      <el-form-item label="type" >
        <el-input style="width: 20%" v-model="form.type_id" />
      </el-form-item>
      <el-form-item label="user">
        <el-input style="width: 10%" v-model="form.user_id" />
      </el-form-item>
        <el-form-item label="agent">
        <el-input style="width: 10%" v-model="form.agent_id" />
      </el-form-item>
        <el-form-item label="project">
        <el-input style="width: 10%" v-model="form.project_id" />
      </el-form-item>
        <el-form-item label="category">
        <el-input style="width: 10%" v-model="form.category_id" />
      </el-form-item>
        <el-form-item label="priority">
        <el-input style="width: 10%" v-model="form.priority_id" />
      </el-form-item>
        <el-form-item label="status">
        <el-input style="width: 10%" v-model="form.status_id" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button v-on:click="$router.push({ path: '/ticket' })">Cancel</el-button>
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
        idTicket: "1", 
        title: "problemas en el equipo",
        description: "no enciende",
        files: "",
        solution: "",
        updated: "",
        created: new Date(),
        type_id: "incidente", 
        user_id: "alex", 
        agent_id: "steven", 
        project_id: "ingenieria crm", 
        category_id: "equipos", 
        priority_id: "Alta", 
        status_id: "Abierto", 
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
