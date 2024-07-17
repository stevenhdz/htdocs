import requests
from src.domain.entities.character import Character
from src.domain.repositories.character_repository import CharacterRepository


class RickAndMortyAPI(CharacterRepository):
    BASE_URL = "https://rickandmortyapi.com/api"

    def get_character(self, character_id):
        response = requests.get(f"{self.BASE_URL}/character/{character_id}")
        data = response.json()
        return Character(
            id=data['id'],
            name=data['name'],
            status=data['status'],
            species=data['species'],
            type=data['type'],
            gender=data['gender']
        )
