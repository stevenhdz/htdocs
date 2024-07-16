import requests
from typing import List, Optional
from domain.entities.episode import Episode
from domain.entities.character import Character
from domain.repositories.episode_repository import EpisodeRepository


class APIEpisodeRepository(EpisodeRepository):
    BASE_URL = "https://rickandmortyapi.com/api/episode/"

    def get_by_id(self, episode_id: int) -> Optional[Episode]:
        response = requests.get(f"{self.BASE_URL}{episode_id}")
        if response.status_code == 200:
            data = response.json()
            characters = self._get_characters(data['characters'])
            return Episode(id=data['id'], name=data['name'], air_date=data['air_date'], characters=characters)
        return None

    def get_all(self) -> List[Episode]:
        response = requests.get(self.BASE_URL)
        episodes = []
        if response.status_code == 200:
            data = response.json()
            for item in data['results']:
                characters = self._get_characters(item['characters'])
                episodes.append(Episode(
                    id=item['id'], name=item['name'], air_date=item['air_date'], characters=characters))
        return episodes

    def _get_characters(self, urls: List[str]) -> List[Character]:
        characters = []
        for url in urls:
            response = requests.get(url)
            if response.status_code == 200:
                data = response.json()
                characters.append(Character(
                    id=data['id'], name=data['name'], species=data['species'], status=data['status']))
        return characters
