from domain.entities.character import Character


class CharacterDTO:
    def __init__(self, id: int, name: str, status: str, species: str, type: str, gender: str, origin: dict, location: dict, image: str, episode: list, url: str, created: str):
        self.id = id
        self.name = name
        self.status = status
        self.species = species
        self.type = type
        self.gender = gender
        self.origin = origin
        self.location = location
        self.image = image
        self.episode = episode
        self.url = url
        self.created = created

    @staticmethod
    def from_character(character: Character):
        return CharacterDTO(
            id=character.id,
            name=character.name,
            status=character.status,
            species=character.species,
            type=character.type,
            gender=character.gender,
            origin=character.origin,
            location=character.location,
            image=character.image,
            episode=character.episode,
            url=character.url,
            created=character.created
        )

    def to_dict(self):
        return self.__dict__
