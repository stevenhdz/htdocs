project/
│
├── app.py
│
├── application/
│   └── use_cases/
│       └── get_character.py
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
│   ├── external_adapters/
│   │   └── api_adapter.py
│   │
│   ├── internal_adapters/
│   │   ├── db_adapter.py
│   │   ├── logger_adapter.py
│   │
│   ├── controllers/
│   │   └── character_controller.py
│
└── requirements.txt

```sh {"id":"01JCBASYB48KWDPATJZJ02N0PY"}
Scripts\activate
python app.py
pytest tests
```