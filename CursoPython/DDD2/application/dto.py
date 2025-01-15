from dataclasses import dataclass


@dataclass
class UserDTO:
    id: str
    name: str
    email: str
