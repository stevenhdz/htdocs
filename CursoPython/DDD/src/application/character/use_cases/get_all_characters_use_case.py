from domain.repositories.character_repository import CharacterRepository
from application.character.dtos.character_dto import CharacterDTO


class GetAllCharactersUseCase:
    def __init__(self, repository: CharacterRepository):
        self.repository = repository

    def execute(self) -> list[CharacterDTO]:
        characters = self.repository.get_all_characters()
        return [CharacterDTO.from_character(char) for char in characters]
