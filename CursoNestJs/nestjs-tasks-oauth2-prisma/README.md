# NestJS Tasks App — CRUD + Filtros + Paginación + MySQL + OAuth 2.0 (Google) + Prisma + Swagger + Tests

## 🔧 Requisitos
- Node 18+
- MySQL 8+
- Cuenta Google Cloud (OAuth 2.0)

## 🚀 Pasos
```bash
# 1) Instalar dependencias
npm i

# 2) Copiar .env.example a .env y ajustar credenciales
cp .env.example .env

# 3) Migraciones Prisma
npx prisma migrate dev

# 4) Arrancar
npm run start:dev

# 5) Docs Swagger
# http://localhost:3000/docs
```

## 🧪 Tests
```bash
npm test
npm run test:e2e
npm run test -- --coverage
```

## 🔐 Flujo OAuth
- GET `/auth/google` → redirige a Google
- Google devuelve a `/auth/google/callback` → obtienes `{ accessToken }`
- Usa el token como `Authorization: Bearer <token>` con `/tasks`

> Si ves “Failed to fetch” en Swagger, confirma CORS, host/puerto y que usas `http(s)://`.
