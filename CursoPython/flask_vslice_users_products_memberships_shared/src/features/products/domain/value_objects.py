from dataclasses import dataclass
from .errors import ValidationError

@dataclass(frozen=True)
class Price:
    value: float
    def __post_init__(self):
        if self.value < 0:
            raise ValidationError("El precio no puede ser negativo")

@dataclass(frozen=True)
class Stock:
    value: int
    def __post_init__(self):
        if self.value < 0:
            raise ValidationError("El stock no puede ser negativo")
