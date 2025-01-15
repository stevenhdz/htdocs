import sqlite3
from domain.entities import User
from domain.repositories import UserRepository
from typing import List


class SQLiteUserRepository(UserRepository):
    def __init__(self, db_path="database.db"):
        self.db_path = db_path

    def save(self, user: User) -> None:
        connection = sqlite3.connect(self.db_path)
        cursor = connection.cursor()
        cursor.execute(
            "INSERT INTO users (id, name, email) VALUES (?, ?, ?)",
            (user.id, user.name, user.email)
        )
        connection.commit()
        connection.close()

    def get_all(self) -> List[User]:
        connection = sqlite3.connect(self.db_path)
        cursor = connection.cursor()
        cursor.execute("SELECT id, name, email FROM users")
        rows = cursor.fetchall()
        connection.close()
        return [User(id=row[0], name=row[1], email=row[2]) for row in rows]
