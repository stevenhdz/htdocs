const productos = Vue.component("productos", {
    data() {
        return {
            f: {
                newText: "",
                newText2: "",
                country: ""
            },
        };
    },
    created() {
        
    },
    methods: {

        addproductos(){
        
                let com = this;

            const query = new AjaxAxios(axios,window.location.origin +"/CursoVuejs/CursoVuejsCdn/server/perf/request.php");
            query
                .post({addproductos: true,newText: com.f})
                .then((r) => {
                    alert(JSON.stringify(r.data));
                    window.location.replace('http://localhost:8882/Cursovuejs/CursoVuejsCdn/apps/#/listProducts')
                })
                .catch((r) => {
                    console.log(r);
                });
        }
    },
    mounted() {
    },
    template: `
        <div>

            <el-card class="box-card">
                <h1>Hola</h1>
        
                <el-form ref="form" :model="form" label-width="120px">
        
                    <el-form-item label="newText2">
                        <el-input placeholder="Please input" v-model="f.newText2" style="width: 150px;" clearable>
                        </el-input>
                    </el-form-item>
        
                    <el-form-item label="country">
                        <el-input placeholder="Please input" v-model="f.country" style="width: 150px;" clearable>
                        </el-input>
                    </el-form-item>
        
                    <el-form-item label="newText">
                        <el-input placeholder="Please input" v-model="f.newText" style="width: 150px;" clearable>
                        </el-input>
                    </el-form-item>
        
                    <el-form-item>
                        <el-button type="primary" @click="addproductos()">Guardar</el-button>
                    </el-form-item>
                    
                </el-form>
        </el-card>
        
                
        </div>
    `,
});
