import sqlite3


def init_db():
    connection = sqlite3.connect("database.db")
    cursor = connection.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE
        )
    """)
    connection.commit()
    connection.close()
