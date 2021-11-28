<template>
  <div>
    <v-app>
      <v-form>
        <v-container>

          <span>
            https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/speechstart_event
            https://vuetifyjs.com/en/components/icons/#props
            https://vuejs.org/
          </span>
          <v-textarea solo name="input-6-4" v-model="output"></v-textarea>

          <div v-if="toggle == true">
            <v-text-field v-model="message"></v-text-field>
          </div>

          <div>
            <v-text-field v-model="preview"></v-text-field>
          </div>

          <v-btn class="pa-4 rounded-circle" :color="!toggle ? 'grey' : (speaking ? 'red' : 'red darken-3')" elevation="7" x-small @click.stop="toggle ? End() : Start()"
            >  <v-icon small>{{toggle ? 'mic' : 'mic_off'}}</v-icon></v-btn
          >
        </v-container>
      </v-form>
    </v-app>
  </div>
</template>

<script>
let SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = SpeechRecognition ? new SpeechRecognition() : false;
import axios from "axios";
export default {
  data() {
    return {
      message: "",
      output: "",
      error: false,
      speaking: false,
      toggle: false,
      lang: 'es-ES',
      preview: ''
    };
  },
  methods: {
    checkCompatibility() {
      if (!recognition) {
        this.message = "Tu navegador no es compatible";
      }
    },

    End() {
      recognition.stop();
      this.toggle = false;
    },

    Start() {
      if (!recognition) {
        this.message = "No compatible navegador";
        return false;
      }

      this.toggle = true;
       //recognition.lang = this.lang
      recognition.interimResults = true;

      recognition.addEventListener("start", () => {
        this.message = "Ha comenzado el servicio de reconocimiento de voz";
      });

      recognition.addEventListener("speechstart", () => {
        this.message = "Se ha detectado voz";
        this.speaking = true;
      });

      recognition.addEventListener("speechend", () => {
        this.message = "El habla a dejado de detectarse";
        this.speaking = false;
      });

      recognition.addEventListener("error", (event) => {
        this.message = "Error de reconocimiento de voz detectado: " + event.error;
      });

      recognition.addEventListener("result", (event) => {
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          this.preview = event.results[i][0].transcript
          if (event.results[i].isFinal) {
            if (this.output == "") {
              this.output += event.results[i][0].transcript;
            } else {
              this.output += " " + event.results[i][0].transcript;
            }
          }
        }
      });

      recognition.addEventListener("end", () => {
        this.message = "Servicio de reconocimiento de voz desconectado";
        recognition.stop();
        if (this.toggle) {
          // keep it going.
          recognition.start();
        }
      });
      recognition.start();
    },

    save() {
      let parametros = {
        Descripcion1: this.output,
      };
      axios
        .post("http://127.0.0.1:8000/api/Articulos/create/", parametros)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // always exec
        });
    },
  },
  mounted() {
    this.checkCompatibility();
  },
};
</script>
