import sqlite3

class DatabaseConnection:
    _instance = None  # Almacena la única instancia

    def __new__(cls, *args, **kwargs):
        if not cls._instance:  # Si no existe, se crea una nueva instancia
            cls._instance = super().__new__(cls, *args, **kwargs)
            cls._instance.connection = sqlite3.connect("example.db")
            print("Nueva conexión creada.")
        else:
            print("Usando conexión existente.")
        return cls._instance

    def get_connection(self):
        return self.connection

# Uso del Singleton para la base de datos
db1 = DatabaseConnection()  # Crea la conexión
conn1 = db1.get_connection()

db2 = DatabaseConnection()  # Usa la misma conexión
conn2 = db2.get_connection()

print(conn1 is conn2)