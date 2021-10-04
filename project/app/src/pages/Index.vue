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

      <div class="q-gutter-y-md column" style="max-width: 180px;">
        <q-select color="orange" filled v-model="model1" :options="options" label="Tienda" :dense="dense">
          <template v-if="model1" v-slot:append>
            <q-icon name="cancel" @click.stop="model1 = null" class="cursor-pointer" />
          </template>
        </q-select>
        <q-select v-if="model1 != ''" clearable style="max-width: auto; float: right" color="orange" standout
          bottom-slots v-model="modelyyy" :dense="dense" :options="options1" label="Entrega">
          <template v-slot:prepend>
            <q-icon name="place" />
          </template>
        </q-select>
      </div>
    </div>

    <div class="q-pa-md" v-if="modelyyy == 'Domicilio'">
      <q-card class="my-card" flat>
        <q-card-section horizontal>
          <q-card-section>
            <q-input bottom-slots v-model="text" style="width: auto;" label="Direccion" required :dense="dense">
              <template v-slot:prepend>
                <q-icon name="place" />
              </template>
            </q-input>
          </q-card-section>
          <q-separator vertical />
          <q-card-section>
            <q-input bottom-slots v-model="text1" style="width: auto;" label="Nombres completos" required
              :dense="dense">
              <template v-slot:prepend>
                <q-icon name="people" />
              </template>
            </q-input>
          </q-card-section>
          <q-separator vertical />
          <q-card-section>
            <q-input bottom-slots v-model="text2" style="width: auto;" label="Telefono" required :dense="dense">
              <template v-slot:prepend>
                <q-icon name="phone" />
              </template>
            </q-input>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>

    <div class="q-pa-md">
      <div class="q-gutter-md">

<el-select v-model="model" clearable filterable multiple placeholder="Select">
    <el-option
      v-for="item in f"
      :key="item.id"
      :label="item.name"
      :value="item.name">
    </el-option>
  </el-select>
        <q-select filled v-model="model" :options="f" label="Seleccionar producto" multiple emit-value map-options
          :dense="dense">
          <template v-slot:option="{
              itemProps,
              itemEvents,
              opt,
              selected,
              toggleOption
            }">
            <q-item v-bind="itemProps" v-on="itemEvents">
              <q-item-section>
                <q-item-label v-html="opt.name"></q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-toggle :value="selected" @input="toggleOption(opt)" />
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>
    </div>




    <div class="q-pa-sm">
      <q-table title="Carrito de productos" table-colspan="1" :data="n" :columns="columns" dense row-key="id">
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
              <q-badge v-if="props.row.discount == props.row.discount "
                :color="props.row.discount ? 'purple' : 'white'">
                {{ props.row.discount }}
              </q-badge>
            </q-td>
            <q-td key="cantidad" :props="props">
              <q-btn size="sm" color="blue" round dense icon="add" @click="incrementCounter(props.rowIndex)" />
              {{ props.row.cantidad }}
              <!-- {{props.key}} -->
              <q-btn size="sm" color="blue" round dense icon="remove" @click="incrementCounter1(props.rowIndex)" />
            </q-td>

          </q-tr>
          <q-tr v-show="props.expand" :props="props">
            <q-td colspan="100%">
              <div class="text-left">Descripcion producto: {{ props.row.description }}.</div>
            </q-td>
          </q-tr>
        </template>

      </q-table>
    </div>






    <div class="q-pa-md q-gutter-sm">
      <q-btn :loading="loading4" color="primary" @click="
          simulateProgress(4);
          empuje();
          sum();
          porcentaje();
          autoincrement()
        " style="width: 130px; float: right">
        Agregar a carrito
        <template v-slot:loading>
          <q-spinner-hourglass class="on-left" />
          Cargando...
        </template>
      </q-btn>

      <q-btn v-if=" viewBtn == true" :loading="loading3" color="primary" @click="
          simulateProgress1(3);
          empuje();
          sum();
          porcentaje();
          autoincrement()
        " style="width: 130px; float: right">
        calcular total
        <template v-slot:loading>
          <q-spinner-hourglass class="on-left" />
          Cargando...
        </template>
      </q-btn>
    </div>

    <div class="q-ma-md">
      <p style="text-align: center">Total</p>
      <q-separator color="blue" inset />
      <q-scroll-area v-if=" viewBtn2 == true" :thumb-style="thumbStyle" :content-style="contentStyle"
        :content-active-style="contentActiveStyle" style="height: 85px; max-width: auto;">
        <pre v-if="x == ''" style="text-align: center; font-size:x-large"></pre>
        <pre v-else style="text-align: center; font-size:x-large">{{
          "$ " + totaldisc
        }}</pre>
      </q-scroll-area>
    </div>

    <div v-if="n != '' && viewBtn3 == true" class="q-pa-md q-gutter-sm">
      <q-btn :loading="loading2" color="primary" @click="send()" style="width: 130px; display: block; margin: 0 auto;">
        Enviar
        <template v-slot:loading>
          <q-spinner-hourglass class="on-left" />
          Cargando...
        </template>
      </q-btn>
    </div>
  </div>
</template>

<script>



  import moment from 'moment'
  const shortid = require('shortid')

  export default {
    data() {
      return {
        f: [],
        filter: '',
        columns: [
          {
            name: '',
            required: true,
            label: '',
            align: 'left',
            field: row => row.name,
            format: val => `${val}`,
            sortable: true
          },
          { name: 'name', align: 'center', label: 'Product', field: 'name', sortable: true },
          { name: 'price', align: 'center', label: 'precio', field: 'price', sortable: true },
          { name: 'discount', align: 'center', label: 'desc %', field: 'discount', sortable: true },
          { name: 'cantidad', align: 'center', label: 'cantidad', field: 'cantidad', sortable: true },

        ],
        layout: false,
        all: [],
        keyUnique: 0,
        moreContent: true,
        drawer: false,
        text: "",
        text1: "",
        text2: "",
        dateStart: "",
        dense: true,
        lorem:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!",
        n: [],
        x: "",
        x2: "",
        totaldisc: "",
        model: null,
        model1: "",
        modelyyy: null,

        options: ["D1", "justo y bueno", "Exito", "Jumbo", "Flamingo"],
        options1: ["Domicilio", "Voy al lugar"],
        contentStyle: {
          backgroundColor: "rgba(0,0,0,0.02)",
          color: "#555"
        },

        contentActiveStyle: {
          backgroundColor: "#eee",
          color: "black"
        },

        thumbStyle: {
          right: "2px",
          borderRadius: "5px",
          backgroundColor: "#027be3",
          width: "5px",
          opacity: 0.75
        },
        loading4: false,
        loading3: false,
        viewBtn: false,
        viewBtn2: false,
        viewBtn3: false
      };
    },

    methods: {
      simulateProgress1(number) {
        this[`loading${number}`] = true;
        setTimeout(() => {
          this[`loading${number}`] = false;
        }, 3000);

        this.viewBtn2 = true
        this.viewBtn3 = true
      },

      simulateProgress(number) {
        this[`loading${number}`] = true;
        setTimeout(() => {
          this[`loading${number}`] = false;
        }, 3000);

        this.viewBtn = true
      },

      simulateProgress2(number) {
        this[`loading${number}`] = true;
        setTimeout(() => {
          this[`loading${number}`] = false;
        }, 3000);

        this.viewBtn = true
      },

      empuje() {
        this.n = Object.assign([], this.model);
      },
      sum() {
        this.x = this.n.reduce((sum, item) => sum + item.price * item.cantidad, 0);
      },
      incrementCounter(n) {
        if (this.n[n].cantidad >= 0 && this.n[n].cantidad < 99) {
          this.n[n].cantidad += 1
        } else {
          this.n[n].cantidad = 1
        }
      },
      incrementCounter1(n1) {
        if (this.n[n1].cantidad > 1 && this.n[n1].cantidad < 99) {
          this.n[n1].cantidad -= 1
        } else {
          this.n[n1].cantidad = 1
        }
      },


      async send() {
        try {
          const res = await fetch(`https://webs-ea519-default-rtdb.firebaseio.com/web/${this.keyUnique}.json`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'Application/json'
            },
            body: JSON.stringify(this.all)
          })
          //respuesta
          const dataDB = await res.json()
          console.log(dataDB)
          this.$notify({
            group: 'foo',
            title: '<b style="font-size: medium">EasyMarket</b>',
            text: 'Mercado registrado con el codigo: ' + '<b style="font-size: medium"> Anotarlo: ' + this.keyUnique + '</b>',

            duration: 300000,
            speed: 100
          });
        } catch (error) {
          console.log(error)
        }
      },

      async consult() {
        try {
          const res = await fetch('https://webs-ea519-default-rtdb.firebaseio.com/producto.json')
          //respuesta
          const dataDB = await res.json()
          this.f = dataDB

        } catch (error) {
          console.log(error)
        }
      },


      autoincrement() {
        this.keyUnique = shortid.generate()
        //fecha inicial
        this.dateStart = moment().format('MM-DD-YY, hh:mm:ss a')
      },

      porcentaje() {
        this.x2 = this.n.reduce(
          (sum1, item) => sum1 + ((item.price * item.cantidad) / 100) * -item.discount,
          0
        );


        this.totaldisc = this.x - Math.round(-this.x2);
        this.all = {
          total: this.totaldisc,
          productos: this.n,
          direccion: this.text,
          cliente: this.text1,
          numero: this.text2,
          tipoDomicilio: this.modelyyy,
          tienda: this.model1,
          fechaCompra: this.dateStart
        };
      }
    },
    computed: {
      contentSize() {
        return this.moreContent ? 7 : 5;
      }
    },
    mounted() {
      this.consult()
    },
  };
</script>
