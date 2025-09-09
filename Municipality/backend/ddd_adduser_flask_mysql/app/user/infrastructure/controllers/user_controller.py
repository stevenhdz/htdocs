from app.user.domain.services.user_domain_service import UserDomainService
from app.user.application.use_cases.add_user import AddUser
from app.user.infrastructure.repositories.user_repository_sqlalchemy import UserRepositorySQLAlchemy

class UserController:
    def __init__(self):
        repo = UserRepositorySQLAlchemy()
        domain = UserDomainService(repo)
        self._add_user = AddUser(domain)

    def add_user_uc(self):
        return self._add_user
