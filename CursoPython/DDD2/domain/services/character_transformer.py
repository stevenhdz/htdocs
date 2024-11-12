class CharacterTransformer:
    def transform(self, character):
        character.name = character.name.upper()  # Ejemplo de transformación
        return character
