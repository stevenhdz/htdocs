from dataclasses import dataclass
from shared.ids import UserId
from .value_objects import Email

@dataclass
class User:
    id: UserId
    name: str
    email: Email
