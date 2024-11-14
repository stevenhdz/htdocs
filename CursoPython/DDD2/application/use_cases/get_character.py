# CursoPython/DDD2/application/use_cases/get_character.py
from domain.services.character_event_service import CharacterEventService
from domain.services.character_transformer import CharacterTransformer
from domain.ports.character_api import CharacterApi  # Puerto para la API
# Puerto para el repositorio
from domain.ports.character_repository import CharacterRepository
from domain.ports.logger import Logger  # Puerto para el logger


class GetCharacter:
    def __init__(self, character_repository: CharacterRepository, character_api: CharacterApi, logger: Logger, event_service: CharacterEventService, transformer: CharacterTransformer):
        # Aquí se está usando la interfaz (puerto) en lugar de la implementación directa
        self.character_repository = character_repository
        self.character_api = character_api
        self.logger = logger
        self.event_service = event_service
        self.transformer = transformer

    def execute(self, character_id=None):
        if character_id:
            character = self.character_repository.find_by_id(
                character_id)  # Uso del puerto
            if character:
                # Uso del puerto
                self.logger.info(f"Found character by ID: {character.name}")
                return self.transformer.transform(character)
            else:
                character = self.character_api.get_character_by_id(
                    character_id)  # Uso del puerto
                if character:
                    self.character_repository.save(character)  # Uso del puerto
                    event = self.event_service.create_event(
                        character, "Character Retrieved from API")
                    self.event_service.publish(event)
                    # Uso del puerto
                    self.logger.info(
                        f"Character retrieved from API and saved: {character}")
                    return character
                else:
                    # Uso del puerto
                    self.logger.error(
                        f"Character with ID {character_id} not found in API")
                    return None
        else:
            characters = self.character_repository.find_all()  # Uso del puerto
            if not characters:
                characters = self.character_api.get_characters()  # Uso del puerto
                for char in characters:
                    self.character_repository.save(char)  # Uso del puerto
                # Uso del puerto
                self.logger.info(
                    f"Saved {len(characters)} characters from API")
            return characters
