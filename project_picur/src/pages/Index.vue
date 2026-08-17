<template>
  <div class="q-pa-md" id="principal">
    <div class="q-pa-md">
      <q-carousel
        animated
        v-model="slide"
        navigation
        v-model:fullscreen="fullscreen"
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide
          :name="key"
          v-for="(item, key) in array"
          :key="key"
          :img-src="item.image"
          @click="
            llamar(
              item.contacts,
              item.names,
              item.custom,
              item.parent,
              item.user,
              item.rol
            )
          "
        />
        <template v-slot:control>
          <q-carousel-control position="bottom-right" :offset="[18, 18]">
            <q-btn
              push
              round
              dense
              color="white"
              text-color="primary"
              :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
              @click="fullscreen = !fullscreen"
            />
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      slide: 1,
      autoplay: true,
      dir: null,
      dirFormatt: "",
      gettingLocation: false,
      errorStr: null,
      fullscreen: false,
      array: [],
    };
  },
  name: "PageIndex",
  created() {
    fetch("https://localhost:3000/client/list")
      .then((response) => response.json())
      .then((data) => {
        this.array = data;
      });

    if (!("geolocation" in navigator)) {
      this.errorStr = "Geolocation is not available.";
      return;
    }

    this.gettingLocation = true;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.gettingLocation = false;
        this.dir = pos.coords.latitude + "," + pos.coords.longitude;
      },
      (err) => {
        this.gettingLocation = false;
        this.errorStr = err.message;
      }
    );
  },

  methods: {
    send(tel, name, msg, parent, user, rol) {
      this.dirFormatt = this.dir.replaceAll(/\s/g, "%20");

      window.location.href =
        "https://api.whatsapp.com/send?phone=+57" +
        tel +
        "&text=El paciente " +
        "peepe" +
        " se encuentra en la ubicacion : https://www.google.com/maps/place/" +
        this.dirFormatt +
        " " +
        msg +
        ", " +
        rol +
        " " +
        name;
    },
    llamar(tel, name, msg, parent, user, rol) {
      window.location.href = "tel:" + tel;

      (async () => {
        const rawResponse = await fetch(
          "https://localhost:3000/robot?tel=" +
            tel +
            "&name=" +
            name +
            "&rol=" +
            rol
        );
        const content = await rawResponse.json();
      })();

      this.send(tel, name, msg, parent, user, rol);
    },
  },
});
</script>

<style>
#principal {
  text-align: center;
}
</style>
