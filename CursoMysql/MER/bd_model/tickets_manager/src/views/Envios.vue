<template>
  <div class="about">
    <br />
    <br />
    <el-button
      type="primary"
      style="float: left"
      v-on:click="$router.push({ path: '/crear/envios' })"
      ><el-icon size="100"><Plus /></el-icon
          ></el-button
    >
    <br />
    <br />
    <br />
    <br />
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="id" label="id" />
      <el-table-column prop="proyecto" label="proyecto" />
      <el-table-column prop="date" label="date" />
      <el-table-column prop="estados" label="estados" />
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
              $router.push({ path: '/editar/envios/' + scope.row.id })
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
          proyecto: "ingenieria crm",
          date: new Date(),
          estados: 'En despacho'
          
        },
        {
            id: "2",
          proyecto:  "ingenieria crm",
          date: new Date(),
          estados: 'En despacho'
        },
      ],
    };
  },
  methods: {
    deleteOne(id) {
      this.$swal
        .fire({
          title: "Seguro deseas eliminar el envios " + id + " ?",
          text: "",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Eliminar",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$swal.fire("Elimando!", "envios " + id, "success");
          }
        });
    },
  },
};
</script>
