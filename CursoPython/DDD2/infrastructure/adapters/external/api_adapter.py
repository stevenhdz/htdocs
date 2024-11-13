# domain/adapters/external/api_adapter.py
import requests
from domain.ports.character_api import CharacterApi
from domain.models.character import Character


class RickAndMortyApiAdapter(CharacterApi):
    def __init__(self, api_url):
        self.api_url = api_url

    def get_characters(self):
        try:
            response = requests.get(f"{self.api_url}/character")
            response.raise_for_status()
            return [Character(id=char['id'], name=char['name'], species=char['species']) for char in response.json()['results']]
        except requests.RequestException as e:
            print(f"API Error: {e}")
            return []

    def get_character_by_id(self, character_id):
        try:
            response = requests.get(f"{self.api_url}/character/{character_id}")
            response.raise_for_status()
            data = response.json()
            return Character(id=data['id'], name=data['name'], species=data['species'])
        except requests.RequestException as e:
            print(f"API Error: {e}")
            return None
