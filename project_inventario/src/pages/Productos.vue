<template>
  <div class="q-pa-md">
    <div class="rounded-borders bg-white text-black flex flex-center">
      <h5>Factura : {{ ids }}</h5>

      <p class="mt-1 ml-2" v-show="toggle">Escuchando</p>
      <p class="mt-1 ml-2" v-show="!toggle && sentences == []">
        Haga clic en el micrófono pequeño para iniciar el dictado
      </p>
      <p class="mt-1 ml-2" v-show="!toggle && sentences != []">
        Haga clic en el micrófono pequeño para agregar una cantidad.
      </p>
      <p class="mt-1 blue--text" v-show="toggle">
        {{ runtimeTranscription }}
      </p>

      <q-input
        color="blue"
        outlined
        type="text"
        v-model="precioxproducto"
        label="precio x producto"
        v-on:click="speak('precio por producto')"
      >
        <template v-slot:append>
          <q-btn
            round
            :color="!toggle ? 'primary' : speaking ? 'red' : 'red'"
            @click.stop="
              toggle
                ? endSpeechRecognition('precio x producto')
                : startSpeechRecognition('precio x producto')
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
        v-on:click="speak('presupuesto')"
      >
        <template v-slot:append>
          <q-btn
            round
            :color="!toggle ? 'primary' : speaking ? 'red' : 'red'"
            @click.stop="
              toggle
                ? endSpeechRecognition('presupuesto')
                : startSpeechRecognition('presupuesto')
            "
            icon="mic"
          />
        </template>
      </q-input>

      <div>
        <br />
        <q-table
          title="Lista de productos empacados"
          :rows="urlQR['productos']"
          :columns="columns"
          row-key="name"
        />
      </div>

      <div>
        <h5>{{ this.mayor != "" ? this.mayor : "" }}</h5>
        <h5>{{ this.menor != "" ? this.menor : "" }}</h5>
      </div>

      <div>
        <br />
        <q-btn
          round
          :color="true ? 'primary' : speaking ? 'red' : 'red'"
          v-on:click="
            speak('prediciendo precio por producto');
            predicts();
          "
          icon="local_fire_department"
        />

        <q-btn
          round
          :color="true ? 'black' : speaking ? 'red' : 'red'"
          v-on:click="
            speak('prediciendo presupuesto');
            predicts1();
          "
          icon="local_fire_department"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : false;
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
    const intervalid1 = ref(null);
    const intervalid2 = ref(null);
    const precioxproducto = ref("");
    const presupuesto = ref("");
    const ids = route.params.id;
    let error = ref(false);
    let lang = ref("es_ES");
    let speaking = ref(false);
    let toggle = ref(false);
    let runtimeTranscription = ref("");
    let sentences = ref([]);

    const columns = [
      {
        name: "id",
        required: true,
        label: "codigo de barras",
        align: "left",
        field: (row) => row.id,
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: "descripcion",
        label: "descripcion",
        field: "descripcionProducto",
        sortable: true,
      },
      { name: "precio", label: "precio", field: "precio" },
      {
        name: "producto",
        label: "producto",
        field: "nombreDelProducto",
      },
    ];

    return {
      intervalid1,
      intervalid2,
      columns,
      precioxproducto,
      presupuesto,
      total,
      predict,
      predict2,
      urlQR,
      ids,
      menor,
      mayor,
      error,
      lang,
      speaking,
      toggle,
      runtimeTranscription,
      sentences,
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

        let sums = [];
        this.predict.forEach((element) => {
          sums.push(element.input);
        });
        //sum
        let sum = sums.reduce((a, b) => a + b, 0);

        console.log(sum);

        //total
        this.total.push({ input: sum, output: "sin presupuesto" });

        //min and max product prices
        /*      this.menor = Math.min(...array);
        this.mayor = Math.max(...array); */
      })
      .catch((err) => console.log(err));

    this.auto();
  },
  methods: {
    speechEnd({ sentences, text, input }) {
      if (input == "precio x producto") {
        this.sentences = sentences;
        this.precioxproducto = parseInt(text);
      } else if (input == "presupuesto") {
        this.sentences = sentences;
        this.presupuesto = parseInt(text);
      }
    },
    checkCompatibility() {
      if (!recognition) {
        this.error =
          "El reconocimiento de voz no está disponible en este navegador. Por favor, utilice Chrome o Firefox";
      }
    },

    endSpeechRecognition(input) {
      recognition.stop();
      this.toggle = false;
      this.speaking = false;

      if (input == "presupuesto") {
        if (this.presupuesto.length >= 1) {
          setTimeout(() => {
            this.speechEnd({
              sentences: this.sentences,
              text: `${this.presupuesto}. ${this.sentences.join(". ")}`,
              input: input,
            });
          }, 500);
        } else {
          setTimeout(() => {
            this.speechEnd({
              sentences: this.sentences,
              text: `${this.sentences.join(". ")}`,
              input: input,
            });
          }, 500);
        }
      } else if (input == "precio x producto") {
        if (this.precioxproducto.length >= 1) {
          setTimeout(() => {
            this.speechEnd({
              sentences: this.sentences,
              text: `${this.precioxproducto}. ${this.sentences.join(". ")}`,
              input: input,
            });
          }, 500);
        } else {
          setTimeout(() => {
            this.speechEnd({
              sentences: this.sentences,
              text: `${this.sentences.join(". ")}`,
              input: input,
            });
          }, 500);
        }
      }
    },

    startSpeechRecognition(input) {
      this.toggle = true;

      recognition.lang = this.lang;
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;

      recognition.onspeechstart = () => {
        this.speaking = true;
      };

      recognition.onspeechend = () => {
        this.speaking = false;
      };

      recognition.onresult = (event) => {
        if (typeof event.results === "undefined") {
          recognition.stop();
          return;
        }

        if (input.length >= 1) {
          this.sentences = [];
        }

        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            let finalSentence = event.results[i][0].transcript;

            this.runtimeTranscription = event.results[i][0].transcript;

            this.sentences.push(this.capitalizeFirstLetter(finalSentence));
          } else {
            this.runtimeTranscription = event.results[i][0].transcript;
          }
        }
      };

      recognition.start();
    },

    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    speak(adds) {
      fetch("https://localhost:8083/speak/" + adds)
        .then((response) => response.json())
        .then((datas) => {
          console.log(datas);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    auto() {
      console.log("exec");
      const self = this;
      self.intervalid1 = setInterval(function () {
        if (self.menor != "") {
          self.predicts();
        } else {
        }
      }, 15000);

      self.intervalid2 = setInterval(function () {
        if (self.mayor != "") {
          self.predicts1();
        } else {
        }
      }, 30000);
    },
    predicts() {
      const network = new brain.recurrent.LSTM();

      const trainingData = this.predict.map((item) => ({
        input: item.input,
        output: item.output,
      }));

      network.train(trainingData, {
        log: (error) => console.log(error),
        iterations: 1000,
      });

      this.predict.forEach((element) => {
        if (element.output.includes(network.run(this.precioxproducto))) {
          if (element.input == this.precioxproducto) {
            this.mayor =
              "Existe uno o varios productos con precio similares, ejemplo: " +
              network.run(this.precioxproducto);
          } else {
            this.speak("Ningun producto supera la cantidad");
            this.mayor = "Ningun producto supera la cantidad";
          }
        }
      });

      this.menor = "";
    },

    predicts1() {
      //inputs ponerle la voz al dar clic
      //voz en prepuesto y por producto
      const network1 = new brain.recurrent.LSTM();

      const trainingData = this.total.map((item) => ({
        input: JSON.stringify(item.input),
        output: item.output,
      }));

      network1.train(trainingData, {
        log: (error) => console.log(error),
        iterations: 1000,
      });

      this.total.forEach((element) => {
        if (element.output.includes(network1.run(this.presupuesto))) {
          if (element.input <= this.presupuesto) {
            this.speak("Cumple con el presupuesto");
            this.menor = "Cumple con el presupuesto";
          } else {
            this.speak("No cumple con el presupuesto");
            this.menor = "No cumple con el presupuesto";
          }
        }
      });

      this.mayor = "";
    },
  },
});
</script>
