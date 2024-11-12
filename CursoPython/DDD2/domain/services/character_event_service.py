from domain.events.character_event import CharacterEvent


class CharacterEventService:
    def create_event(self, character, event_type):
        return CharacterEvent(event_type=event_type, character=character)

    def publish(self, event):
        print(f"Event Published: {event}")
