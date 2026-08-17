from features.products.application.use_cases import CreateProductUseCase, GetProductUseCase, UpdateProductPriceUseCase
from features.products.domain.entities import Product
from shared.ids import ProductId

def product_to_dict(p: Product) -> dict:
    return {"id": p.id.value, "name": p.name, "price": p.price.value, "stock": p.stock.value}

class ProductController:
    def __init__(self, repo, create_uc: CreateProductUseCase, get_uc: GetProductUseCase, update_price_uc: UpdateProductPriceUseCase):
        self.repo = repo
        self.create_uc = create_uc
        self.get_uc = get_uc
        self.update_price_uc = update_price_uc

    def create(self, name: str, price: float, stock: int) -> dict:
        if not name or not isinstance(name, str):
            raise ValueError("name es requerido y debe ser string")
        pid = self.create_uc.execute(name, float(price), int(stock))
        p = self.repo.get(pid)
        return product_to_dict(p)

    def get(self, product_id: str) -> dict | None:
        p = self.repo.get(ProductId(product_id))
        return product_to_dict(p) if p else None

    def update_price(self, product_id: str, price: float) -> dict:
        self.update_price_uc.execute(product_id, float(price))
        p = self.repo.get(ProductId(product_id))
        return product_to_dict(p)
