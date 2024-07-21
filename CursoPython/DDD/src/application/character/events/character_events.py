class CharacterReadEvent:
    def __init__(self, character_id: int):
        self.character_id = character_id


class EventPublisher:
    @staticmethod
    def publish(event):
        if isinstance(event, CharacterReadEvent):
            print(f"Character with ID {event.character_id} has been read.")
