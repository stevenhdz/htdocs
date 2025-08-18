# MODULO C4 - ARQUITECTURA SOFTWARE

## **C1**

![alt text](image.png)

## **C2**

![alt text](image-1.png)

## **C3**

![alt text](image-2.png)

## **C4**

![alt text](image-3.png)


**PLANTUML:** https://editor.plantuml.com/


# 📌 Objetivos del Modelo C4

## **C1 — Contexto**
- **Objetivo:** Mostrar el **alcance del sistema** y sus **interacciones externas** (usuarios, otros sistemas, servicios externos).  
- **Enfocado en:** Audiencias no técnicas, interesados de negocio, visión general.  
- **Pregunta que responde:** *¿Qué es el sistema y con quién se comunica?*  

---

## **C2 — Contenedores**
- **Objetivo:** Representar las **grandes piezas de software** que componen el sistema (apps, bases de datos, servicios, frontends) y cómo colaboran.  
- **Enfocado en:** Arquitectos y desarrolladores para entender dónde vive cada parte.  
- **Pregunta que responde:** *¿De qué está hecho el sistema y dónde corre cada parte?*  

---

## **C3 — Componentes**
- **Objetivo:** Detallar los **componentes internos de cada contenedor**, mostrando responsabilidades principales y cómo se relacionan.  
- **Enfocado en:** Equipos de desarrollo para organizar código y responsabilidades.  
- **Pregunta que responde:** *¿Cómo está organizado internamente cada contenedor?*  

---

## **C4 — Código**
- **Objetivo:** Mostrar la **implementación detallada** de los componentes, incluyendo clases, interfaces, métodos y relaciones.  
- **Enfocado en:** Desarrolladores que necesitan comprender el diseño a nivel de código.  
- **Pregunta que responde:** *¿Cómo se implementa en código cada componente del sistema?*  

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