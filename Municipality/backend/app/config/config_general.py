import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    def database(self):
        NAME = os.environ.get("DBNAME")
        USER = os.environ.get("DBUSER")
        PASSWORD = os.environ.get("DBPASSWORD")
        HOST = os.environ.get("DBHOST")
        PORT = os.environ.get("DBPORT")
        return {
            "NAME": NAME,
            "USER": USER,
            "PASSWORD": PASSWORD,
            "HOST": HOST,
            "PORT": PORT
        }
