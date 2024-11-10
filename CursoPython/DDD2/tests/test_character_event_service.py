import unittest
from domain.models.character import Character
from domain.events.character_event import CharacterEvent
from domain.services.character_event_service import CharacterEventService
import logging


class TestCharacterEventService(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        # Configura el logger
        logging.basicConfig(level=logging.INFO)

    def test_create_event(self):
        character = Character(id=1, name="Rick Sanchez", species="Human")
        event_service = CharacterEventService()
        event = event_service.create_event(character, "Character Created")
        self.assertIsInstance(event, CharacterEvent)
        self.assertEqual(event.event_type, "Character Created")
        self.assertEqual(event.character, character)

    def test_publish_event(self):
        character = Character(id=1, name="Rick Sanchez", species="Human")
        event = CharacterEvent("Character Created", character)
        event_service = CharacterEventService()

        # Captura los logs
        with self.assertLogs(level='INFO') as log:
            event_service.publish(event)

            # Verifica si el mensaje del evento fue emitido
            self.assertTrue(
                any("Event Published" in message for message in log.output),
                f"Expected 'Event Published' in log, but got {log.output}"
            )

            # Imprime los logs para ver su contenido
            print("Captured logs:", log.output)
