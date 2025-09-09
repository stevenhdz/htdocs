# Vertical Slice DDD — AddUser (Flask + SQLAlchemy + MySQL) — sin tipado

## Requisitos
- Python 3.10+
- Docker (opcional, recomendado para MySQL)
- MySQL 8 si lo corres local
- `pip install -r requirements.txt`

## Levantar MySQL con Docker
```bash
cp .env.example .env
docker-compose up -d
```

Esto crea la DB y tablas con `schema.sql`.

## Correr la app
```bash
pip install -r requirements.txt
python main.py
```

API: `POST http://127.0.0.1:5000/users`

Body JSON ejemplo:
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "S3cret!",
  "role_id": 1,
  "home_muni_id": null,
  "config_profile": {"theme": "dark", "lang": "es"}
}
```

Respuesta esperada (201):
```json
{
  "id": 1,
  "event": {"type": "UserRegistered", "user_id": 1, "email": "jane@example.com"}
}
```

## Estructura
- `config/` → configuración de DB (fuera de las capas)
- `app/user/...` → vertical slice (interfaces → controller → use case → domain → repo)
- `schema.sql` → DDL (roles, municipalities, users)

## Notas
- Dominio no conoce Flask ni SQLAlchemy.
- Controller hace wiring y delega.
- Repositorio usa SQLAlchemy (puedes cambiar a PyMySQL si prefieres SQL crudo).
- No se incluyen tests por preferencia del usuario.
