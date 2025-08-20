from features.products.application.ports import ProductRepositoryPort
from features.products.domain.entities import Product
from shared.ids import ProductId
from features.products.domain.value_objects import Price, Stock
from features.products.domain.errors import NotFound

class CreateProductUseCase:
    def __init__(self, repo: ProductRepositoryPort):
        self.repo = repo
    def execute(self, name: str, price: float, stock: int) -> ProductId:
        product = Product(ProductId.new(), name, Price(price), Stock(stock))
        self.repo.save(product)
        return product.id

class GetProductUseCase:
    def __init__(self, repo: ProductRepositoryPort):
        self.repo = repo
    def execute(self, product_id: str) -> Product:
        p = self.repo.get(ProductId(product_id))
        if not p:
            raise NotFound("Producto no encontrado")
        return p

class UpdateProductPriceUseCase:
    def __init__(self, repo: ProductRepositoryPort):
        self.repo = repo
    def execute(self, product_id: str, new_price: float):
        p = self.repo.get(ProductId(product_id))
        if not p:
            raise NotFound("Producto no encontrado")
        p.update_price(Price(new_price))
        self.repo.save(p)
