import sqlite3
from sqlite3 import Error

from .connection import create_connection


def create_tables():
    conn = create_connection()

    sql = """CREATE TABLE IF NOT EXISTS tasks(
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  created_date TEXT NOT NULL,
  completed INTEGER NOT NULL DEFAULT 0
)
    """

    try:
        cur = conn.cursor()
        cur.execute(sql)
        conn.commit()
        return True
    except Error as e:
        print(f"Error at create_tables() : {str(e)}")
        return False
    finally:
        if conn:
            cur.close()
            conn.close()
