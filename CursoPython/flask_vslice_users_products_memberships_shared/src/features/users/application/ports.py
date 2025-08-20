from typing import Protocol, Optional
from features.users.domain.entities import User
from shared.ids import UserId

class UserRepositoryPort(Protocol):
    def get(self, user_id: UserId) -> Optional[User]: ...
    def save(self, user: User) -> None: ...
