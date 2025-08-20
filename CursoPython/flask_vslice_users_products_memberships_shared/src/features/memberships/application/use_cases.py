from shared.ids import UserId, ProductId
from features.memberships.domain.entities import Membership
from features.memberships.application.ports import MembershipRepositoryPort, UserReaderPort, ProductReaderPort

class JoinProductUseCase:
    def __init__(self, repo: MembershipRepositoryPort, user_reader: UserReaderPort, product_reader: ProductReaderPort):
        self.repo = repo
        self.user_reader = user_reader
        self.product_reader = product_reader

    def execute(self, user_id: str, product_id: str):
        u = UserId(user_id)
        p = ProductId(product_id)
        if not self.user_reader.exists(u):
            raise ValueError("User no existe")
        if not self.product_reader.exists(p):
            raise ValueError("Product no existe")
        if self.repo.get(u, p):
            return  # idempotente
        self.repo.add(Membership.create(u, p))

class LeaveProductUseCase:
    def __init__(self, repo: MembershipRepositoryPort):
        self.repo = repo
    def execute(self, user_id: str, product_id: str):
        self.repo.remove(UserId(user_id), ProductId(product_id))
