<template>
   <v-card>
    <v-card-text>
      <v-layout row wrap justify-space-around>
        <v-flex xs8 sm9 text-xs-center>
          <pre v-if="error" class="grey--text">{{error}}</pre>
          <pre v-else class="mb-0">
            <p v-if="sentences.length > 0" >
                <span v-for="sentence in sentences" v-bind:key="sentence" >{{sentence}} </span>
            </p>
            <span>{{runtimeTranscription}}</span>
          </pre>
        </v-flex>
        <v-flex xs2 sm1 text-xs-center>
          <v-btn
            dark
            @click.stop="toggle ? endSpeechRecognition() : startSpeechRecognition()"
            icon
            :color="!toggle ? 'grey' : (speaking ? 'red' : 'red darken-3')"
            :class="{'animated infinite pulse': toggle}"
          >
            <v-icon>{{toggle ? 'mic_off' : 'mic'}}</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = SpeechRecognition? new SpeechRecognition() : false

export default {
  name: 'speech',
  data: () => ({
    props: {
      lang: {
        type: String,
        default: 'es-ES'
      },
      text: {
        type: [String, null],
        required: true
      }
    },
      error: false,
      speaking: false,
      toggle: false,
      runtimeTranscription: '',
      sentences: []
  }),
  methods: {
    
    checkCompatibility () {
      if (!recognition) {
        this.error = 'Speech Recognition is not available on this browser. Please use Chrome or Firefox'
      }
    },
    endSpeechRecognition () {
      recognition.stop()
      this.toggle = false
      
      this.$emit('speechend', {
        sentences: this.sentences,
        text: this.sentences
      })
    },
    startSpeechRecognition () {
      if (!recognition) {
        this.error = 'Speech Recognition is not available on this browser. Please use Chrome or Firefox'
        return false
      }
      this.toggle = true
      //recognition.lang = this.lang
      recognition.interimResults = true

       recognition.addEventListener('speechstart', function ()  {
        this.speaking = true
      })

      recognition.addEventListener('speechend', function ()  {
        this.speaking = false
      })

      recognition.addEventListener('result', event => {
        var text = Array.from(event.results).map(result => result[0]).map(result => result.transcript).join('')
        this.runtimeTranscription = text
      })

      recognition.addEventListener('end', () => {
        if (this.runtimeTranscription !== '') {

         this.sentences.push(this.runtimeTranscription)
         //this.$emit('update:text', ` ${this.sentences.join(' ')} `)
         this.$emit('update:text', `${this.text} ${this.sentences.splice(-1)[0]} `)
        }
        this.runtimeTranscription = ''
        recognition.stop()
        if (this.toggle) {
          // keep it going.
          recognition.start()
        }
      })
      recognition.start()
    },
 
   
  },
  mounted () {
    this.checkCompatibility()
  }
}
</script>




