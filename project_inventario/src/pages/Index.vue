<template>
  <div class="q-pa-md">
    <div class="rounded-borders bg-black text-white flex flex-center">
      <div style="background-color: black; font margin: auto">
        <StreamBarcodeReader
          @decode="onDecode"
          @loaded="onLoaded"
          v-on:change="sonidoLeido()"
        ></StreamBarcodeReader>

        <div class="text-h6" style="text-align: center">{{ idLeidos }}</div>
      </div>
    </div>
    <div class="row items-start q-gutter-md">
      <q-responsive :ratio="16 / 9" class="col">
        <div class="bg-white text-black flex flex-center">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <div class="text-h6">Agregar informacion del producto</div>

            <q-input
              v-if="add == false"
              filled
              v-model="idActual"
              label="id del producto"
              hint="id"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />

            <q-input
              filled
              v-model="nombreDelProducto"
              label="Nombre del producto"
              hint="Nombre o alias"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />

            <q-editor
              placeholder="Descripcion del producto"
              v-model="descripcionProducto"
              min-height="5rem"
            />

            <q-toggle v-model="accept" label="I accept the license and terms" />

            <div>
              <q-btn label="Submit" type="submit" color="primary" />
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              />
            </div>

            <div class="rounded-borders bg-white text-black flex flex-center">
              <q-input v-model="urlQR" id="hello" style="min-width: 300px" />
              <img
                v-if="fullUrl != ''"
                v-bind:src="fullUrl"
                alt=""
                style="max-width: 300px"
              />
              <div>
                <q-btn
                  style="float: right !important"
                  label="Crear QR"
                  v-on:click="generarQR()"
                  color="primary"
                  class="q-ml-sm"
                />
              </div>
            </div>
          </q-form>
        </div>
      </q-responsive>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { StreamBarcodeReader } from "vue-barcode-reader";
import { ref } from "vue";
import sound from "../sound/scanner-beep-checkout.mp3";

export default defineComponent({
  name: "PageIndex",
  components: {
    StreamBarcodeReader,
  },
  setup() {
    let urlQR = ref("");
    let idActual = ref("");
    let idLeidos = ref("");
    let fullUrl = ref("");
    let IdsProductosLeidos = ref([]);
    let add = ref(false);
    let nombreDelProducto = ref("");
    let descripcionProducto = ref("");
    let accept = ref(false);
    return {
      urlQR,
      idActual,
      idLeidos,
      fullUrl,
      add,
      nombreDelProducto,
      descripcionProducto,
      IdsProductosLeidos,
      accept,
    };
  },
  methods: {
    onDecode(a, b, c) {
      console.log(a, b, c);

      this.sonido("leido");

      this.idLeidos = a;
      this.idActual = a;

      setTimeout(() => {
        if (this.idLeidos === a) {
          this.idLeidos = "";
        }
      }, 7000);

      this.IdsProductosLeidos.push({ id: this.idActual });
    },

    onLoaded() {
      console.log("load");
    },

    onSubmit() {
      if (this.accept !== true) {
        console.log(2);
      } else {
        console.log(3);
      }
    },

    sonido(action) {
      if (action == "leido") {
        const audio = new Audio(sound);
        audio.play();
      }
    },

    onReset() {
      this.name = "";
      this.age = "";
      this.accept = false;
      this.urlQR = "";
      this.idActual = "";
      this.fullUrl = "";
    },

    buildUrl() {
      this.fullUrl =
        "https://chart.googleapis.com/chart?cht=qr&chs=" +
        400 +
        "x" +
        400 +
        "&chl=" +
        encodeURIComponent(this.p);
    },

    generarQR() {
      //TODO: se anexa el codigo que lo relaciona
      this.urlQR = "https://codepen.io/djam90/pen/pgZJJP";
      this.buildUrl();
    },
  },
});
</script>
