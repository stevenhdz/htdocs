<template>
  <div class="about">
    <br />
    <br />
    <el-button
      type="primary"
      style="float: left"
      v-on:click="$router.push({ path: '/crear/adquisicion' })"
      ><el-icon size="100"><Plus /></el-icon
          ></el-button
    >
    <br />
    <br />
    <br />
    <br />
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="id" label="id" />
      <el-table-column prop="id_proveedor" label="id_proveedor" />
      <el-table-column prop="id_shopping" label="id_shopping" />
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
              $router.push({ path: '/editar/adquisicion/' + scope.row.id })
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
          id_proveedor: "1",
          id_shopping: "alex",
          
        },
        {
            id: "1",
          id_proveedor: "1",
          id_shopping: "alex",
        },
      ],
    };
  },
  methods: {
    deleteOne(id) {
      this.$swal
        .fire({
          title: "Seguro deseas eliminar el adquisicion " + id + " ?",
          text: "",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Eliminar",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$swal.fire("Elimando!", "adquisicion " + id, "success");
          }
        });
    },
  },
};
</script>
