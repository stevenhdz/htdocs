import sqlite3
from sqlite3 import Error
import os
from dotenv import load_dotenv


def create_connection():
    conn = None
    load_dotenv()
    try:
        key = os.getenv("DATABASE")
        conn = sqlite3.connect("database/"+key)
    except Error as e:
        print(e)
    return conn
