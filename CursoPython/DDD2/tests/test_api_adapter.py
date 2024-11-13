import unittest
from unittest.mock import Mock, patch
from infrastructure.adapters.external.api_adapter import RickAndMortyApiAdapter


class TestRickAndMortyApiAdapter(unittest.TestCase):
    def setUp(self):
        self.adapter = RickAndMortyApiAdapter(
            api_url="https://rickandmortyapi.com/api")

    @patch("infrastructure.external_adapters.api_adapter.requests.get")
    def test_get_characters(self, mock_get):
        mock_get.return_value.json.return_value = {
            "results": [{"id": 1, "name": "Rick", "species": "Human"}]}
        mock_get.return_value.raise_for_status = Mock()
        characters = self.adapter.get_characters()
        self.assertEqual(len(characters), 1)
        self.assertEqual(characters[0].name, "Rick")

    @patch("infrastructure.external_adapters.api_adapter.requests.get")
    def test_get_character_by_id(self, mock_get):
        mock_get.return_value.json.return_value = {
            "id": 1, "name": "Rick", "species": "Human"}
        mock_get.return_value.raise_for_status = Mock()
        character = self.adapter.get_character_by_id(character_id=1)
        self.assertEqual(character.name, "Rick")
