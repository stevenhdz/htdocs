from dataclasses import dataclass

@dataclass
class CreateProductDTO:
    name: str
    price: float
    stock: int
