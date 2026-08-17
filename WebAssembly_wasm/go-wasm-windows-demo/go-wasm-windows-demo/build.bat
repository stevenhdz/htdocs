@echo off
set GOOS=js
set GOARCH=wasm
go build -o web\main.wasm main.go
copy "%GOROOT%\misc\wasm\wasm_exec.js" web\wasm_exec.js >nul
echo ✅ Build listo en carpeta web. Ejecuta: go run server.go y abre http://localhost:8080
