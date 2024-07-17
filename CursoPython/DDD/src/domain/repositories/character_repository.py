from abc import ABC, abstractmethod


class CharacterRepository(ABC):
    @abstractmethod
    def get_character(self, character_id):
        pass
