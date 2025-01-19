# GitFlow: Flujo de Trabajo en Git

## ¿Qué es GitFlow?

GitFlow es una estrategia de ramificación para Git, diseñada para gestionar el desarrollo de software de manera eficiente y organizada. Ayuda a equipos de desarrollo a manejar múltiples características, correcciones urgentes y versiones estables de forma clara y efectiva.

## Estructura de Ramas en GitFlow

GitFlow se basa en el uso de varias ramas principales y auxiliares. A continuación, se detallan las ramas que forman parte de este flujo de trabajo.

### Ramas Principales

#### `main` (o `master`)
- **Propósito:** Contiene el código listo para producción. Siempre debe tener la versión estable del proyecto.
- **Flujo:** Los cambios solo se fusionan en `main` desde las ramas `release` o `hotfix`.

#### `develop`
- **Propósito:** Es la rama de integración donde se combinan todas las nuevas características. En esta rama se encuentra el código que está listo para ser preparado para la próxima versión.
- **Flujo:** Los desarrolladores crean ramas `feature` a partir de `develop` y las fusionan en `develop` cuando están listas.

---

### Ramas Auxiliares

#### `feature/<nombre-de-la-feature>`
- **Propósito:** Se utiliza para desarrollar nuevas funcionalidades o características. Las ramas `feature` se crean desde `develop`.
- **Flujo:** Una vez que una funcionalidad está terminada, se fusiona de nuevo en `develop`.

**Pasos para crear y trabajar con una rama `feature`:**
1. **Crear una rama `feature`:**
    ```bash
    git checkout develop
    git pull origin develop
    git checkout -b feature/<nombre-de-la-feature>
    ```
2. **Realizar cambios y hacer commits:**
    ```bash
    git add .
    git commit -m "Descripción de la nueva característica"
    ```
3. **Fusionar la rama `feature` en `develop`:**
    ```bash
    git checkout develop
    git pull origin develop
    git merge feature/<nombre-de-la-feature>
    git push origin develop
    ```

#### `release/<nombre-de-la-release>`
- **Propósito:** Se utiliza para realizar los últimos ajustes antes de lanzar una nueva versión. Es ideal para corregir bugs menores y preparar la documentación final.
- **Flujo:** Después de completar la rama `release`, se fusiona tanto en `main` como en `develop`.

**Pasos para trabajar con una rama `release`:**
1. **Crear una rama `release`:**
    ```bash
    git checkout develop
    git pull origin develop
    git checkout -b release/<nombre-de-la-release>
    ```
2. **Hacer los ajustes y correcciones finales en la rama `release`.**
3. **Fusionar la rama `release` en `main` y `develop`:**
    ```bash
    git checkout main
    git pull origin main
    git merge release/<nombre-de-la-release>
    git push origin main
    
    git checkout develop
    git pull origin develop
    git merge release/<nombre-de-la-release>
    git push origin develop
    ```

#### `hotfix/<nombre-del-hotfix>`
- **Propósito:** Se utiliza para corregir errores urgentes en producción. Las ramas `hotfix` se crean desde `main`.
- **Flujo:** Después de solucionar el problema urgente, la rama `hotfix` se fusiona en `main` y `develop`.

**Pasos para trabajar con una rama `hotfix`:**
1. **Crear una rama `hotfix`:**
    ```bash
    git checkout main
    git pull origin main
    git checkout -b hotfix/<nombre-del-hotfix>
    ```
2. **Arreglar el problema urgente y hacer commits.**
3. **Fusionar la rama `hotfix` en `main` y `develop`:**
    ```bash
    git checkout main
    git pull origin main
    git merge hotfix/<nombre-del-hotfix>
    git push origin main
    
    git checkout develop
    git pull origin develop
    git merge hotfix/<nombre-del-hotfix>
    git push origin develop
    ```

---

## Flujo de Trabajo Básico

1. **Comienza con `develop`:** Todos los desarrollos deben partir de esta rama.
2. **Crea una `feature`:** Para cada nueva funcionalidad, crea una rama `feature` desde `develop`.
3. **Desarrolla en tu `feature`:** Trabaja en tu tarea sin afectar a otras ramas.
4. **Fusiona `feature` en `develop`:** Una vez completada la funcionalidad, fusiona la rama `feature` en `develop`.
5. **Crea una `release`:** Cuando el código en `develop` esté listo para producción, crea una rama `release`.
6. **Fusiona `release` en `main` y `develop`:** Una vez que la versión esté lista, fusiona la rama `release` en `main` y `develop`.
7. **Corrige errores con `hotfix`:** Si se detecta un error crítico en producción, crea una rama `hotfix` desde `main`.

---

## Beneficios de GitFlow

- **Organización clara de ramas:** Cada tipo de cambio tiene su propia rama.
- **Facilita el trabajo en equipo:** Permite que diferentes miembros del equipo trabajen en características separadas sin interferir entre sí.
- **Control sobre las versiones:** Las ramas `release` y `hotfix` permiten preparar versiones estables para producción mientras se siguen desarrollando nuevas características.
- **Historial limpio y organizado:** GitFlow mantiene el historial de commits limpio y organizado, con un flujo claro desde el desarrollo hasta la producción.

---

## Notas Adicionales

- **Uso de Pull Requests (PR):** Se recomienda utilizar PRs para fusionar ramas `feature`, `release` y `hotfix` en `develop` y `main`. Esto permite revisar el código antes de fusionarlo.
- **Evitar Rebase en `main`:** No se recomienda usar `rebase` en ramas `main` o `release`, ya que puede causar conflictos difíciles de resolver.

---

Con GitFlow, tu equipo podrá trabajar de manera más eficiente y estructurada, manteniendo el proyecto organizado y preparado para lanzamientos rápidos y seguros.

![alt text](image.png)