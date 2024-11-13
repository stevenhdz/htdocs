project/
│
├── app.py
├── config
├── shared/
│   ├── exceptions
│   └── utils
├── application/
│   └── use_cases/
│       └── character/
│         └── get_character.py
│
├── domain/
│   ├── models/
│   │   └── character.py
│   ├── ports/
│   │   ├── character_api.py
│   │   ├── character_repository.py
│   │   └── logger.py
│   ├── events/
│   │   └── character_event.py
│   └── services/
│       └── character_service.py
│
├── infrastructure/
│   ├── adapters/
│   │   ├── external/
│   │   │   └── api_adapter.py
│   │   └── internal/
│   │       ├── db_adapter.py
│   │       └── logger_adapter.py
│   ├── repositories/
│   │   ├── character_repository.py
│   └── controllers/
│       ├── character_controller.py
├── interfaces/
│   ├── character_api.py
│
└── requirements.txt

```sh {"id":"01JCBASYB48KWDPATJZJ02N0PY"}
Scripts\activate
python app.py
pytest tests
```