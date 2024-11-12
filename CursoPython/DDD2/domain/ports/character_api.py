from abc import ABC, abstractmethod
from domain.models.character import Character


class CharacterApi(ABC):
    @abstractmethod
    def get_characters(self):
        pass

    @abstractmethod
    def get_character_by_id(self, character_id):
        pass
