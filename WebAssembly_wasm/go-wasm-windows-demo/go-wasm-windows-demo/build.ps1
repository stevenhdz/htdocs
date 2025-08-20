# Compilar Go -> WASM y copiar wasm_exec.js (PowerShell)
$env:GOOS="js"
$env:GOARCH="wasm"
go build -o .\web\main.wasm

Copy-Item (Join-Path (go env GOROOT) "misc\wasm\wasm_exec.js") .\web\wasm_exec.js -Force

Write-Host "✅ Build listo en carpeta web. Ejecuta: go run server.go y abre http://localhost:8080"
