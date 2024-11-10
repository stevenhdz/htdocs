import unittest
from domain.models.character import Character


class TestCharacterModel(unittest.TestCase):
    def test_character_initialization(self):
        character = Character(id=1, name="Rick Sanchez", species="Human")
        self.assertEqual(character.id, 1)
        self.assertEqual(character.name, "Rick Sanchez")
        self.assertEqual(character.species, "Human")

    def test_character_str(self):
        character = Character(id=1, name="Rick Sanchez", species="Human")
        self.assertEqual(
            str(character), "Character(id=1, name=Rick Sanchez, species=Human)")
