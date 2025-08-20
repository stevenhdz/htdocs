from features.users.application.ports import UserRepositoryPort
from features.users.domain.entities import User
from shared.ids import UserId
from features.users.domain.value_objects import Email
from features.users.domain.errors import NotFound

class CreateUserUseCase:
    def __init__(self, repo: UserRepositoryPort):
        self.repo = repo
    def execute(self, name: str, email: str) -> UserId:
        user = User(UserId.new(), name, Email(email))
        self.repo.save(user)
        return user.id

class GetUserUseCase:
    def __init__(self, repo: UserRepositoryPort):
        self.repo = repo
    def execute(self, user_id: str) -> User:
        u = self.repo.get(UserId(user_id))
        if not u:
            raise NotFound("Usuario no encontrado")
        return u
