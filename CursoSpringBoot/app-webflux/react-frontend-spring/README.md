# React Frontend para Spring Boot APIs

Frontend en React + Vite (TypeScript) organizado para consumir las APIs de autenticación, productos y órdenes.

## Correr en local

```bash
npm install
npm run dev
```

Variables opcionales:
- `VITE_API_BASE_URL` (por defecto `http://localhost:8080`)

## Estructura

- `src/api` — clientes HTTP (axios) por dominio: auth, products, orders
- `src/auth` — contexto de autenticación (token JWT)
- `src/components` — componentes UI (Navbar, ProtectedRoute, etc.)
- `src/pages` — páginas (Login, Register, Products, Cart, Checkout, MyOrders, OrderDetail, etc.)
