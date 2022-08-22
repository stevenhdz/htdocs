<template>
  <div class="home">
    <h1>Gestion Medicos</h1>

    <el-form :model="form" label-width="120px">
      <el-form-item label="Cedm">
        <el-input v-model="form.Cedm" />
      </el-form-item>
      <el-form-item label="Nom1">
        <el-input v-model="form.Nom1" />
      </el-form-item>
      <el-form-item label="Nom2">
        <el-input v-model="form.Nom2" />
      </el-form-item>
      <el-form-item label="Apellido1">
        <el-input v-model="form.Apellido1" />
      </el-form-item>
      <el-form-item label="Apellido2">
        <el-input v-model="form.Apellido2" />
      </el-form-item>
      <el-form-item label="Tel">
        <el-input v-model="form.Tel" />
      </el-form-item>
      <el-form-item label="Celular">
        <el-input v-model="form.Celular" />
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="form.Email" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Crear</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>

      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="Id Estudio" prop="Id_Estudio" />
        <el-table-column label="Id Titulo" prop="Titulo" />
        <el-table-column label="Fecha Graduacion" prop="Fecha_Graduacion" />
         <el-table-column label="Id Medico" prop="Id_Medico" />
        <el-table-column align="right">
          <template #header>
            <el-input
              v-model="search"
              size="small"
              placeholder="Type to search"
            />
          </template>
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
              >Edit</el-button
            >
          </template>
        </el-table-column>
      </el-table>

       <div class="demo-pagination-block">
          <div class="demonstration">All combined</div>
          <el-pagination
            v-model.currentPage="currentPage4"
            v-model.page-size="pageSize4"
            :page-sizes="[100, 200, 300, 400]"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      tableData: [
        {
          Id_Estudio: 1,
          Titulo: "Ingeniero civil",
          Fecha_Graduacion: "2016-05-03",
          Id_Medico: "101010"
        },
        {
          Id_Estudio: 2,
          Titulo: "Ingeniero sistemas",
          Fecha_Graduacion: "2016-05-03",
          Id_Medico: "101010"
        },
        {
          Id_Estudio: 3,
          Titulo: "Tecnologo en desarrollo de software",
          Fecha_Graduacion: "2016-05-03",
          Id_Medico: "101010"
        },
        {
          Id_Estudio: 4,
          Titulo: "Ingeniero ambiental",
          Fecha_Graduacion: "2016-05-03",
          Id_Medico: "101010"
        },
      ],
      form: {
        Cedm: "101010",
        Nom1: "steven",
        Nom2: "alexander",
        Apellido1: "hernandez",
        Apellido2: "jimenez",
        Tel: "30303030303",
        Celular: "939393939",
        Email: "steven@prueba.com"
      },
      currentPage3: 3,
      currentPage4: 4,
      pageSize4: 100,
      pageSize3: 300,
      small: false,
      background: false,
      disabled: false,
    };
  },
  methods: {
    handleSizeChange() {
      console.log(`items per page`);
    },
    handleCurrentChange() {
      console.log(`current page:`);
    },
  },
};
</script>

<style scoped>
.el-input {
  width: 250px;
}

.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
  text-align: center;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>
