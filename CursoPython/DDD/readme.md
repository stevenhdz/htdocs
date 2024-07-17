Dominio:

    Entidades: Modelos con identidad (ej. Character).
    Objetos de Valor: Modelos sin identidad, definidos por atributos (ej. CharacterStatus).
    Repositorios: Interfaces para acceder y manipular entidades (ej. CharacterRepository).

Aplicación:

    Servicios de Aplicación: Lógica que orquesta operaciones (ej. CharacterService).
    Comandos y Consultas: Objetos para acciones y solicitudes de información (ej. CreateCharacterCommand, GetCharacterQuery).
    DTOs: Objetos para transferir datos entre capas (ej. CharacterDTO).

Infraestructura:

    Implementaciones de Repositorios: Clases concretas para acceder a datos (ej. CharacterRepositoryImpl).
    APIs Externas: Clases para comunicación con servicios externos (ej. RickAndMortyAPI).
    Acceso a Datos: Código para manejar bases de datos y consultas.


    ├── main.py
    ├── requirements.txt
    ├── src/
    │   ├── application/
    │   │   ├── character/
    │   │   │   ├── dto/
    │   │   │   │   ├── character_dto.py
    │   │   │   │   └── __init__.py
    │   │   │   ├── services/
    │   │   │   │   ├── character_service.py
    │   │   │   │   └── __init__.py
    │   │   │   └── __init__.py
    │   ├── domain/
    │   │   ├── entities/
    │   │   │   ├── character.py
    │   │   │   └── __init__.py
    │   │   ├── repositories/
    │   │   │   ├── character_repository.py
    │   │   │   └── __init__.py
    │   │   └── __init__.py
    │   ├── infrastructure/
    │   │   ├── external_api/
    │   │   │   ├── rick_and_morty_api.py
    │   │   │   └── __init__.py
    │   │   └── __init__.py
    │   └── __init__.py