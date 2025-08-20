from typing import Dict, Optional
from features.products.application.ports import ProductRepositoryPort
from features.products.domain.entities import Product
from shared.ids import ProductId

class InMemoryProductRepository(ProductRepositoryPort):
    def __init__(self):
        self._db: Dict[str, Product] = {}
    def get(self, product_id: ProductId) -> Optional[Product]:
        return self._db.get(product_id.value)
    def save(self, product: Product) -> None:
        self._db[product.id.value] = product
