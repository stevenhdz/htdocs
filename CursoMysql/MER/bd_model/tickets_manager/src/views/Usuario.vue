<template>
  <div class="about">
    <br />
    <br />
    <el-button
      type="primary"
      style="float: left"
      v-on:click="$router.push({ path: '/crear/usuario' })"
      ><el-icon size="100"><Plus /></el-icon
          ></el-button
    >
    <br />
    <br />
    <br />
    <br />
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="cedula" label="cedula" />
      <el-table-column prop="nombre1" label="primer nombre" />
      <el-table-column prop="nombre2" label="segundo nombre" />
      <el-table-column prop="apellido1" label="primer apellido" />
      <el-table-column prop="apellido2" label="segundo apellido" />
      <el-table-column prop="correo" label="correo" />
      <el-table-column prop="contrasena" label="contrasena" />
      <el-table-column prop="numero" label="numero" />
      <el-table-column prop="activo" label="activo" />
      <el-table-column prop="rol" label="rol" />
      <el-table-column prop="fechaIngreso" label="fecha ingreso" />
      <el-table-column prop="fechaActualizacion" label="fecha actualizacion" />
      <el-table-column fixed="right" label="Operations" width="200">
        <template #default="scope">
          <el-button
            type="danger"
            size="small"
            v-on:click="deleteOne(scope.row.cedula)"
          >
            <el-icon size="100"><Delete /></el-icon
          ></el-button>
          <el-button
            type="warning"
            size="small"
            v-on:click="
              $router.push({ path: '/editar/usuario/' + scope.row.cedula })
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
          cedula: "1212",
          nombre1: "steven",
          nombre2: "alexander",
          apellido1: "hernandez",
          apellido2: "jimenez",
          correo: "steven@prueba.com",
          contrasena: "sudhushduas",
          numero: "3090202023",
          activo: true,
          rol: "admin",
          fechaIngreso: new Date(),
          fechaActualizacion: new Date(),
        },
        {
          cedula: "1213",
          nombre1: "steven",
          nombre2: "alexander",
          apellido1: "hernandez",
          apellido2: "jimenez",
          correo: "steven@prueba.com",
          contrasena: "sudhushduas",
          numero: "3090202023",
          activo: true,
          rol: "admin",
          fechaIngreso: new Date(),
          fechaActualizacion: new Date(),
        },
      ],
    };
  },
  methods: {
    deleteOne(id) {
      this.$swal
        .fire({
          title: "Seguro deseas eliminar el usuario " + id + " ?",
          text: "",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Eliminar",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$swal.fire("Elimando!", "Usuario " + id, "success");
          }
        });
    },
  },
};
</script>
