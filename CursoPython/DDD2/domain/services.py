from .repositories import UserRepository


class UserDomainService:
    def __init__(self, user_repository: UserRepository):
        self.user_repository = user_repository

    def is_email_unique(self, email: str) -> bool:
        users = self.user_repository.get_all()
        return not any(user.email == email for user in users)
