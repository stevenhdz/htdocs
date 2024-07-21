import requests
from domain.entities.character import Character
from domain.repositories.character_repository import CharacterRepository


class RickAndMortyAPI(CharacterRepository):
    BASE_URL = "https://rickandmortyapi.com/api/character"

    def get_character_by_id(self, character_id: int) -> Character:
        response = requests.get(f"{self.BASE_URL}/{character_id}")
        response.raise_for_status()
        return Character(**response.json())

    def get_all_characters(self) -> list[Character]:
        response = requests.get(self.BASE_URL)
        response.raise_for_status()
        characters = [Character(**char) for char in response.json()["results"]]
        return characters
