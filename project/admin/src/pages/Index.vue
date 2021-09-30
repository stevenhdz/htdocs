<template>
  <div>
    <div class="q-pa-md">
      <q-btn round color="primary" style="float: right" icon="shopping_cart" @click="layout = true" />

      <q-dialog v-model="layout">
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-header class="bg-primary">
            <q-toolbar>
              <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
              <q-toolbar-title>Catalogo de precios</q-toolbar-title>

              <q-btn flat v-close-popup round dense icon="close" />
            </q-toolbar>
          </q-header>

          <q-drawer bordered v-model="drawer" :width="200" :breakpoint="600" content-class="bg-grey-3 q-pa-sm">
            <div v-for="n in 1" :key="n">Drawer {{ n }}</div>
          </q-drawer>

          <q-page-container>
            <q-page padding>
              <q-card class="my-card">
                <div v-for="n in f" :key="n">
                  <q-img :src="n.url" />
                  <q-card-section>
                    <div class="row no-wrap items-center">
                      <div class="col text-h6 ellipsis">
                        {{ n.name }}
                      </div>
                    </div>
                  </q-card-section>
                  <q-card-section class="q-pt-none">
                    <div class="text-subtitle1">
                      <q-icon color="primary" name="sell" />
                      {{ n.price }}
                    </div>
                    <div class="text-caption text-grey">
                      Descripcion: {{ n.description }}
                    </div>
                  </q-card-section>
                  <q-separator />
                </div>
              </q-card>
              <br />
            </q-page>
          </q-page-container>
        </q-layout>
      </q-dialog>

   
 <q-btn flat @click="exportPDF()" round dense icon="menu" />
 


      <div class="q-pa-lg row items-start q-gutter-lg" style="float:right;">
        <q-card class="my-card">
          <q-card-section style="width:400px;   float:right;">
            <pre style="text-align: center;">Solicitud de pedidos:</pre>
            <h4 style="text-align: center;">Total: {{ fis23 }}</h4>
            <q-card class="my-card">
              <q-card-section>
                <div v-for="xis in fis" :key="xis">
                  {{ xis }}
                </div>
              </q-card-section>
            </q-card>
          </q-card-section>
        </q-card>
        <q-card class="my-card">
          <q-card-section style="width:400px;   float:right;">
            <pre style="text-align: center;">Solicitud de pedidos en progreso:</pre>
            <h4 style="text-align: center;">Total: 0</h4>
            <q-card class="my-card">
              <q-card-section>
                <div v-for="xis in fis" :key="xis">
                  {{ xis }}
                </div>
              </q-card-section>
            </q-card>
          </q-card-section>
        </q-card>
        <q-card class="my-card">
          <q-card-section style="width:400px;   float:right;">
            <pre style="text-align: center;">Solicitud de pedidos entregados:</pre>
            <h4 style="text-align: center;">Total: 0</h4>
            <q-card class="my-card">
              <q-card-section>
                <div v-for="xis in fis" :key="xis">
                  {{ xis }}
                </div>
              </q-card-section>
            </q-card>
          </q-card-section>
        </q-card>
      </div>

      <div class="q-pa-md row items-start q-gutter-md" style="width:460px;  float:left;">
        <q-card class="my-card">
          <q-card-section>
            <div class="q-pa-md q-gutter-sm">
              <pre>Buscar:</pre>
              <q-select filled v-model="model" use-input use-chips multiple label="Codigo del cliente"
                input-debounce="0" @new-value="createValue" :options="fis" @filter="filterFn"
                style="width: 250px;  float:left;" />

              <q-btn push style=" float:right;" color="primary" @click="view()" round icon="card_giftcard" />
            </div>
            <br />
            <br />
            <br />
            <q-card class="my-card">
              <q-card-section>
                <pre>{{ xxxx.cliente }}
        {{ xxxx.direccion }}
        {{ xxxx.fechaCompra }}
        {{ xxxx.numero }}
        {{ xxxx.tienda }}
        {{ xxxx.tipoDomicilio }}
        Mercado:
        </pre>
                <div class="q-pa-sm">
                  <q-table title="Productos" table-colspan="1" :data="xx3" :columns="columns" dense row-key="id">
                    <template v-slot:body="props">
                      <q-tr :props="props">
                        <q-td auto-width>
                          <q-btn size="sm" color="accent" round dense @click="props.expand = !props.expand"
                            :icon="props.expand != 0 ? 'remove' : 'add'" />
                        </q-td>
                        <q-td key="name" :props="props">
                          {{ props.row.name }}
                        </q-td>
                        <q-td key="price" :props="props">
                          {{ props.row.price }}
                        </q-td>
                        <q-td key="discount" :props="props">
                          <q-badge v-if="props.row.discount == props.row.discount"
                            :color="props.row.discount ? 'purple' : 'white'">
                            {{ props.row.discount }}
                          </q-badge>
                        </q-td>
                        <q-td key="cantidad" :props="props">
                          <q-btn size="sm" color="blue" round dense icon="add"
                            @click="incrementCounter(props.rowIndex)" />
                          {{ props.row.cantidad }}
                          <!-- {{props.key}} -->
                          <q-btn size="sm" color="blue" round dense icon="remove"
                            @click="incrementCounter1(props.rowIndex)" />
                        </q-td>
                      </q-tr>
                      <q-tr v-show="props.expand" :props="props">
                        <q-td colspan="100%">
                          <div class="text-left">
                            Descripcion producto: {{ props.row.description }}.
                          </div>
                        </q-td>
                      </q-tr>
                    </template>
                  </q-table>
                </div>
              </q-card-section>
            </q-card>

            <div class="q-ma-md">
              <p style="text-align: center">Total</p>
              <q-separator color="blue" inset />
              <q-scroll-area :thumb-style="thumbStyle" :content-style="contentStyle"
                :content-active-style="contentActiveStyle" style="height: 85px; max-width: auto;">
                <pre style="text-align: center; font-size:x-large">{{
                  "$ " + xxxx.total
                }}</pre>
              </q-scroll-area>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
  import jsPDF from 'jspdf';
  import * as autoTable from 'jspdf-autotable';
  const stringOptions = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
  export default {
    data() {
      return {
        f: [],
        n: [],
        xx3: [],
        new: [],
        xxxx: "",
        model: null,
        fis1: null,
        fis2: null,
        fis23: null,
        fis44: null,
        fis: [],
        columns: [
          {
            name: "",
            required: true,
            label: "",
            align: "left",
            field: row => row.name,
            format: val => `${val}`,
            sortable: true
          },
          {
            name: "name",
            align: "center",
            label: "Product",
            field: "name",
            sortable: true
          },
          {
            name: "price",
            align: "center",
            label: "precio",
            field: "price",
            sortable: true
          },
          {
            name: "discount",
            align: "center",
            label: "desc %",
            field: "discount",
            sortable: true
          },
          {
            name: "cantidad",
            align: "center",
            label: "cantidad",
            field: "cantidad",
            sortable: true
          }
        ],
        filterOptions: stringOptions,
        layout: false,
        lorem:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      };
    },
    methods: {
       exportPDF() {
      var vm = this
    
      

      var columns = [
        {title: "cliente", dataKey: "cliente"},
        {title: "direccion", dataKey: "direccion"},
        {title: "fechaCompra", dataKey: "fechaCompra"},
        {title: "numero", dataKey: "numero"},
        {title: "tienda", dataKey: "tienda"},
        {title: "total", dataKey: "total"}
      ];
      var doc = new jsPDF('p', 'pt');
      doc.text('Factura', 40, 40);
      doc.autoTable(columns, vm.new, {
        margin: {top: 60},
      });
      doc.save('todos.pdf');
    },
      createValue(val, done) {
        if (val.length > 0) {
          if (!stringOptions.includes(val)) {
            stringOptions.push(val);
          }
          done(val, "toggle");
        }
      },

      filterFn(val, update) {
        update(() => {
          if (val === "") {
            this.filterOptions = stringOptions;
          } else {
            const needle = val.toLowerCase();
            this.filterOptions = stringOptions.filter(
              v => v.toLowerCase().indexOf(needle) > -1
            );
          }
        });
      },
      sum() {
        this.x = this.n.reduce((sum, item) => sum + item.price * item.cantidad, 0);
      },
      incrementCounter(n) {
        if (this.xx3[n].cantidad >= 0 && this.xx3[n].cantidad < 99) {
          this.xx3[n].cantidad += 1;
        } else {
          this.xx3[n].cantidad = 1;
        }
      },
      incrementCounter1(n1) {
        if (this.xx3[n1].cantidad > 1 && this.xx3[n1].cantidad < 99) {
          this.xx3[n1].cantidad -= 1;
        } else {
          this.xx3[n1].cantidad = 1;
        }
      },

      async consult() {
        try {
          const res = await fetch(
            "https://webs-ea519-default-rtdb.firebaseio.com/web.json"
          );
          //respuesta
          const dataDB = await res.json();

          this.fis = Object.keys(dataDB);
        } catch (error) {
          console.log(error);
        }
      },

      async consultP() {
        try {
          const res = await fetch(
            "https://webs-ea519-default-rtdb.firebaseio.com/producto.json"
          );
          //respuesta
          const dataDB = await res.json();
          this.f = dataDB;
        } catch (error) {
          console.log(error);
        }
      },

      async view() {
        const res = await fetch(
          "https://webs-ea519-default-rtdb.firebaseio.com/web.json"
        );
        //respuesta
        const dataDB = await res.json();
        this.fis1 = Object.assign([], dataDB);

        this.xxxx = this.fis1[this.model[0]];

               this.new.push(this.xxxx)

        var c2 = [];
        this.xxxx.productos.forEach(element => {
          c2.push(element);
        });
        this.xx3 = c2;
        console.log(this.xx3);
      },

    async view2() {
        const res = await fetch(
          "https://webs-ea519-default-rtdb.firebaseio.com/web.json"
        );
        //respuesta
        const dataDB2 = await res.json();
        this.fis2 = Object.values(dataDB2);

          var hit = []
          this.fis2.forEach(s=>{
            hit.push(s)
          })

          this.fis44 = hit

          this.fis23 = this.fis44.reduce((sum, item) => sum + item.total, 0);

      }

    },
    mounted() {
      this.consult();
      this.consultP();
      this.view2();
    }
  };
</script>
