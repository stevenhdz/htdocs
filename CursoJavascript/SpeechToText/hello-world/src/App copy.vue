<template>
  <v-app id="inspire">
    <v-container fluid>
      <v-layout row wrap justify-center class="mt-4">
        <v-flex xs12 sm10 text-xs-center>
          <v-textarea
          solo
          name="input-7-4"
           v-model="text"
        ></v-textarea>
        </v-flex>
        <v-flex xs12 sm8 md4 text-xs-center>
          <Speech :text.sync="text" @speechend="speechEnd" />
        </v-flex>
        <v-flex xs12 text-xs-center class="mt-4">
          {{sentences}}
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Speech from './components/Speech.vue'
export default {
   components: {
      Speech
    },
  data() {
    return {
      text: '',
      sentences: []
    }
  },
  methods: {
     speechEnd ({sentences, text}) {
      console.log('text', text)
      console.log('sentences', sentences)
      this.sentences = sentences
    }
  }
}
</script>






