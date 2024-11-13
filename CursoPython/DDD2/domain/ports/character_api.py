# CursoPython/DDD2/domain/ports/character_api.py
from abc import ABC, abstractmethod


class CharacterApi(ABC):
    @abstractmethod
    def get_characters(self):
        pass

    @abstractmethod
    def get_character_by_id(self, character_id):
        pass
