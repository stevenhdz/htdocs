from app.config.connect_db import SessionLocal
from app.user.domain.entities.user import UserModel

class UserRepositorySQLAlchemy:
    def __init__(self, session_factory=SessionLocal):
        self._session_factory = session_factory

    def create_user(self, user):
        with self._session_factory() as session:
            orm = UserModel(
                name=user.name,
                email=user.email,
                password=user.password,
                role_id=user.role_id,
                home_muni_id=user.home_muni_id,
                config_profile=user.config_profile or {},
            )
            session.add(orm)
            session.flush()
            new_id = orm.id
            session.commit()
            return new_id