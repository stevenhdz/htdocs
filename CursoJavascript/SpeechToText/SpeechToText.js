
function Start(start1,out) {
    if (out == 1) {
      let output = document.getElementById("output");
      let message = document.getElementById("message");

      var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
      let recognition = new SpeechRecognition()
    
      recognition.continuous = true
    
      recognition.onstart = function () {
          message.innerHTML = "Ha comenzado el servicio de reconocimiento de voz"
      }
    
      recognition.onerror = function (event) {
          message.innerHTML = "Error de reconocimiento de voz detectado: " + event.error
      }
    
      recognition.onend = function () {
          message.innerHTML = "Servicio de reconocimiento de voz desconectado"
      }
    
      recognition.onspeechend = function () {
          message.innerHTML = "El habla a dejado de detectarse"
      }
    
      recognition.onspeechstart = function () {
          message.innerHTML = "Se ha detectado voz"
      }
    
      recognition.onresult = function (event) {
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            if (output.value == "") {
              output.value += event.results[i][0].transcript;
            } else {
              output.value += " " + event.results[i][0].transcript;
            }
          }
        }
      };
    
      if (start1 == true) {
        recognition.start();
      } else {
        recognition.start();
        recognition.stop();
      }


    } else if(out == 2){
      let output = document.getElementById("output1");
      let message = document.getElementById("message1");

      var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
      let recognition = new SpeechRecognition()
    
      recognition.continuous = true
    
      recognition.onstart = function () {
          message.innerHTML = "Ha comenzado el servicio de reconocimiento de voz"
      }
    
      recognition.onerror = function (event) {
          message.innerHTML = "Error de reconocimiento de voz detectado: " + event.error
      }
    
      recognition.onend = function () {
          message.innerHTML = "Servicio de reconocimiento de voz desconectado"
      }
    
      recognition.onspeechend = function () {
          message.innerHTML = "El habla a dejado de detectarse"
      }
    
      recognition.onspeechstart = function () {
          message.innerHTML = "Se ha detectado voz"
      }
    
      recognition.onresult = function (event) {
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            if (output.value == "") {
              output.value += event.results[i][0].transcript;
            } else {
              output.value += " " + event.results[i][0].transcript;
            }
          }
        }
      };
    
      if (start1 == true) {
        recognition.start();
      } else {
        recognition.start();
        recognition.stop();
      }
    }
 


}


function save() {
  let parametros = {
    Descripcion1: output.value,
    Descripcion2: output1.value,
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
}