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

![Alt text](assets/1_yR4C1B-YfMh5zqpbHzTyag.png)

Jerarquia:

                DDD/
        ├── Domain-driven-design/
        ├── src/
        │   ├── application/
        │   │   ├── controllers/
        │   │   │   └── character_controller.py
        │   │   ├── dtos/
        │   │   │   └── character_dto.py
        │   │   ├── events/
        │   │   │   └── character_events.py
        │   │   ├── services/
        │   │   │   └── character_service.py
        │   │   ├── use_cases/
        │   │   │   ├── get_character_by_id_use_case.py
        │   │   │   └── get_all_characters_use_case.py
        │   ├── domain/
        │   │   ├── entities/
        │   │   │   └── character.py
        │   │   ├── repositories/
        │   │   │   └── character_repository.py
        │   ├── infrastructure/
        │   │   ├── external_apis/
        │   │   │   └── rick_and_morty_api.py
        │   ├── tests/
        │   │   ├── test_character_service.py
        │   │   └── test_use_cases.py
        │   ├── config.py
        │   └── main.py
        ├── readme.md
        └── requirements.txt

Arrancar:

cd DDD

Scripts\activate

pip install -r ./requirements.txt

python -m main

python -m unittest discover src/tests