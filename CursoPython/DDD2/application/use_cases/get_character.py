# CursoPython/DDD2/application/use_cases/get_character.py
from domain.services.character_event_service import CharacterEventService
from domain.services.character_transformer import CharacterTransformer


class GetCharacter:
    def __init__(self, character_repository, character_api, logger, event_service: CharacterEventService, transformer: CharacterTransformer):
        self.character_repository = character_repository
        self.character_api = character_api
        self.logger = logger
        self.event_service = event_service
        self.transformer = transformer

    def execute(self, character_id=None):
        if character_id:
            character = self.character_repository.find_by_id(character_id)
            if character:
                self.logger.info(f"Found character by ID: {character.name}")
                return self.transformer.transform(character)
            else:
                character = self.character_api.get_character_by_id(
                    character_id)
                if character:
                    self.character_repository.save(character)
                    event = self.event_service.create_event(
                        character, "Character Retrieved from API")
                    self.event_service.publish(event)
                    self.logger.info(
                        f"Character retrieved from API and saved: {character}")
                    return character
                else:
                    self.logger.error(
                        f"Character with ID {character_id} not found in API")
                    return None
        else:
            characters = self.character_repository.find_all()
            if not characters:
                characters = self.character_api.get_characters()
                for char in characters:
                    self.character_repository.save(char)
                self.logger.info(
                    f"Saved {len(characters)} characters from API")
            return characters
