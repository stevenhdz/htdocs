# CursoPython/DDD2/domain/services/character_transformer.py
from domain.models.character import Character


class CharacterTransformer:
    def transform(self, character: Character):
        character.name = character.name.upper()  # Ejemplo de transformación
        return character
