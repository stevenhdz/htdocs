# MODULO C4 - ARQUITECTURA SOFTWARE

| C1 - Contexto | C2 - Contenedores |
|---------------|------------------|
| [<img src="image.png" width="400" class="zoom"/>](image.png) | [<img src="image-1.png" width="400" class="zoom"/>](image-1.png) |

| C3 - Componentes | C4 - Código |
|------------------|-------------|
| [<img src="image-2.png" width="400" class="zoom"/>](image-2.png) | [<img src="image-3.png" width="400" class="zoom"/>](image-3.png) |


**PLANTUML:** https://editor.plantuml.com/


# 📌 Objetivos del Modelo C4

| Nivel | Objetivo | Enfocado en | Pregunta que responde |
|-------|-----------|-------------|------------------------|
| **C1 — Contexto** | Mostrar el sistema en su **panorama más amplio**, explicando qué es, qué hace y con quién interactúa (usuarios, sistemas externos, servicios de terceros). | Audiencias no técnicas, directivos, stakeholders. | *¿Qué es el sistema y con quién se comunica?* |
| **C2 — Contenedores** | Describir las **grandes piezas tecnológicas** que conforman el sistema (ej. aplicación web, API, bases de datos, colas de mensajería, servicios externos). | Arquitectos y desarrolladores. | *¿De qué está hecho el sistema y dónde vive cada pieza?* |
| **C3 — Componentes** | Mostrar cómo está **organizado internamente cada contenedor**, detallando los componentes principales (controladores, servicios, repositorios, adaptadores, etc.) y sus responsabilidades. | Equipos de desarrollo. | *¿Cómo se organizan y colaboran las partes internas de cada contenedor?* |
| **C4 — Código** | Bajar al **máximo nivel de detalle**, mostrando cómo se implementa cada componente mediante clases, interfaces, métodos o funciones. | Desarrolladores que implementan o mantienen el código. | *¿Cómo está implementado el diseño en código?* |

---

## 📌 Relación C3/C4 con la estructura de carpetas

- **C3:** → blueprint de carpetas.
- **C4:** → código dentro de esas carpetas.

```code
src/
├─ controllers/
│  └─ auth.controller.ts              # login(), logout(), forgot(), reset(), refresh()
│
├─ application/
│  ├─ login.usecase.ts
│  ├─ logout.usecase.ts
│  ├─ forgot-password.usecase.ts
│  ├─ reset-password.usecase.ts
│  └─ refresh-token.usecase.ts
│
├─ domain/
│  ├─ user.entity.ts                  # id, email, passwordHash, verified...
│  ├─ token.entity.ts                 # value, type, expiresAt...
│  └─ policies.ts                     # reglas (p.ej. complejidad de password)
│
├─ ports/
│  ├─ user.repo.port.ts               # findByEmail(), create(), updatePassword()
│  ├─ token.repo.port.ts              # saveReset(), findValidReset(), consume()
│  └─ mail.port.ts                    # sendVerification(to,link), sendReset(to,link)
│
├─ adapters/
│  ├─ orm/
│  │  ├─ prisma.user.repo.ts          # implements UserRepo
│  │  └─ prisma.token.repo.ts         # implements TokenRepo
│  ├─ mail/
│  │  └─ gmail.adapter.ts             # implements MailPort (SMTP/Gmail API)
│  └─ security/
│     ├─ jwt.service.ts               # sign(), verify(), jwks()
│     └─ password-hasher.ts           # hash(), compare()
│
├─ middlewares/
│  ├─ auth.middleware.ts              # valida access token
│  ├─ rate-limit.middleware.ts
│  └─ error.middleware.ts
│
├─ routes/
│  └─ auth.routes.ts                  # mapea /login,/logout,/forgot,/reset,/refresh → controller
│
├─ shared/
│  ├─ env.ts                          # variables, claves, SMTP, DB
│  └─ errors.ts                       # errores de dominio/aplicación
└─ main.ts                            # arranque (Express/Fastify)
```