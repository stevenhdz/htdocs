<template>
  <div class="about">
    <br />
    <br />
    <el-button
      type="primary"
      style="float: left"
      v-on:click="$router.push({ path: '/crear/comentario' })"
      ><el-icon size="100"><Plus /></el-icon
          ></el-button
    >
    <br />
    <br />
    <br />
    <br />
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="id" label="id" />
      <el-table-column prop="descripcion" label="descripcion" />
      <el-table-column prop="ticket_id" label="ticket id" />
      <el-table-column prop="user_id" label="user id" />
      <el-table-column fixed="right" label="Operations" width="200">
        <template #default="scope">
          <el-button
            type="danger"
            size="small"
            v-on:click="deleteOne(scope.row.id)"
          >
            <el-icon size="100"><Delete /></el-icon
          ></el-button>
          <el-button
            type="warning"
            size="small"
            v-on:click="
              $router.push({ path: '/editar/comentario/' + scope.row.id })
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
          id: "1",
          descripcion: "admin",
          ticket_id: "10",
          user_id: "alex",
        },
        {
          id: "2",
          descripcion: "agente",
          ticket_id: "11",
          user_id: "steven",
        },
      ],
    };
  },
  methods: {
    deleteOne(id) {
      this.$swal
        .fire({
          title: "Seguro deseas eliminar el comentario " + id + " ?",
          text: "",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Eliminar",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$swal.fire("Elimando!", "comentario " + id, "success");
          }
        });
    },
  },
};
</script>
