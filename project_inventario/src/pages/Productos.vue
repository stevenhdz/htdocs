<template>
  <div class="q-pa-md">
    <div class="rounded-borders bg-white text-black flex flex-center">
    <h5>Factura : {{ ids }}</h5>


<q-input
              color="blue"
              outlined
              type="text"
              v-model="precioxproducto"
              label="precio x producto"
            >
              <template v-slot:append>
                <q-btn
                  round
                  :color="!toggle ? 'primary' : speaking ? 'red' : 'red'"
                  @click.stop="
                    toggle ? endSpeechRecognition('precio') : startSpeechRecognition('precio')
                  "
                  icon="mic"
                />
              </template>
            </q-input>


             <q-input
              color="blue"
              outlined
              type="text"
              v-model="presupuesto"
              label="presupuesto"
            >
              <template v-slot:append>
                <q-btn
                  round
                  :color="!toggle ? 'primary' : speaking ? 'red' : 'red'"
                  @click.stop="
                    toggle ? endSpeechRecognition('precio') : startSpeechRecognition('precio')
                  "
                  icon="mic"
                />
              </template>
            </q-input>



    <h6>Productos empacados :</h6>
    <pre style="fontSize: 12px">{{ urlQR['productos'] }}</pre>


    <h5>{{ this.mayor != 0 ? this.mayor : '' }}</h5>
    <h5>{{ this.menor  != 0 ? this.menor : '' }}</h5>

    

    <q-btn
      style="float: center !important"
      round
      :color="true ? 'primary' : speaking ? 'red' : 'red'"
      v-on:click="predicts()"
      icon="local_fire_department"
    />
    <q-btn
      style="float: center !important"
      round
      :color="true ? 'black' : speaking ? 'red' : 'red'"
      v-on:click="predicts1()"
      icon="local_fire_department"
    />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "PageProductos",
  setup() {
    const route = useRoute();
    const urlQR = ref({});
    const menor = ref(0);
    const predict = ref([]);
    const predict2 = ref([]);
    const mayor = ref(0);
    const total = ref([]);
    const precioxproducto = ref("");
    const presupuesto = ref("");
    const ids = route.params.id;

    return {
      precioxproducto,
      presupuesto,
      total,
      predict,
      predict2,
      urlQR,
      ids,
      menor,
      mayor,
    };
  },
  beforeCreate() {
    let brain = document.createElement("script");
    brain.setAttribute("src", "//unpkg.com/brain.js");
    document.head.appendChild(brain);
  },

  mounted() {
    const headers = { "Content-Type": "application/json" };
    fetch(
      "https://localhost:8083/orden/" + this.ids,
      { method: "GET" },
      { headers }
    )
      .then((response) => response.json())
      .then((data) => {
        this.urlQR = data;

        //array
        let a = Object.values(data);

        //products of array
        let array = [];
        a[2].forEach((element) => {
          array.push(element.precio);
          this.predict.push({
            input: element.precio,
            output: element.nombreDelProducto,
          });
          this.predict2.push(element.precio + " " + element.nombreDelProducto);
        });

        let sums = []
        this.predict.forEach(element => {
          sums.push(element.input)
        });
        //sum
        let sum = sums.reduce((a, b) => a + b, 0);

        console.log(sum)

        //total
        this.total.push({ input: sum, output: "sin presupuesto" });

        //min and max product prices
   /*      this.menor = Math.min(...array);
        this.mayor = Math.max(...array); */
      })
      .catch((err) => console.log(err));
  },
  methods: {
    predicts() {

          const network = new brain.recurrent.LSTM();

          const trainingData = this.predict.map(item => ({
              input: item.input,
              output: item.output
          }));

          network.train(trainingData, {
            log: (error) => console.log(error),
            iterations: 1000
          });


        this.predict.forEach(element => {
          if(element.output.includes(network.run(this.precioxproducto))){
              if(element.input == this.precioxproducto){
                this.mayor = "Existe uno o varios productos con precio similares, ejemplo: " + network.run(this.precioxproducto)
              }else{
               this.mayor = "Ningun producto supera la cantidad"
              }
          }
        });

      

    },

    predicts1() {
      //inputs ponerle la voz al dar clic 
      //voz en prepuesto y por producto
          const network1 = new brain.recurrent.LSTM();

          const trainingData = this.total.map(item => ({
              input: JSON.stringify(item.input),
              output: item.output
          }));

          network1.train(trainingData, {
            log: (error) => console.log(error),
            iterations: 1000
          });


        this.total.forEach(element => {

          if(element.output.includes(network1.run(this.presupuesto))){
              if(String(element.input) <= this.presupuesto){
                this.menor = "Cumple con el presupuesto"
              }else{
                 this.menor = "No cumple con el presupuesto"
              }
          }
        });
    },
  },
});
</script>
