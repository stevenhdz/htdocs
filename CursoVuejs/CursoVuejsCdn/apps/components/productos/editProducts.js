const editProducts = Vue.component("editProducts", {
    data() {
        return {
            fin: []
            ,fin2:[]
            ,fin3:[]
        };
    },
    created() {
    },
    methods: {
            editProducts(){
                const query = new AjaxAxios(axios,window.location.origin +"/CursoVuejs/CursoVuejsCdn/server/perf/request.php");
                query
                    .post({editProducts: true,data: this.fin,id: this.$route.params.id})
                    .then((r) => {
                        alert(JSON.stringify(r.data));
                        window.location.replace('http://localhost/Cursovuejs/CursoVuejsCdn/apps/#/listProducts')
                    })
                    .catch((r) => {
                        console.log(r);
                    });
            }
    },
    mounted() {
        const query = new AjaxAxios(axios,window.location.origin + "/CursoVuejs/CursoVuejsCdn/server/perf/request.php");
          query
            .post({listOproduct: true,data: this.$route.params.id})
            .then((r) => {
              this.fin2 = r.data.datos.newText
              this.fin = r.data.datos
            })
            .catch((r) => {
              console.log(r);
            });  
    },
    template: `
        <div>
            <h1>Hola</h1>

            <template slot-scope="scope">
                    <router-link :to="'/editProducts/' + scope.row._id.$oid + '/' " >
                      <el-link type="primary">{{ scope.row._id.$oid}}</el-link>
                      </router-link>
                </template>


            <el-input
            placeholder="Please input"
            v-model="fin2.newText2" style="width: 150px;" 
            clearable>
            </el-input>

            <el-input
            placeholder="Please input"
            v-model="fin2.country" style="width: 150px;" 
            clearable>
            </el-input>

                <el-input
                placeholder="Please input"
                v-model="fin2.newText" style="width: 150px;" 
                clearable>
                </el-input>

                

                <el-button type="primary" @click="editProducts">Primary</el-button>
        </div>
    `,
});
