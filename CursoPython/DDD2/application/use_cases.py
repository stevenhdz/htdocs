from typing import List
from domain.entities import User, EmailAlreadyInUseError
from domain.services import UserDomainService
from domain.repositories import UserRepository
from .dto import UserDTO


class RegisterUserUseCase:
    def __init__(self, user_repository: UserRepository, domain_service: UserDomainService):
        self.user_repository = user_repository
        self.domain_service = domain_service

    def execute(self, name: str, email: str) -> UserDTO:
        user = User.create(name, email, self.domain_service)
        self.user_repository.save(user)
        return UserDTO(id=user.id, name=user.name, email=user.email)


class ListUsersUseCase:
    def __init__(self, user_repository: UserRepository):
        self.user_repository = user_repository

    def execute(self) -> List[UserDTO]:
        users = self.user_repository.get_all()
        return [UserDTO(id=user.id, name=user.name, email=user.email) for user in users]
