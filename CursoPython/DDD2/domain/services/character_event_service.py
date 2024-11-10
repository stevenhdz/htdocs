import logging
from domain.events.character_event import CharacterEvent


class CharacterEventService:
    def __init__(self):
        self.logger = logging.getLogger(__name__)

    def create_event(self, character, event_type):
        return CharacterEvent(event_type=event_type, character=character)

    def publish(self, event):
        # Publicar el evento (en un sistema real, esto podría ser una acción más compleja)
        self.logger.info(f"Event Published: {event}")
