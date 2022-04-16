<template>
  <div class="about">
    <br />
    <br />
    <el-button
      type="primary"
      style="float: left"
      v-on:click="$router.push({ path: '/crear/computadores' })"
      ><el-icon size="100"><Plus /></el-icon
          ></el-button
    >
    <br />
    <br />
    <br />
    <br />
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="id" label="id" />
      <el-table-column prop="tipo" label="tipo" />
       <el-table-column prop="modelo" label="modelo" />
        <el-table-column prop="marca" label="marca" />
         <el-table-column prop="descripcion" label="descripcion" />
          <el-table-column prop="serial" label="serial" />
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
              $router.push({ path: '/editar/computadores/' + scope.row.id })
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
          tipo: "portatil",
          modelo: "2021",
          marca: "asus",
          descripcion: "i7 de 8 gen 8gb ram ssd 128gb",
          serial: "3288sdsda77t37"
        },
        {
          id: "2",
           tipo: "mesa",
          modelo: "2022",
          marca: "asus",
          descripcion: "i7 de 10 gen 8gb ram ssd 128gb",
          serial: "3288sdsdasasa77t37"
        },
      ],
    };
  },
  methods: {
    deleteOne(id) {
      this.$swal
        .fire({
          title: "Seguro deseas eliminar el computadores " + id + " ?",
          text: "",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Eliminar",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$swal.fire("Elimando!", "computadores " + id, "success");
          }
        });
    },
  },
};
</script>
