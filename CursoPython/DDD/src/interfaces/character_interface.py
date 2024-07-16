
from application.character_service import CharacterService
from infrastructure.api.api_character_repository import APICharacterRepository


class CharacterInterface:
    def __init__(self):
        self.character_service = CharacterService(APICharacterRepository())

    def get_character(self, character_id: int):
        character = self.character_service.get_character(character_id)
        if character:
            print(
                f"Character: {character.name}, Species: {character.species}, Status: {character.status}")
        else:
            print("Character not found")

    def list_characters(self):
        characters = self.character_service.list_characters()
        for character in characters:
            print(
                f"Character: {character.name}, Species: {character.species}, Status: {character.status}")
