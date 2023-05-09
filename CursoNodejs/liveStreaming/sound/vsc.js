const recorder = require('node-record-lpcm16');
const childProcess = require('child_process');
const fs = require('fs')
// Crea un stream de grabación de audio
const audioStream = recorder.record({
  sampleRate: 44100,
  channels: 2,
  verbose: false,
});

// Inicia la grabación
const file = fs.createWriteStream('test.wav', { encoding: 'binary' })
 
audioStream.stream().pipe(file)

// Detiene la grabación después de 10 segundos
setTimeout(() => {
  audioStream.stop();
  console.log('Grabación finalizada.');
  
  // Convierte el audio grabado a formato WAV con sox
  const inputFile = 'test.raw';
  const outputFile = 'test.wav';
  const command = `sox ${outputFile} -r 16000 -c 1 -b 16 ${'1'+outputFile}`;
  childProcess.execSync(command);
  console.log('Audio grabado en formato WAV.');
}, 10000);
