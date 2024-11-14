from flask import Flask, request
from infrastructure.external_adapters.api_adapter import RickAndMortyApiAdapter
from infrastructure.internal_adapters.db_adapter import SqliteCharacterRepository
from infrastructure.internal_adapters.logger_adapter import SimpleLogger
from infrastructure.controllers.character_controller import CharacterController
from application.use_cases.get_character import GetCharacter
from domain.services.character_event_service import CharacterEventService
from domain.services.character_transformer import CharacterTransformer
from application.use_cases.get_character import GetCharacter
from infrastructure.controllers.character_controller import CharacterController

app = Flask(__name__)

# Configuraciones e inyecciones de dependencias
character_repository = SqliteCharacterRepository('characters.db')
api_adapter = RickAndMortyApiAdapter("https://rickandmortyapi.com/api")
logger = SimpleLogger()
event_service = CharacterEventService()
transformer = CharacterTransformer()

# Casos de uso y controlador
get_character_use_case = GetCharacter(
    character_repository, api_adapter, logger, event_service, transformer)
character_controller = CharacterController(get_character_use_case)

# Rutas


@app.route("/characters", methods=["GET"])
def get_characters():
    return character_controller.get_characters()


@app.route("/characters/<int:character_id>", methods=["GET"])
def get_character_by_id(character_id):
    return character_controller.get_character_by_id(character_id)


if __name__ == "__main__":
    app.run(debug=True)
