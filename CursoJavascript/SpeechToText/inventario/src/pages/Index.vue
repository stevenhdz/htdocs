<template>
  <div>


   <div class="hello">
    <StreamBarcodeReader style="max-width: 400px; height: 200px;"
      @decode="(a, b, c) => onDecode(a, b, c)"
      @loaded="() => onLoaded()"
    ></StreamBarcodeReader>
    Input Value: {{ text2 || "Nothing" }}
  </div>

 <q-responsive :ratio="1" class="col">
        <div class="rounded-borders bg-white text-black flex flex-center">
          <div class="q-pa-md" style="max-width: 400px">
              <div class="q-pa-md">
    <q-table
      title="Treats"
      :rows="rows"
      :columns="columns"
      :filter="filter"
      no-data-label="I didn't find anything for you"
      no-results-label="The filter didn't uncover any results"
      row-key="name"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:no-data="{ icon, message, filter }">
        <div class="full-width row flex-center text-accent q-gutter-sm">
          <q-icon size="2em" name="sentiment_dissatisfied" />
          <span>
            Well this is sad... {{ message }}
          </span>
          <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
        </div>
      </template>
    </q-table>
              </div>
          </div>
        </div>
      </q-responsive>

      <q-responsive :ratio="1" class="col">
        <div class="rounded-borders bg-white text-black flex flex-center">
          <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

          </div>
        </div>
      </q-responsive>

    <div class="q-pa-md q-gutter-sm">

    <q-btn color="black" label="Black" />
  </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  name: 'PageIndex',
  components: {
    StreamBarcodeReader,
  },
  data () {
    return {
      props: {
    msg: String,
  },
      text2: "",
      id: null,
      rows: [{name: "0123456789123"},{name: "steven"},{name: "90123458867891234"},{name: "0036000291452"}],
      filter: ref(''),

      columns: [
        {
          name: 'name',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ]
    }
  },
  methods: {
    onDecode(a, b, c) {
      console.log(a, b, c);
      this.text2 = a;
      this.filter = this.text2
      if (this.id) clearTimeout(this.id);
      this.id = setTimeout(() => {
        if (this.text2 === a) {
          this.text2 = "";
        }
      }, 5000);
    },
    onLoaded() {
      console.log("load");
    },
  },
}
</script>
