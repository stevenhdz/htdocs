from dataclasses import dataclass
from shared.ids import ProductId
from .value_objects import Price, Stock
from .errors import ValidationError

@dataclass
class Product:
    id: ProductId
    name: str
    price: Price
    stock: Stock

    def update_price(self, new_price: Price):
        if new_price.value <= 0:
            raise ValidationError("El precio debe ser mayor a 0")
        self.price = new_price
