<<<<<<< HEAD
# domain/services/character_event_service.py
import logging
=======
>>>>>>> 958259630b69b19a7b1e95b761036fd4ac0d6108
from domain.events.character_event import CharacterEvent


class CharacterEventService:
    def create_event(self, character, event_type):
        return CharacterEvent(event_type=event_type, character=character)

    def publish(self, event):
        print(f"Event Published: {event}")
