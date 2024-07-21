from abc import ABC, abstractmethod
from ...domain.entities.character import Character


class CharacterRepository(ABC):
    @abstractmethod
    def get_character_by_id(self, character_id: int) -> Character:
        pass

    @abstractmethod
    def get_all_characters(self) -> list[Character]:
        pass
