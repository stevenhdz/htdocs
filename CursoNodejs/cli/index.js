#!/usr/bin/env node

// CLI: crypto-cli <algoritmo> "texto a procesar"
// Soporta: b64e (encode), b64d (decode)

const Base64 = require('./utils/base64');
const Sha = require('./utils/sha');
// ajusta la ruta según tu estructura real
const { version } = require('../cli/package.json');

function printHelp() {
  console.log(`
Uso:
  crypto-cli b64e "texto a codificar"
  crypto-cli b64d "texto en base64 a decodificar"

Flags:
  crypto-cli -h        Muestra esta ayuda
  crypto-cli --help    Muestra esta ayuda
  crypto-cli -v        Muestra la versión
`);
}

function measure(fn) {
  const start = process.hrtime.bigint();
  const value = fn();
  const end = process.hrtime.bigint();

  const durationMs = Number(end - start) / 1e6; // ns → ms
  return { value, durationMs };
}

function main() {
  const [, , algo, ...rest] = process.argv;

  if (!algo || algo === '-h' || algo === '--help') {
    printHelp();
    process.exit(0);
  }

  if (algo === '-v') {
    console.log(version);
    process.exit(0);
  }

  if (!rest.length) {
    console.error('❌ Debes enviar el texto a procesar.');
    printHelp();
    process.exit(1);
  }

  const text = rest.join(' ');
  const b64 = new Base64(text);
  const sha = new Sha(text);

  const handlers = {
    b64e: () => measure(() => b64.encode),
    b64d: () => measure(() => b64.decode),
    s256: () => measure(() => sha.s256),
    s512: () => measure(() => sha.s512),
    s1: () => measure(() => sha.s1),
  };

  const handler = handlers[algo];

  if (!handler) {
    console.error('❌ Algoritmo no soportado:', algo);
    printHelp();
    process.exit(1);
  }

  const { value, durationMs } = handler();

  const outputBytes = Buffer.byteLength(value, 'utf8');
  const outputKb = outputBytes / 1024;
  const outputMb = outputBytes / (1024 * 1024);

  console.table({
    algorithm: algo,
    input: text,
    output: value,
    category: 'encoding',
    security_level: 'none',
    comment: 'info IA',
    time_ms: durationMs.toFixed(2),
    output_kilobytes: outputKb.toFixed(2),
    output_megabytes: outputMb.toFixed(2),
  });
}

main();
