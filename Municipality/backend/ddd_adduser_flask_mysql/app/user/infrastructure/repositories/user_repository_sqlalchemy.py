from sqlalchemy import Column, Integer, String, ForeignKey, TIMESTAMP
from sqlalchemy.dialects.mysql import JSON as MySQLJSON

from config.db import Base, SessionLocal
from app.user.domain.entities.user import User

# ORM SOLO en infraestructura
class RoleORM(Base):
    __tablename__ = "roles"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(50), unique=True, nullable=False)

class MunicipalityORM(Base):
    __tablename__ = "municipalities"
    id = Column(Integer, primary_key=True, autoincrement=True)

class UserORM(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, index=True, nullable=False)
    password = Column(String(255), nullable=False)
    role_id = Column(Integer, ForeignKey("roles.id"), nullable=False)
    home_muni_id = Column(Integer, ForeignKey("municipalities.id"), nullable=True)
    config_profile = Column(MySQLJSON, nullable=False)
    created_at = Column(TIMESTAMP, nullable=False)
    updated_at = Column(TIMESTAMP, nullable=False)
    deleted_at = Column(TIMESTAMP, nullable=True)

class UserRepositorySQLAlchemy:
    def __init__(self, session_factory=SessionLocal):
        self._session_factory = session_factory

    def create_user(self, user):
        with self._session_factory() as session:
            orm = UserORM(
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

    def get_by_email(self, email):
        with self._session_factory() as session:
            row = session.query(UserORM).filter(UserORM.email == email).one_or_none()
            if not row:
                return None
            return User(
                id=row.id,
                name=row.name,
                email=row.email,
                password=row.password,
                role_id=row.role_id,
                home_muni_id=row.home_muni_id,
                config_profile=row.config_profile or {},
            )
