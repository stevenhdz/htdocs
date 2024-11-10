from abc import ABC, abstractmethod
from domain.models.character import Character


class CharacterRepository(ABC):
    @abstractmethod
    def save(self, character: Character):
        pass

    @abstractmethod
    def find_all(self):
        pass

    @abstractmethod
    def find_by_id(self, character_id):
        pass
