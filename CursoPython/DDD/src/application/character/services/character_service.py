from src.application.character.dto.character_dto import CharacterDTO


class CharacterService:
    def __init__(self, character_repository):
        self.character_repository = character_repository

    def get_character(self, character_id):
        character = self.character_repository.get_character(character_id)
        return CharacterDTO.from_entity(character)
