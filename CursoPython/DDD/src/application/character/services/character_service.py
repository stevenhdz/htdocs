from ....domain.repositories.character_repository import CharacterRepository
from ....application.character.dtos.character_dto import CharacterDTO


class CharacterService:
    def __init__(self, repository: CharacterRepository):
        self.repository = repository

    def get_character_by_id(self, character_id: int) -> CharacterDTO:
        character = self.repository.get_character_by_id(character_id)
        return CharacterDTO.from_character(character)

    def get_all_characters(self) -> list[CharacterDTO]:
        characters = self.repository.get_all_characters()
        return [CharacterDTO.from_character(char) for char in characters]
