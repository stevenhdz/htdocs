from typing import Optional, List, Dict
from domain.entities.character import Character


class CharacterDTO:
    def __init__(
        self,
        id: int,
        name: str,
        status: Optional[str] = None,
        species: Optional[str] = None,
        type: Optional[str] = None,
        gender: Optional[str] = None,
        origin: Optional[Dict] = None,
        location: Optional[Dict] = None,
        image: Optional[str] = None,
        episode: Optional[List[str]] = None,
        url: Optional[str] = None,
        created: Optional[str] = None
    ):
        self.id = id
        self.name = name
        self.status = status
        self.species = species
        self.type = type
        self.gender = gender
        self.origin = origin or {}
        self.location = location or {}
        self.image = image or ''
        self.episode = episode or []
        self.url = url or ''
        self.created = created or ''

    @staticmethod
    def from_character(character: Character):
        return CharacterDTO(
            id=character.id,
            name=character.name,
            status=character.status,
            species=character.species,
            type=character.type,
            gender=character.gender,
            origin=character.origin or {},
            location=character.location or {},
            image=character.image or '',
            episode=character.episode or [],
            url=character.url or '',
            created=character.created or ''
        )

    def to_dict(self):
        return self.__dict__
