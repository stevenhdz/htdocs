import requests
from typing import List, Optional
from domain.entities.character import Character
from domain.repositories.character_repository import CharacterRepository


class APICharacterRepository(CharacterRepository):
    BASE_URL = "https://rickandmortyapi.com/api/character/"

    def get_by_id(self, character_id: int) -> Optional[Character]:
        response = requests.get(f"{self.BASE_URL}{character_id}")
        if response.status_code == 200:
            data = response.json()
            return Character(id=data['id'], name=data['name'], species=data['species'], status=data['status'])
        return None

    def get_all(self) -> List[Character]:
        response = requests.get(self.BASE_URL)
        characters = []
        if response.status_code == 200:
            data = response.json()
            for item in data['results']:
                characters.append(Character(
                    id=item['id'], name=item['name'], species=item['species'], status=item['status']))
        return characters
