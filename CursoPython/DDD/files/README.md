# Ejemplo de Diseño Guiado por el Dominio (DDD) en Python

Este proyecto demuestra cómo implementar Diseño Guiado por el Dominio (DDD) en Python. Incluye lo siguiente:

- Modelo de Dominio
- Repositorios
- Casos de Uso (Servicios de Aplicación)
- Puntos de Entrada (por ejemplo, CLI)

## Estructura del Directorio

```
.
├── domain
│   ├── models
│   │   ├── __init__.py
│   │   └── order.py
│   ├── ports
│   │   ├── __init__.py
│   │   └── order_repository.py
│   └── services
│       ├── __init__.py
│       └── order_service.py
├── application
│   ├── __init__.py
│   └── use_cases
│       ├── __init__.py
│       ├── create_order.py
│       └── add_item_to_order.py
├── infra
│   ├── __init__.py
│   ├── adapters
│   │   ├── __init__.py
│   │   └── in_memory_order_repository.py
│   ├── repository
│   │   ├── __init__.py
│   │   └── in_memory_repository.py
│   ├── controllers
│   │   ├── __init__.py
│   │   └── main.py
│   ├── querys
│   │   ├── __init__.py
│   │   └── order_query.py
│   └── models
│       ├── __init__.py
│       └── order_model.py
└── README.md
```

## Uso

```bash
python infra/controllers/main.py
```