Recomendaciones para un dockerfile mas optimo y rapido:

Capas (Layer Caching):

    Copia solo package.json y package-lock.json primero.

    Ejecuta npm ci para instalar dependencias.

    Finalmente, copia el resto del código (COPY . .).

    Objetivo: Asegurar que la costosa instalación de dependencias solo se ejecute si los archivos de bloqueo cambian.

    
Multi-stage Builds:

    Divide el Dockerfile en etapas: deps (dependencias) → build (compilación) → runtime (imagen final).

    Objetivo: Reducir drásticamente el tamaño de la imagen final al excluir herramientas de desarrollo y archivos intermedios.

    
BuildKit + Caché de Montaje:

    Activa BuildKit con DOCKER_BUILDKIT=1.

    Usa --mount=type=cache,target=/root/.npm (o similar) en el comando RUN npm ci.

    Objetivo: Evitar que npm descargue dependencias desde internet en cada build, acelerando la instalación.

    
.dockerignore:

    Excluye directorios y archivos innecesarios del contexto de build.

    Incluye: node_modules/, dist/, .git/, logs, etc.

    Objetivo: Minimizar el tamaño del contexto copiado inicialmente y evitar archivos basura en la imagen.

```docker
podman builder prune -af
```

Desde cero fast es mejor

```docker
/usr/bin/time -f "slow-1: %E" podman build --progress=plain -f Dockerfile.slow -t localhost/hello:slow .

/usr/bin/time -f "fast-1: %E" podman build  --progress=plain -f Dockerfile.fast -t  localhost/hello:fast .
```

Con cambios fast es mejor
```
echo "// cambio" >> src/server.js
```

```docker
/usr/bin/time -f "slow-1: %E" podman build --progress=plain -f Dockerfile.slow -t localhost/hello:slow .

/usr/bin/time -f "fast-1: %E" podman build  --progress=plain -f Dockerfile.fast -t  localhost/hello:fast .
```

Sin cambios la diferencia es minima siendo asi slow mejor que fast

```docker
/usr/bin/time -f "slow-1: %E" podman build --progress=plain -f Dockerfile.slow -t localhost/hello:slow .

/usr/bin/time -f "fast-1: %E" podman build  --progress=plain -f Dockerfile.fast -t  localhost/hello:fast .
```

#### export BUILDAH_LAYERS=1

```docker
Caso                 slow        fast
-----------------------------------------
Cold start           11.95 s     1.80 s   ← gran mejora (deps cacheadas + menos I/O)
Cambio solo código   1.84 s      0.40 s   ← reuse de deps en fast
Sin cambios          0.18 s      0.50 s   ← mas pasos en fast
```

```docker
podman run --rm -p 3000:3000 localhost/hello:fast

podman run --rm -p 3000:3000 localhost/hello:slow
```

Busqueda de imagen en internet o local

```docker
--pull=missing
--pull=never
--pull=always
```

No usar cache

```docker
--no-cache
```

# En otra terminal:
```
curl -s http://localhost:3000/
```