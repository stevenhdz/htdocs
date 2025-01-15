from abc import ABC, abstractmethod
from typing import List
from .entities import User


class UserRepository(ABC):
    @abstractmethod
    def save(self, user: User) -> None:
        raise NotImplementedError("Method 'save' must be implemented.")

    @abstractmethod
    def get_all(self) -> List[User]:
        raise NotImplementedError("Method 'get_all' must be implemented.")
