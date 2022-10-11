<template>
  <div class="q-pa-md">
    <div class="rounded-borders bg-white text-black flex flex-center">
      <div style="background-color: white; font margin: auto">
        <StreamBarcodeReader
          @decode="onDecode"
          @loaded="onLoaded"
          v-on:change="sonidoLeido()"
        ></StreamBarcodeReader>
        <div class="text-h6" v-on:click="speak('Escanear producto')">Escanear producto</div>
        <div class="text-h6" style="text-align: center">{{ idLeidos }}</div>
        <p class="mt-1 ml-2" v-show="toggle">Escuchando</p>
        <p class="mt-1 ml-2" v-show="!toggle && sentences == []">
          Haga clic en el micrófono pequeño para iniciar el dictado
        </p>
        <p class="mt-1 ml-2" v-show="!toggle && sentences != []">
          Haga clic en el micrófono pequeño para agregar una oración.
        </p>
        <p class="mt-1 blue--text" v-show="toggle">
          {{ runtimeTranscription }}
        </p>
      </div>
    </div>
    <div class="row items-start q-gutter-md">
      <q-responsive :ratio="16 / 9" class="col">
        <div class="bg-white text-black flex flex-center">
          <q-form @submit="onSubmit" class="q-gutter-md">
            <div v-if="exists == false" v-on:click="speak(adds)" class="text-h6">
              {{ adds }}
            </div>
            <div v-else class="text-h6" v-on:click="speak('Editar informacion del producto')" >Editar informacion del producto</div>
            <q-input
            v-if="add == true"
             color="blue"
              outlined
              v-model="idActual"
              label="id del producto"
             autofocus
             disabled
            />

            <q-input
              color="blue"
              outlined
              v-model="nombreDelProducto"
              label="Nombre del producto"
              v-on:click="speak('nombre del producto')"
            >
              <template v-slot:append>
                <q-btn
                  round
                  :color="!toggle ? 'primary' : speaking ? 'red' : 'red'"
                  @click.stop="
                    toggle ? endSpeechRecognition('nombreDelProducto') : startSpeechRecognition('nombreDelProducto')
                  "
                  icon="mic"
                />
              </template>
            </q-input>

            <q-input
              color="blue"
              outlined
              type="number"
              v-model.number="precio"
              label="Precio"
              v-on:click="speak('precio del producto')"
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

            <q-editor
              placeholder="Descripcion del producto"
              v-model="descripcionProducto"
              min-height="5rem"
                    v-on:click="speak('descripcion del producto')"
            />
            <q-btn
              style="float: right !important"
              round
              :color="!toggle ? 'primary' : speaking ? 'red' : 'red'"
              @click.stop="
                toggle ? endSpeechRecognition('descripcionProducto') : startSpeechRecognition('descripcionProducto')
              "
              icon="mic"
            />

            <q-btn
              v-if="idActual != ''"
              style="float: left !important"
              round
              color="primary"
              type="submit"
              icon="add"
            />

            <div id="printID" class="rounded-borders bg-white text-black flex flex-center">
              <img
                v-if="fullUrl != ''"
                :src="fullUrl"
                alt=""
                style="max-width: 300px"
              />

              <div v-show="!qrshow" style="text-align: center; color: black">
                <h4>contenedor: {{ randoms }}</h4>
              </div>

              <q-btn
                v-show="qrshow"
                v-if="idActual != ''"
                round
                color="black"
                v-on:click="generarQR(), speak('codigo QR generado con el id de caja '+ randoms)"
                icon="qr_code"
              />

            </div>
               <q-btn
                v-show="!qrshow"
                v-if="idActual != ''"
                round
                color="black"
                v-on:click="prints(), speak('imprimiendo QR')"
                icon="print"
              />
          </q-form>
        </div>
      </q-responsive>
    </div>
  </div>
</template>

//TODO: AL DAR CLIC EN EL INPUT DECIR QUE ES, AUMENTAR LETRA

<script>
import { defineComponent } from "vue";
import { StreamBarcodeReader } from "vue-barcode-reader";
import { ref } from "vue";
import { useQuasar } from "quasar";
import sound from "../sound/scanner-beep-checkout.mp3";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : false;
export default defineComponent({
  name: "PageIndex",
  components: {
    StreamBarcodeReader,
  },
  setup() {
    let adds = ref("Agregar informacion del producto");
    const $q = useQuasar();
    let qrshow = ref(true);
    let error = ref(false);
    let lang = ref("es_ES");
    let speaking = ref(false);
    let toggle = ref(false);
    let runtimeTranscription = ref("");
    let sentences = ref([]);
    let urlQR = ref("");
    let idActual = ref("");
    let idLeidos = ref("");
    let fullUrl = ref("");
    let precio = ref(0);
    let randoms = ref(0);
    let IdsProductosLeidos = ref([]);
    let add = ref(false);
    let exists = ref(false);
    let nombreDelProducto = ref("");
    let descripcionProducto = ref("");
    return {
      errors() {
        $q.notify({
          type: "negative",
          message: "Error",
        });
                 this.speak("error")
      },
      edits() {
        $q.notify({
          type: "positive",
          message: "Editado",
        });
        this.speak("producto Editado")
      },
      saves() {
        $q.notify({
          type: "positive",
          message: "Insertado",
        });
                this.speak("producto agregado")
      },
      adds,
      qrshow,
      urlQR,
      error,
      lang,
      speaking,
      toggle,
      runtimeTranscription,
      sentences,
      exists,
      idActual,
      idLeidos,
      fullUrl,
      precio,
      add,
      randoms,
      nombreDelProducto,
      descripcionProducto,
      IdsProductosLeidos,
    };
  },
  computed: {
    hasText() {
      return this.nombreDelProducto.length > 0 ? true : false;
    },
  },
  methods: {
   prints(){
      var ficha = document.getElementById('printID');
	  var ventimp = window.open(' ', 'popimpr');
	  ventimp.document.write( ficha.innerHTML );
	  ventimp.document.close();
	  ventimp.print();

    },
    onDecode(a, b, c) {
      console.log(a, b, c);

      this.sonido("leido");

      this.idLeidos = a;
      this.idActual = a;
      this.exists = true;

      setTimeout(() => {
        if (this.idLeidos === a) {
          this.idLeidos = "";
        }
      }, 3000);

      const headers = { "Content-Type": "application/json" };
      fetch(
        "https://localhost:8083/producto/" + this.idActual,
        { method: "GET" },
        { headers }
      )
        .then((response) => response.json())
        .then((datas) => {
          this.add = true;
          this.idActual = datas.idActual;
          this.descripcionProducto = datas.descripcionProducto;
          this.precio = datas.precio;
          this.nombreDelProducto = datas.nombreDelProducto;
          this.exists = true;

          this.IdsProductosLeidos.push({
            id: this.idActual,
            descripcionProducto: this.descripcionProducto,
            precio: this.precio,
            nombreDelProducto: this.nombreDelProducto,
          });
        })
        .catch((err) => {
          this.exists = false;
          this.onReset();
        });
    },

    onLoaded() {
      console.log("load");
    },
    speechEnd({ sentences, text ,input}) {
      
      if(input == 'nombreDelProducto'){
        this.sentences = sentences;
        this.nombreDelProducto = text;
      }else if(input == 'precio'){
        this.sentences = sentences;
        this.precio = parseInt(text);
      }else if(input == 'descripcionProducto'){
        this.sentences = sentences;
        this.descripcionProducto = text;
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

      if(input == 'nombreDelProducto'){

        if (this.nombreDelProducto.length >= 1) {
            setTimeout(() => {
              this.speechEnd({
                sentences: this.sentences,
                text: `${this.nombreDelProducto}. ${this.sentences.join(". ")}`,
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

      }else if(input == 'precio'){


        if (this.precio.length >= 1) {
            setTimeout(() => {
              this.speechEnd({
                sentences: this.sentences,
                text: `${this.precio}. ${this.sentences.join(". ")}`,
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
        
      }else if(input == 'descripcionProducto'){


        if (this.descripcionProducto.length >= 1) {
            setTimeout(() => {
              this.speechEnd({
                sentences: this.sentences,
                text: `${this.descripcionProducto}. ${this.sentences.join(". ")}`,
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

    speak(adds){
      fetch(
          "https://localhost:8083/speak/" + adds
        )
          .then((response) => response.json())
          .then((datas) => {
            console.log(datas)
          })
          .catch((err) => {
            console.log(err)
          });
    },

    onSubmit() {
      //TODO: actualizar o guardar
      if (this.exists == true) {
        this.edits();
        let config = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idActual: this.idActual,
            descripcionProducto: this.descripcionProducto,
            precio: this.precio,
            nombreDelProducto: this.nombreDelProducto,
          }),
        };

        fetch(
          "https://localhost:8083/productos/edit/" + this.idActual,
          config
        )
          .then((response) => response.json())
          .then((datas) => {
            this.edits();
          })
          .catch((err) => {
            this.errors();
          });

          this.onReset()
      } else {

        let config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idActual: this.idActual,
            descripcionProducto: this.descripcionProducto,
            precio: this.precio,
            nombreDelProducto: this.nombreDelProducto,
          }),
        };

        fetch("https://localhost:8083/productos/add", config)
          .then((response) => response.json())
          .then((datas) => {
            this.saves();
          })
          .catch((err) => {
            this.errors();
          });
      }

this.onReset();
      
    },

    sonido(action) {
      if (action == "leido") {
        const audio = new Audio(sound);
        audio.play();
      }
    },

    onReset() {
      this.nombreDelProducto = "";
      this.descripcionProducto = "";
      this.precio = "";
      this.exists = false;
      this.error = false;
      this.speaking = false;
      this.toggle = false;
      this.runtimeTranscription = "";
      this.sentences = [];
      this.nombreDelProducto = "";
    },

    buildUrl() {
      this.fullUrl =
        "https://chart.googleapis.com/chart?cht=qr&chs=" +
        400 +
        "x" +
        400 +
        "&chl=" +
        encodeURIComponent(this.urlQR);
    },

    generarQR() {
      //orden random
      let random = Math.random();
      this.urlQR = "https://localhost:8083/orden/" + random;
      this.randoms = random;
      this.buildUrl();

      this.IdsProductosLeidos.forEach((element, index) => {
        this.IdsProductosLeidos[index]["caja"] = random;
        this.IdsProductosLeidos = this.IdsProductosLeidos;
      });

      let config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          caja: random,
          productos: this.IdsProductosLeidos,
        }),
      };

      fetch("https://localhost:8083/orden/add", config)
        .then((response) => response.json())
        .then((datas) => console.log(datas))
        .catch((err) => err);

      this.qrshow = false;
    },
  },
  mounted() {
    this.checkCompatibility();
  },
  beforeUnmount() {
    recognition.abort();
  },
});
</script>
