from typing import Optional, List
from domain.entities.character import Character
from domain.repositories.character_repository import CharacterRepository


class CharacterService:
    def __init__(self, character_repository: CharacterRepository):
        self.character_repository = character_repository

    def get_character(self, character_id: int) -> Optional[Character]:
        return self.character_repository.get_by_id(character_id)

    def list_characters(self) -> List[Character]:
        return self.character_repository.get_all()
