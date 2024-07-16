from dataclasses import dataclass


@dataclass
class Character:
    id: int
    name: str
    species: str
    status: str
