from flask import Flask, request
from infrastructure.external_adapters.api_adapter import RickAndMortyApiAdapter
from infrastructure.internal_adapters.db_adapter import SqliteCharacterRepository
from infrastructure.internal_adapters.logger_adapter import SimpleLogger
from infrastructure.controllers.character_controller import CharacterController
from application.use_cases.get_character import GetCharacter
from domain.services.character_event_service import CharacterEventService
from domain.services.character_transformer import CharacterTransformer

app = Flask(__name__)

# Configuraciones y dependencias
api_adapter = RickAndMortyApiAdapter("https://rickandmortyapi.com/api")
db_adapter = SqliteCharacterRepository("characters.db")
logger = SimpleLogger()
event_service = CharacterEventService()
transformer = CharacterTransformer()
use_case = GetCharacter(character_repository=db_adapter,
                        character_api=api_adapter, logger=logger,
                        event_service=event_service, transformer=transformer)
controller = CharacterController(use_case=use_case)

# Rutas


@app.route("/characters", methods=["GET"])
def get_characters():
    return controller.get_characters()


@app.route("/character/<int:character_id>", methods=["GET"])
def get_character_by_id(character_id):
    return controller.get_character_by_id(character_id)


if __name__ == "__main__":
    app.run(debug=True)
