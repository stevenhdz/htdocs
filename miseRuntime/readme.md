# 🚀 Setup rápido con mise

Este proyecto usa **mise** para gestionar versiones de Node.js de forma reproducible. curl https://mise.run | sh

---

## ⚙️ Configuración

Dentro del proyecto ejecuta:

```bash
mise use node@20
mise install
```

---

## 🔍 Verificar entorno

```bash
mise current
```

---

## ▶️ Ejecutar proyecto

```bash
node main.js
```

---

## 📄 Archivo generado

```toml
.mise.toml
```

Ejemplo:

```toml
[tools]
node = "20"
```

---

## 🧠 Notas

- Las versiones se definen por proyecto
- No se usan configuraciones globales
- Solo necesitas correr `mise install` al clonar

---

## 💡 TL;DR

```bash
mise use node@20
mise install
mise current
mise run dev
mise run node-version
mise run check-env
mise run start
node main.js
mise exec -- npm run test
```

mise use node@18 → fija Node 18 en el proyecto

mise install → instala la versión definida

mise current → muestra lo activo

mise run install → ejecuta npm install

mise run node-version → muestra la versión de Node

mise run check-env → imprime variables del [env]

mise run dev → corre node index.js

mise run start → corre el flujo completo

node index.js → ejecución directa, sin usar task
