import requests
from domain.entities.character import Character
from domain.repositories.character_repository import CharacterRepository


class RickAndMortyAPI(CharacterRepository):
    BASE_URL = "https://rickandmortyapi.com/api/character"

    def get_character_by_id(self, character_id: int) -> Character:
        response = requests.get(f"{self.BASE_URL}/{character_id}")
        response.raise_for_status()
        data = response.json()
        return Character(
            id=data.get("id"),
            name=data.get("name"),
            status=data.get("status"),
            species=data.get("species"),
            type=data.get("type"),
            gender=data.get("gender"),
            origin=data.get("origin", {}),
            location=data.get("location", {}),
            image=data.get("image", ""),
            episode=data.get("episode", []),
            url=data.get("url", ""),
            created=data.get("created", "")
        )

    def get_all_characters(self) -> list[Character]:
        response = requests.get(self.BASE_URL)
        response.raise_for_status()
        characters = [Character(**char) for char in response.json()["results"]]
        return characters
