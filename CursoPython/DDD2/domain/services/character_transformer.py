from domain.models.character import Character


class CharacterTransformer:
    def transform(self, character):
        character.name = character.name.upper()  # Ejemplo de transformación
        return character
