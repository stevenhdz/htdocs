from shared.ids import UserId, ProductId
from features.memberships.application.ports import UserReaderPort, ProductReaderPort
from features.users.infrastructure.repositories import InMemoryUserRepository
from features.products.infrastructure.repositories import InMemoryProductRepository

class UserReader(UserReaderPort):
    def __init__(self, user_repo: InMemoryUserRepository):
        self.user_repo = user_repo
    def exists(self, user_id: UserId) -> bool:
        return self.user_repo.get(user_id) is not None

class ProductReader(ProductReaderPort):
    def __init__(self, product_repo: InMemoryProductRepository):
        self.product_repo = product_repo
    def exists(self, product_id: ProductId) -> bool:
        return self.product_repo.get(product_id) is not None
