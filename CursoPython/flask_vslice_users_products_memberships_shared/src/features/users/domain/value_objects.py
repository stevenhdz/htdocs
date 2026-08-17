from dataclasses import dataclass
from .errors import ValidationError

@dataclass(frozen=True)
class Email:
    value: str
    def __post_init__(self):
        if "@" not in self.value:
            raise ValidationError("Email inválido")
