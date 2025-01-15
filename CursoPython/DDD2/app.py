from infrastructure.controllers import UserController
from domain.services import UserDomainService
from application.use_cases import RegisterUserUseCase, ListUsersUseCase
from infrastructure.database import init_db
from infrastructure.sqlite_repo import SQLiteUserRepository


if __name__ == "__main__":
    # Initialize database
    init_db()

    # Instantiate dependencies
    user_repository = SQLiteUserRepository()
    domain_service = UserDomainService(user_repository)

    # Use cases
    register_user_use_case = RegisterUserUseCase(
        user_repository, domain_service)
    list_users_use_case = ListUsersUseCase(user_repository)

    # Start the application
    controller = UserController(register_user_use_case, list_users_use_case)
    controller.run()
