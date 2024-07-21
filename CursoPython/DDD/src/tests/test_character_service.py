import unittest
from unittest.mock import MagicMock
from ..application.services.character_service import CharacterService
from ..domain.entities.character import Character
from ..application.dtos.character_dto import CharacterDTO


class TestCharacterService(unittest.TestCase):

    def setUp(self):
        self.mock_repository = MagicMock()
        self.character_service = CharacterService(self.mock_repository)

    def test_get_character_by_id(self):
        test_character = Character(
            id=1, name="Rick Sanchez", status="Alive", species="Human", type="",
            gender="Male", origin={}, location={}, image="", episode=[], url="", created=""
        )
        self.mock_repository.get_character_by_id.return_value = test_character

        result = self.character_service.get_character_by_id(1)

        self.mock_repository.get_character_by_id.assert_called_once_with(1)
        self.assertEqual(result, CharacterDTO.from_character(test_character))

    def test_get_all_characters(self):
        test_characters = [
            Character(
                id=1, name="Rick Sanchez", status="Alive", species="Human", type="",
                gender="Male", origin={}, location={}, image="", episode=[], url="", created=""
            ),
            Character(
                id=2, name="Morty Smith", status="Alive", species="Human", type="",
                gender="Male", origin={}, location={}, image="", episode=[], url="", created=""
            )
        ]
        self.mock_repository.get_all_characters.return_value = test_characters

        result = self.character_service.get_all_characters()

        self.mock_repository.get_all_characters.assert_called_once()
        self.assertEqual(result, [CharacterDTO.from_character(
            char) for char in test_characters])


if __name__ == '__main__':
    unittest.main()
