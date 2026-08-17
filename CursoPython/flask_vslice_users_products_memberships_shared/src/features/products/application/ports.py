from typing import Protocol, Optional
from features.products.domain.entities import Product
from shared.ids import ProductId

class ProductRepositoryPort(Protocol):
    def get(self, product_id: ProductId) -> Optional[Product]: ...
    def save(self, product: Product) -> None: ...
