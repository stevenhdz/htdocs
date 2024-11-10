import sqlite3
from domain.models.character import Character


class SqliteCharacterRepository:
    def __init__(self, db_path=":memory:"):
        self.connection = sqlite3.connect(db_path)
        self.connection.execute("""
            CREATE TABLE IF NOT EXISTS characters (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                species TEXT NOT NULL
            )
        """)

    def save(self, character):
        cursor = self.connection.cursor()
        cursor.execute(
            "INSERT OR REPLACE INTO characters (id, name, species) VALUES (?, ?, ?)",
            (character.id, character.name, character.species),
        )
        self.connection.commit()

    def find_by_id(self, character_id):
        cursor = self.connection.cursor()
        cursor.execute(
            "SELECT id, name, species FROM characters WHERE id = ?", (character_id,))
        row = cursor.fetchone()
        if row:
            return Character(id=row[0], name=row[1], species=row[2])
        return None

    def find_all(self):
        cursor = self.connection.cursor()
        cursor.execute("SELECT id, name, species FROM characters")
        rows = cursor.fetchall()
        return [Character(id=row[0], name=row[1], species=row[2]) for row in rows]
