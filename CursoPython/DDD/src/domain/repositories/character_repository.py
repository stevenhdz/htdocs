from abc import ABC, abstractmethod
from typing import List, Optional
from domain.entities.character import Character


class CharacterRepository(ABC):
    @abstractmethod
    def get_by_id(self, character_id: int) -> Optional[Character]:
        pass

    @abstractmethod
    def get_all(self) -> List[Character]:
        pass
