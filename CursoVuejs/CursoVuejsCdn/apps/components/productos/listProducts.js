const listProducts = Vue.component("listProducts", {
  data() {
    return {
      re: [],
      page: 1,
      pageSize: 10,
      res: [],
      buscar: "",
    };
  },
  created() {},
  methods: {
    handleCurrentChange(val) {
      console.log(`current page: ${val}`);
      this.page = val;
    },

    deleteProducts(id){
        const query = new AjaxAxios(axios,window.location.origin +"/CursoVuejs/CursoVuejsCdn/server/perf/request.php");
        query
            .post({deleteProducts: true,id: id})
            .then((r) => {
                alert(JSON.stringify(r.data));
                window.location.reload('http://localhost/Cursovuejs/CursoVuejsCdn/apps/#/listProducts')
            })
            .catch((r) => {
                console.log(r);
            });
    }
  },
  computed: {
      displayData() {
        if (!this.res || this.res.length === 0) return [];
        return this.res.slice(
          this.pageSize * this.page - this.pageSize,
          this.pageSize * this.page
        );
      }
  },
  mounted() {

    const query = new AjaxAxios(axios,window.location.origin + "/CursoVuejs/CursoVuejsCdn/server/perf/request.php");
    query
      .post({listOproductos: true})
      .then((r) => {
        this.re.push(r);
        this.re.forEach((element) => {
          this.res = element.data;
          console.log(this)
          this.$store.commit('all',this.res)
        });
      })
      .catch((r) => {
        console.log(r);
      });
      //timsteamp a date
  },
  template: `
        <div>

          <el-card class="box-card">
          
        
            <router-link to="/productos" tag="a"><i class="el-icon-plus"></i></router-link>

            <el-select v-model="buscar" clearable filterable placeholder="Search" size="mini" style="width : 200px; heigth : 5px; float: right; ">
            </el-select>

            <el-table :data="displayData" :default-sort = "{prop: 'create.$date.$numberLong', order: 'descending'}" style="width: 100% background-color: blue" >


            <el-table-column
                label=""
                width="40">
                <template slot-scope="scope">
                  <el-button @click="deleteProducts(scope.row._id.$oid)" type="text" size="small"><i class="el-icon-delete"></i></el-button>
                </template>
              </el-table-column>
            
              <el-table-column prop="_id.$oid" label="Id" width="200px" >
                <template slot-scope="scope">
                    <router-link :to="'/editProducts/' + scope.row._id.$oid + '/' " >
                      <el-link type="primary">{{ scope.row._id.$oid}}</el-link>
                      </router-link>
                </template>
              </el-table-column>

              <el-table-column sortable prop="newText.newText" label="newText" width="150px" >
              </el-table-column>
              <el-table-column sortable prop="newText.newText2" label="newText2" width="150px">
              </el-table-column>
              <el-table-column sortable prop="newText.country" label="country" width="150px">
              </el-table-column>
              <el-table-column sortable prop="create.$date.$numberLong" label="Date" width="150px">
              </el-table-column>
            </el-table>

            <br>

            <el-pagination background layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="pageSize"
            :total="res.length" style="text-align: center;">
          </el-pagination>

          </el-card>
     
        </div>
    `,
});
