from dataclasses import dataclass
from uuid import uuid4


@dataclass
class User:
    id: str
    name: str
    email: str

    @staticmethod
    def create(name: str, email: str, domain_service: "UserDomainService") -> "User":
        if not domain_service.is_email_unique(email):
            raise EmailAlreadyInUseError("Email is already in use!")
        return User(id=str(uuid4()), name=name, email=email)


class DomainError(Exception):
    """Base class for domain errors."""


class EmailAlreadyInUseError(DomainError):
    """Raised when an email is already in use."""
