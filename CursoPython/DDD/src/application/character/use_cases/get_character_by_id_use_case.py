from domain.repositories.character_repository import CharacterRepository
from application.character.dtos.character_dto import CharacterDTO
from application.character.events.character_events import EventPublisher, CharacterReadEvent


class GetCharacterByIdUseCase:
    def __init__(self, repository: CharacterRepository):
        self.repository = repository

    def execute(self, character_id: int) -> CharacterDTO:
        character = self.repository.get_character_by_id(character_id)
        if character is None:
            raise ValueError(f"Character with id {character_id} not found")
        EventPublisher.publish(CharacterReadEvent(character_id=character_id))
        return CharacterDTO.from_character(character)
