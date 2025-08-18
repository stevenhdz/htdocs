# 📘 Guía 12-Factor App (Resumen práctico)

El **12-Factor App** es un conjunto de principios para crear aplicaciones **escalables, portables y mantenibles** en la nube.  
Se aplica tanto a monolitos modulares como a microservicios modernos.

---

## 1. Codebase (Repositorio único)
- Una sola base de código versionada en Git.  
- Muchas *deploys* posibles (dev, staging, prod) desde el mismo repo.  

---

## 2. Dependencies (Dependencias explícitas)
- Declarar dependencias en un *dependency manager*:  
  - Java → `pom.xml`  
  - Node.js → `package.json`  
  - Python → `requirements.txt`  
- Nunca confiar en dependencias “del sistema”.

---

## 3. Config (Config fuera del código)
- Variables de entorno (`ENV`) para credenciales, URLs, claves secretas.  
- No hardcodear nada sensible en el código.

---

## 4. Backing Services (Servicios externos como recursos)
- DB, colas, APIs → tratados como *recursos adjuntos*.  
- Intercambiables sin modificar el código.  
  - Ejemplo: de MySQL local → RDS en AWS.  

---

## 5. Build, Release, Run (Separación de fases)
- **Build** → compila y empaqueta código.  
- **Release** → mezcla build + config específica.  
- **Run** → ejecuta la app.  
- Cada release debe ser trazable y reproducible.

---

## 6. Processes (Stateless)
- La app debe ser **sin estado**.  
- El estado se guarda en DB, caché o almacenamiento externo.  

---

## 7. Port Binding (Autónoma)
- La app expone un puerto (`:8080`).  
- No depender de servidores externos como Apache/Nginx (pueden ir delante como proxy).  

---

## 8. Concurrency (Escalar con procesos)
- Escalar horizontalmente lanzando más procesos o instancias.  
- Ejemplo: Kubernetes pods, múltiples workers.  

---

## 9. Disposability (Arranque y apagado rápido)
- Arranque rápido → facilita *deploys* y *scaling*.  
- Apagado limpio → libera recursos y cierra conexiones correctamente.  

---

## 10. Dev/Prod Parity (Paridad de entornos)
- Dev, staging y prod deben ser lo más parecidos posible.  
- Mismas versiones de lenguaje, dependencias y servicios.  

---

## 11. Logs (Logs como flujo de eventos)
- La app escribe logs en **stdout/stderr**.  
- El entorno los recolecta (ej. ELK, Loki, CloudWatch).  
- No manejar ficheros de logs manualmente.  

---

## 12. Admin Processes (Procesos de administración aislados)
- Migraciones, scripts y jobs → ejecutarse en el mismo entorno que la app.  
- Ejemplo:  
  - `mvn flyway:migrate`  
  - `npm run migrate`  

---

# 🚀 Beneficios
- Escalabilidad horizontal sencilla.  
- Deploys consistentes y rápidos.  
- Menos fallos por diferencias entre entornos.  
- Preparado para CI/CD y cloud-native.  

---

# ✅ Ejemplo aplicado a Spring Boot + React/Node
- **Codebase**: monorepo en Git.  
- **Dependencies**: `pom.xml` (Java) + `package.json` (frontend).  
- **Config**: variables `ENV` → `DB_URL`, `JWT_SECRET`.  
- **Backing Services**: DB en Docker local → PostgreSQL en cloud.  
- **Build/Release/Run**: Docker + GitHub Actions.  
- **Processes**: app stateless (estado en DB/Redis).  
- **Logs**: logs JSON en `stdout`.  
- **Admin**: migraciones con Flyway.  

---
