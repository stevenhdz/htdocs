from features.users.application.use_cases import CreateUserUseCase, GetUserUseCase
from features.users.domain.entities import User
from shared.ids import UserId

def user_to_dict(u: User) -> dict:
    return {"id": u.id.value, "name": u.name, "email": u.email.value}

class UserController:
    def __init__(self, repo, create_uc: CreateUserUseCase, get_uc: GetUserUseCase):
        self.repo = repo
        self.create_uc = create_uc
        self.get_uc = get_uc

    def create(self, name: str, email: str) -> dict:
        if not name or not isinstance(name, str):
            raise ValueError("name es requerido y debe ser string")
        uid = self.create_uc.execute(name, email)
        u = self.repo.get(uid)
        return user_to_dict(u)

    def get(self, user_id: str) -> dict | None:
        u = self.repo.get(UserId(user_id))
        return user_to_dict(u) if u else None
