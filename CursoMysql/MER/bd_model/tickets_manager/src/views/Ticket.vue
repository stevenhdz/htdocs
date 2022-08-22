<template>
  <div class="about">
    <br />
    <br />
    <el-button
      type="primary"
      style="float: left"
      v-on:click="$router.push({ path: '/crear/ticket' })"
      ><el-icon size="100"><Plus /></el-icon
          ></el-button
    >
    <br />
    <br />
    <br />
    <br />
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="idTicket" label="idTicket"  />
      <el-table-column prop="title" label="title" />
      <el-table-column prop="description" label="description" />
      <el-table-column prop="solution" label="solution" />
      <el-table-column prop="updated" label="updated" />
      <el-table-column prop="created" label="created" />
      <el-table-column prop="type_id" label="type_id"  />
      <el-table-column prop="user_id" label="user_id"  />
      <el-table-column prop="agent_id" label="agent_id"  />
      <el-table-column prop="project_id" label="project_id" />
      <el-table-column prop="category_id" label="category_id" />
      <el-table-column prop="priority_id" label="priority_id" />
      <el-table-column prop="status_id" label="status_id" />
     
      <el-table-column fixed="right" label="Operations" width="200">
        <template #default="scope">
          <el-button
            type="danger"
            size="small"
            v-on:click="deleteOne(scope.row.idTicket)"
          >
            <el-icon size="100"><Delete /></el-icon
          ></el-button>
          <el-button
            type="warning"
            size="small"
            v-on:click="
              $router.push({ path: '/editar/ticket/' + scope.row.idTicket })
            "
            ><el-icon size="100"><Edit /></el-icon
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { Edit, Delete, Plus } from "@element-plus/icons-vue";
export default {
  components: {
    Edit,
    Delete,
    Plus
  },
  data() {
    return {
      tableData: [
        {
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
        {
        idTicket: "2", 
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
      ],
    };
  },
  methods: {
    deleteOne(id) {
      this.$swal
        .fire({
          title: "Seguro deseas eliminar el ticket " + id + " ?",
          text: "",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Eliminar",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$swal.fire("Elimando!", "ticket " + id, "success");
          }
        });
    },
  },
};
</script>