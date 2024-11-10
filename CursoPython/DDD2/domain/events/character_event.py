class CharacterEvent:
    def __init__(self, event_type, character):
        self.event_type = event_type
        self.character = character

    def __str__(self):
        return f"Event({self.event_type}) for Character({self.character.id}, {self.character.name})"
