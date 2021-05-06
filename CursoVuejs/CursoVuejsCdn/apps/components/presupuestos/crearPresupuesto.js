const presupuestos = Vue.component('presupuestos', {
    data() {
        return {
            productosData: [{
                nroSerie: 0,
                Nombre: { pto : 'Licencia RPA', desc: 'automatiza procesos' },
                precio: 54000,
                cantidad: 1,
                importe: 54.28,
                descuento: 0,
                impuesto: 0,
                total: 0,
              },{
                nroSerie: 1,
                Nombre: { pto : 'Licencia CRM', desc: 'gestiona tus clientes' },
                precio: 744000,
                cantidad: 1,
                importe: 84.28,
                descuento: 0,
                impuesto: 0,
                total: 0,
              }]
        }
    },
    created() {
        console.log("estoy creando pto")
    },
    methods: {

        clearPto(index) {
            Object.keys(this.productosData[index]).forEach(propiedadActual => {

                if ( propiedadActual == 'nroSerie' ) return;

                if( propiedadActual == "Nombre" ){
                    this.productosData[index][propiedadActual].desc = ''
                    this.productosData[index][propiedadActual].pto = ''
                }
                else
                    this.productosData[index][propiedadActual] = 0
            });
        },

    },
    template: `
        <div>

            <el-table :data="productosData" style="width: 100%">

                    <el-table-column label="nroSerie">
                        <template slot-scope="scope">
                            {{ scope.row.nroSerie + 1 }}
                        </template>
                    </el-table-column>

                    <el-table-column label="Nombre">
                        <template slot-scope="scope">
                            <el-button @click="clearPto(scope.$index)" style="margin-bottom: 10px;" size="mini"  type="danger" icon="el-icon-delete" circle></el-button>
                            <el-input placeholder="pto" size="mini" v-model="scope.row.Nombre.pto" ></el-input>
                            <el-input placeholder="desc" size="mini" v-model="scope.row.Nombre.desc" ></el-input>
                        </template>
                    </el-table-column>

                    <el-table-column label="precio">
                        <template slot-scope="scope">
                            <el-input-number placeholder="precio" size="mini" v-model="scope.row.precio" ></el-input-number>
                        </template>
                    </el-table-column>
                    <el-table-column label="cantidad">
                        <template slot-scope="scope">
                            <el-input-number placeholder="cantidad" size="mini" v-model="scope.row.cantidad" ></el-input-number>
                        </template>
                    </el-table-column>

                    <el-table-column  prop="importe" label="importe"></el-table-column>

                    <el-table-column label="descuento">
                        <template slot-scope="scope">
                            <span> {{ scope.row.descuento}} </span>
                        </template>
                    </el-table-column>

                    <el-table-column label="impuesto">
                        <template slot-scope="scope">
                            <span> {{ scope.row.impuesto}} </span>
                        </template>
                    </el-table-column>

                    <el-table-column prop="total" label="total"></el-table-column>

                </el-table>

        </div>
    `
})