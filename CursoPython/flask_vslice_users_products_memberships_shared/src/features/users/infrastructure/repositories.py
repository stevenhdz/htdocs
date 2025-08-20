from typing import Dict, Optional
from features.users.application.ports import UserRepositoryPort
from features.users.domain.entities import User
from shared.ids import UserId

class InMemoryUserRepository(UserRepositoryPort):
    def __init__(self):
        self._db: Dict[str, User] = {}
    def get(self, user_id: UserId) -> Optional[User]:
        return self._db.get(user_id.value)
    def save(self, user: User) -> None:
        self._db[user.id.value] = user
