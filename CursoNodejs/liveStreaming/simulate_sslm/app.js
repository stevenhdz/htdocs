const fs = require('fs');
const record = require('node-record-lpcm16');
const ssml = require('ssml-builder');
const say = require('say')

// Crea un nuevo objeto SSML
const ssmlDoc = new ssml();

// Agrega el texto que quieres convertir en SSML
ssmlDoc.say('TEXTO_A_CONVERTIR_EN_SSML');

// Crea un archivo temporal para guardar la grabación de audio
const outputFile = './audio.wav';

// Configura los parámetros de la grabación
const recordingOptions = {
  sampleRateHertz: 16000,
  channels: 1,
  encoding: 'LINEAR16',
  languageCode: 'es-ES'
};

const recordingTimeLimit = 5;
// Inicia la grabación
const recording = record.record(recordingOptions);

const timeout = setTimeout(() => {
    recording.stop();
    console.log(`La grabación se ha detenido después de ${recordingTimeLimit} segundos.`);
  }, recordingTimeLimit * 1000);
// Cuando se termina la grabación, guarda el archivo de audio
recording.stream()
  .on('error', console.error)
  .pipe(fs.createWriteStream(outputFile))
  .on('finish', () => {
    console.log('Grabación finalizada');

    // Lee el archivo de audio y conviértelo en una cadena base64
    const audioBuffer = fs.readFileSync(outputFile);
    const audioBase64 = audioBuffer.toString('base64');
    // Agrega el audio al documento SSML
    ssmlDoc.audio(audioBase64);
    // Convierte el documento SSML en una cadena
    const ssmlString = ssmlDoc._elements[1];
    // Reproduce el audio utilizando la biblioteca say
    // lograr reproducirlo.
    say.speak(`${ssmlString}`);
  }).on('close', () => {
    clearTimeout(timeout);
    console.log('Archivo de audio cerrado correctamente');
  });

  //fs.unlinkSync(audioPath);