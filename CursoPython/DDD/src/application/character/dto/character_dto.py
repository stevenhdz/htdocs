class CharacterDTO:
    def __init__(self, id, name, status, species, type, gender):
        self.id = id
        self.name = name
        self.status = status
        self.species = species
        self.type = type
        self.gender = gender

    @staticmethod
    def from_entity(character):
        return CharacterDTO(
            id=character.id,
            name=character.name,
            status=character.status,
            species=character.species,
            type=character.type,
            gender=character.gender
        )

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "status": self.status,
            "species": self.species,
            "type": self.type,
            "gender": self.gender
        }
