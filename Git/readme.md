Com# Guía Completa de Comandos Git con Ejemplos

Git es una herramienta poderosa para el control de versiones. A continuación, se detallan los comandos más utilizados con ejemplos prácticos.

```bash
# Comandos Básicos
git init                     # Inicia un repositorio en la carpeta actual
# Ejemplo:
cd mi-proyecto
git init                     # Inicializa el repositorio en "mi-proyecto"

git add archivo.txt          # Prepara un archivo específico para el commit
git add .                    # Prepara todos los cambios en la carpeta
# Ejemplo:
git add index.html           # Agrega solo "index.html"
git add .                    # Agrega todos los cambios

git commit -m "mensaje"      # Guarda los cambios con un mensaje
# Ejemplo:
git commit -m "Añadí la página inicial"

git status                   # Muestra el estado de los archivos
# Ejemplo:
git status                   # Verifica qué archivos están listos o pendientes

git push origin main         # Sube los cambios al remoto en la rama 'main'
# Ejemplo:
git push origin main         # Sube los commits al repositorio remoto

git pull origin main         # Descarga y fusiona cambios del remoto
# Ejemplo:
git pull origin main         # Obtiene cambios del equipo en la rama principal

git clone <url-del-repo>     # Copia un repositorio remoto
# Ejemplo:
git clone https://github.com/user/repo.git

# Comandos Intermedios
git log                      # Ver historial de commits
git log --oneline            # Ver historial resumido
git log --graph --all        # Ver historial en formato gráfico
# Ejemplo:
git log --oneline            # Muestra un historial resumido de commits

git diff                     # Ver diferencias entre cambios sin preparar
git diff HEAD                # Comparar con el último commit
# Ejemplo:
git diff                     # Muestra los cambios realizados en los archivos

git stash                    # Guarda cambios temporalmente
git stash pop                # Recupera y aplica cambios guardados
git stash list               # Lista los cambios guardados
# Ejemplo:
git stash                    # Guarda cambios sin necesidad de un commit
git stash pop                # Restaura los cambios guardados

git branch                   # Lista las ramas disponibles
git branch nueva-rama        # Crea una nueva rama
git branch -d rama           # Borra una rama
# Ejemplo:
git branch feature-login     # Crea una rama llamada "feature-login"

git checkout main            # Cambia a la rama 'main'
git checkout archivo.txt     # Restaura un archivo al último estado commit
# Ejemplo:
git checkout main            # Cambia de rama
git checkout style.css       # Restaura el archivo "style.css"

# Comandos Avanzados
git rebase main              # Reorganiza commits sobre la rama 'main'
# Ejemplo:
git checkout feature
git rebase main              # Aplica los commits de "feature" sobre "main"

git cherry-pick <id-commit>  # Copia un commit específico a otra rama
# Ejemplo:
git cherry-pick 1a2b3c4d     # Aplica el commit específico

git reset --soft HEAD~1      # Revierte el último commit, mantiene cambios
git reset --hard HEAD~1      # Revierte el último commit y elimina cambios
# Ejemplo:
git reset --soft HEAD~1      # Elimina el commit pero mantiene los archivos
git reset --hard HEAD~1      # Elimina todo: commit y cambios en los archivos

git revert <id-commit>       # Deshace un commit con un nuevo commit
# Ejemplo:
git revert 1a2b3c4d          # Deshace el commit con ID específico

git merge feature            # Fusiona la rama 'feature' con la actual
# Ejemplo:
git merge feature-login      # Fusiona "feature-login" en la rama actual

git tag v1.0                 # Crea una etiqueta llamada 'v1.0'
git push origin v1.0         # Sube la etiqueta al repositorio remoto
# Ejemplo:
git tag v1.0                 # Marca la versión 1.0
git push origin v1.0         # Sube la etiqueta al remoto

git fetch origin             # Descarga cambios del remoto sin fusionarlos
# Ejemplo:
git fetch origin             # Sincroniza cambios del remoto con las ramas locales

git remote add origin <url>  # Conecta un repositorio remoto
git remote -v                # Lista los remotos conectados
# Ejemplo:
git remote add origin https://github.com/user/repo.git
git remote -v                # Verifica que el remoto esté conectado correctamente

# Flujo Básico de Git
git init                     # Inicia el repositorio
git add .                    # Prepara los archivos para el commit
git commit -m "Primer commit" # Guarda los cambios
git remote add origin <url>  # Conecta al remoto
git push -u origin main      # Sube los cambios iniciales
git branch feature           # Crea una nueva rama para una funcionalidad
git checkout feature         # Cambia a la rama nueva
git merge feature            # Fusiona la rama 'feature' cuando está lista
