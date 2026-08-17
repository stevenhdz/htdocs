# Go + WebAssembly Demo (Windows)

## Requisitos
- Go 1.18+ instalado (y agregado al PATH).
- Navegador moderno (Chrome, Edge, Firefox).

## Pasos
1. Compilar a WASM:

### En PowerShell:
```powershell
.uild.ps1
```

### En CMD:
```cmd
go mod init go-wasm-demo
go mod tidy
build.bat
```

Esto genera `web\main.wasm` y copia `wasm_exec.js`.

2. Servir la carpeta con Go:
```powershell
go run server.go
```

3. Abrir en el navegador:
```
http://localhost:8080
```

## Funciones expuestas desde Go
- `add(a, b)` → suma dos enteros.
- `greet(name)` → devuelve un saludo.

¡Listo 🚀!

ESTO LE DA VELOCIDAD A UNA PWA