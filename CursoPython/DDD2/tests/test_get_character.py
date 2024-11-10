import unittest
from unittest.mock import Mock
from application.use_cases.get_character import GetCharacter
from domain.models.character import Character


class TestGetCharacter(unittest.TestCase):
    def setUp(self):
        self.character_repo = Mock()
        self.character_api = Mock()
        self.logger = Mock()
        self.event_service = Mock()
        self.transformer = Mock()
        self.use_case = GetCharacter(
            character_repository=self.character_repo,
            character_api=self.character_api,
            logger=self.logger,
            event_service=self.event_service,
            transformer=self.transformer
        )

    def test_execute_find_character_by_id_in_repository(self):
        character = Character(id=1, name="Rick", species="Human")
        self.character_repo.find_by_id.return_value = character
        result = self.use_case.execute(character_id=1)
        self.assertEqual(result, self.transformer.transform.return_value)
        self.character_repo.find_by_id.assert_called_once_with(1)
        self.logger.info.assert_called()

    def test_execute_find_character_by_id_in_api(self):
        character = Character(id=1, name="Rick", species="Human")
        self.character_repo.find_by_id.return_value = None
        self.character_api.get_character_by_id.return_value = character
        result = self.use_case.execute(character_id=1)
        self.character_repo.save.assert_called_once_with(character)
        self.event_service.create_event.assert_called_once_with(
            character, "Character Retrieved from API")
        self.event_service.publish.assert_called()
        self.assertEqual(result, character)

    def test_execute_find_all_characters_in_repository(self):
        characters = [Character(id=1, name="Rick", species="Human")]
        self.character_repo.find_all.return_value = characters
        result = self.use_case.execute()
        self.assertEqual(result, characters)
