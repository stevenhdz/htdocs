import unittest
from domain.models.character import Character
from domain.services.character_transformer import CharacterTransformer


class TestCharacterTransformer(unittest.TestCase):
    def test_transform_character_name_to_uppercase(self):
        character = Character(id=1, name="Rick Sanchez", species="Human")
        transformer = CharacterTransformer()
        transformed_character = transformer.transform(character)
        self.assertEqual(transformed_character.name, "RICK SANCHEZ")
