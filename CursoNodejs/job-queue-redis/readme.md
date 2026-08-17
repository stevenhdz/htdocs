# 📨 Mini Job Queue con Redis (Node.js)

Motor de colas sencillo en Node.js usando **Redis** como backend.

Incluye:

- `producer` → encola trabajos (jobs).
- `worker` → procesa trabajos en background.
- `inspect` → inspecciona en Redis el estado de todos los jobs.

Cola de ejemplo: **envío de correos** (`send_email`), pero el patrón sirve para cualquier tipo de job (webhooks, PDFs, reportes, etc.).

---

## ⚙️ Requisitos previos

- Node.js (v20+ recomendado).
- Redis corriendo (puede ser en Podman).

Ejemplo Redis con Podman:

```bash
podman volume create redis_data

podman run -d \
  --name redis \
  -p 6379:6379 \
  -v redis_data:/data \
  docker.io/library/redis:7 \
  redis-server --appendonly yes

podman exec -it redis redis-cli ping
# PONG
