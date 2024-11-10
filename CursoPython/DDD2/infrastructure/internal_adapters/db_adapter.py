import sqlite3
from domain.ports.character_repository import CharacterRepository
from domain.models.character import Character


class SqliteCharacterRepository(CharacterRepository):
    def __init__(self, db_file):
        self.db_file = db_file
        self._initialize_database()

    def _initialize_database(self):
        conn = self._connect()
        cursor = conn.cursor()
        cursor.execute(
            """CREATE TABLE IF NOT EXISTS characters (
                id INTEGER PRIMARY KEY,
                name TEXT,
                species TEXT
            )"""
        )
        conn.commit()
        conn.close()

    def _connect(self):
        return sqlite3.connect(self.db_file)

    def save(self, character: Character):
        conn = self._connect()
        cursor = conn.cursor()
        cursor.execute("INSERT OR REPLACE INTO characters (id, name, species) VALUES (?, ?, ?)",
                       (character.id, character.name, character.species))
        conn.commit()
        conn.close()

    def find_all(self):
        conn = self._connect()
        cursor = conn.cursor()
        cursor.execute("SELECT id, name, species FROM characters")
        rows = cursor.fetchall()
        conn.close()
        return [Character(id=row[0], name=row[1], species=row[2]) for row in rows]

    def find_by_id(self, character_id):
        conn = self._connect()
        cursor = conn.cursor()
        cursor.execute(
            "SELECT id, name, species FROM characters WHERE id=?", (character_id,))
        row = cursor.fetchone()
        conn.close()
        return Character(id=row[0], name=row[1], species=row[2]) if row else None
