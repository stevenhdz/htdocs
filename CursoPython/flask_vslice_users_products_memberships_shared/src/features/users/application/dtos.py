from dataclasses import dataclass

@dataclass
class CreateUserDTO:
    name: str
    email: str
