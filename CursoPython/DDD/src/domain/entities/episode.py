from dataclasses import dataclass
from typing import List
from domain.entities.character import Character


@dataclass
class Episode:
    id: int
    name: str
    air_date: str
    characters: List[Character]
