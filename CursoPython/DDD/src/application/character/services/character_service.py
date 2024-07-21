from domain.repositories.character_repository import CharacterRepository
from application.character.use_cases.get_character_by_id_use_case import GetCharacterByIdUseCase
from application.character.use_cases.get_all_characters_use_case import GetAllCharactersUseCase
from application.character.dtos.character_dto import CharacterDTO


class CharacterService:
    def __init__(self, repository: CharacterRepository):
        self.get_character_by_id_use_case = GetCharacterByIdUseCase(repository)
        self.get_all_characters_use_case = GetAllCharactersUseCase(repository)

    def get_character_by_id(self, character_id: int) -> CharacterDTO:
        return self.get_character_by_id_use_case.execute(character_id)

    def get_all_characters(self) -> list[CharacterDTO]:
        return self.get_all_characters_use_case.execute()
