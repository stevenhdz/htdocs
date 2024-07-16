from abc import ABC, abstractmethod
from typing import List, Optional
from domain.entities.episode import Episode


class EpisodeRepository(ABC):
    @abstractmethod
    def get_by_id(self, episode_id: int) -> Optional[Episode]:
        pass

    @abstractmethod
    def get_all(self) -> List[Episode]:
        pass
