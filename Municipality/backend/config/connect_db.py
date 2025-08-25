import sqlalchemy

class DatabaseConnection:
    def __init__(self):
        self.engine = sqlalchemy.create_engine("mysql+pymysql://user:password@localhost/db_name")

    def get_connection(self):
        return self.engine.connect()