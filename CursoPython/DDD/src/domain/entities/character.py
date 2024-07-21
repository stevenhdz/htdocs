from dataclasses import dataclass


@dataclass
class Character:
    id: int
    name: str
    status: str
    species: str
    type: str
    gender: str
    origin: dict
    location: dict
    image: str
    episode: list
    url: str
    created: str
