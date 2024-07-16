from typing import Optional, List
from domain.entities.episode import Episode
from domain.repositories.episode_repository import EpisodeRepository


class EpisodeService:
    def __init__(self, episode_repository: EpisodeRepository):
        self.episode_repository = episode_repository

    def get_episode(self, episode_id: int) -> Optional[Episode]:
        return self.episode_repository.get_by_id(episode_id)

    def list_episodes(self) -> List[Episode]:
        return self.episode_repository.get_all()
