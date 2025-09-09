from app.user.domain.entities.user import User

class UserDomainService:
    def __init__(self, user_repository):
        self.user_repository = user_repository

    def create_user(self, user_data):
        required = ["name", "email", "password", "role_id"]
        missing = [k for k in required if not user_data.get(k)]
        if missing:
            raise ValueError("Faltan campos requeridos: " + ", ".join(missing))

        existing = self.user_repository.get_by_email(user_data["email"])
        if existing:
            raise ValueError("El email ya está registrado")

        user = User(
            name=(user_data.get("name") or "").strip(),
            email=(user_data.get("email") or "").strip().lower(),
            password=user_data.get("password"),
            role_id=int(user_data.get("role_id")),
            home_muni_id=user_data.get("home_muni_id"),
            config_profile=user_data.get("config_profile") or {},
        )

        new_id = self.user_repository.create_user(user)
        # Lazy import para evitar acoplar demasiado
        UserRegistered = __import__("app.user.domain.events.user_registered", fromlist=["UserRegistered"]).UserRegistered
        event = UserRegistered(new_id, user.email)
        return new_id, event
