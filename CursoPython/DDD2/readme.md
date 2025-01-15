        project-root/
        ├── application/
        │   ├── use_cases/
        │   │   ├── register_user_use_case.py  # Lógica para registrar un usuario.
        │   │   ├── list_users_use_case.py     # Lógica para listar usuarios.
        │   └── ports/
        │       ├── input_port.py              # Interfaz para casos de uso (opcional).
        │       ├── output_port.py             # Interfaz para repositorios.
        │
        ├── domain/
        │   ├── entities/
        │   │   ├── user.py                    # Entidad de usuario con lógica de dominio.
        │   ├── services/
        │   │   ├── user_domain_service.py     # Servicio para lógica de validación.
        │   ├── repositories/
        │   │   ├── user_repository.py         # Interfaz para repositorios del dominio.
        │   ├── events/
        │   │   ├── user_registered_event.py   # Evento de dominio para notificaciones.
        │   └── exceptions/
        │       ├── domain_error.py            # Clase base para errores del dominio.
        │       ├── email_already_in_use_error.py  # Error específico del dominio.
        │
        ├── infrastructure/
        │   ├── adapters/
        │   │   ├── input/
        │   │   │   ├── user_controller.py     # Controlador HTTP (Flask, FastAPI, etc.).
        │   │   ├── output/
        │   │       ├── sqlite_user_repository.py  # Implementación del repositorio SQLite.
        │   ├── database/
        │   │   ├── init_db.py                 # Inicialización de la base de datos.
        │   └── config/
        │       ├── settings.py                # Configuración del proyecto (opcional).
        ├── main.py                            # Punto de entrada principal del proyecto.
        ├── requirements.txt                   # Dependencias del proyecto.
        └── README.md                          # Documentación del proyecto.

```sh {"id":"01JCBASYB48KWDPATJZJ02N0PY"}
Scripts\activate
python app.py
```

Resumen de Interacción entre Capas
La capa de dominio define la lógica del negocio y no conoce los detalles de infraestructura.
La capa de aplicación coordina los casos de uso, manteniendo el flujo de datos y asegurando que las reglas de negocio se apliquen correctamente.
La capa de infraestructura implementa los puertos definidos en el dominio, conectando el sistema con servicios externos o recursos internos necesarios para que la aplicación funcione.

![Alt text](<Diagrama sin título.drawio.png>)