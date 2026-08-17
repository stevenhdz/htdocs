from dataclasses import dataclass
import uuid

@dataclass(frozen=True)
class UserId:
    value: str
    @staticmethod
    def new() -> "UserId":
        return UserId(str(uuid.uuid4()))

@dataclass(frozen=True)
class ProductId:
    value: str
    @staticmethod
    def new() -> "ProductId":
        return ProductId(str(uuid.uuid4()))
