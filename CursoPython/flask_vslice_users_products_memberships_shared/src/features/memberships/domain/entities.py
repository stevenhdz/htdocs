from dataclasses import dataclass
from datetime import datetime
from shared.ids import UserId, ProductId

@dataclass
class Membership:
    user_id: UserId
    product_id: ProductId
    joined_at: datetime

    @staticmethod
    def create(user_id: UserId, product_id: ProductId) -> "Membership":
        return Membership(user_id, product_id, datetime.utcnow())
