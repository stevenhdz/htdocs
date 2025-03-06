from sqlalchemy import create_engine, Column, Integer, String, Boolean, Text, TIMESTAMP, func
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from uuid import uuid4
from datetime import datetime

# 🎯 Configurar la base de datos
DATABASE_URL = "mysql+pymysql://root:root@172.17.0.2:3306/test"

# 🔹 Crear motor de conexión
engine = create_engine(DATABASE_URL, echo=True)

# 🔹 Base para modelos
Base = declarative_base()

# 🔹 Crear sesión
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 📌 Definir la tabla User
class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String(50), unique=True, nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password_hash = Column(Text, nullable=False)
    full_name = Column(String(100))
    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(TIMESTAMP, server_default=func.now(), onupdate=func.now())
    is_active = Column(Boolean, default=True)

# 🔹 Crear la tabla si no existe
Base.metadata.create_all(engine)

# 📌 Clase para manejar la base de datos
class Database:
    def __init__(self):
        self.engine = engine
        self.session = SessionLocal()

    def connect(self):
        try:
            self.engine.connect()
            print("✅ Conectado a MySQL en Docker")
        except Exception as e:
            print(f"❌ Error al conectar: {e}")

    def insert_users_if_not_exist(self):
        """ Inserta solo los usuarios que no existen en la base de datos. """
        count = 1
        users_data = [
            {"username": "jdoe", "email": "jdoe@example.com", "password_hash": "$2b$12$eImiTXuWVxfM37uY4JANjQ==", "full_name": "John Doe"},
            {"username": "asmith", "email": "asmith@example.com", "password_hash": "$2b$12$uJhdfgsdjgfjhsdfjhskdfh==", "full_name": "Alice Smith"},
            {"username": "mjones", "email": "mjones@example.com", "password_hash": "$2b$12$U8VbL9Kj4xzxjvcCmDhd==", "full_name": "Michael Jones", "is_active": False},
            {"username": "lgarcia", "email": "lgarcia@example.com", "password_hash": "$2b$12$Ksdf98a8sd7f9asd==", "full_name": "Laura García"},
            {"username": "dlopez", "email": "dlopez@example.com", "password_hash": "$2b$12$9sdf87a98sdf76asd==", "full_name": "David López"},
            {"username": "srodriguez", "email": "srodriguez@example.com", "password_hash": "$2b$12$sdf8987as9d8f7a98sdf==", "full_name": "Sofía Rodríguez", "is_active": False},
            {"username": "bwilson", "email": "bwilson@example.com", "password_hash": "$2b$12$nsdf89a7sdf9a87sdf==", "full_name": "Brian Wilson"},
            {"username": "charris", "email": "charris@example.com", "password_hash": "$2b$12$sdf98a7sdf8a9sd7f==", "full_name": "Carla Harris", "is_active": False},
            {"username": "dpatel", "email": "dpatel@example.com", "password_hash": "$2b$12$sdf87a9sdf87asd9f7==", "full_name": "Deepak Patel"},
        ]

        # 🔹 Simular 2000 usuarios
        users_data *= 500  
        #insert admin
        users_data.append(
            {"username": f"admin{datetime.now().strftime('%Y%m%d%H%M%S')}", "email": f"d4PjP{datetime.now().strftime('%Y%m%d%H%M%S')}@example.com", "password_hash": "$2b$12$9sdf87a98sdf76asd==", "full_name": "Administrador"},
        )       
        try:
            # 🔹 Obtener todos los usernames y emails en la base de datos
            print(f"⚠️ {len(users_data)} usuarios a validar")
            existing_users = self.session.query(User.username, User.email).all()
            existing_usernames = {user.username for user in existing_users}

            new_users = [
                User(**user)
                for user in users_data
                if user["username"] not in existing_usernames
            ]

            print(f"⚠️ {len(new_users)} usuarios nuevos")
            
            if new_users:
                self.session.bulk_save_objects(new_users)
                self.session.commit()
                print(f"✅ {len(new_users)} usuarios insertados correctamente")
            else:
                print("✅ No hay usuarios nuevos para insertar")

        except Exception as e:
            self.session.rollback()
            print(f"❌ Error al insertar usuarios: {e}")
        finally:
            self.session.close()

    def get_users(self):
        """ Recupera todos los usuarios de la base de datos. """
        try:
            users = self.session.query(User).all()
            for user in users:
                print(f"👤 {user.id} | {user.username} | {user.email} | Activo: {user.is_active}")
        except Exception as e:
            print(f"❌ Error al recuperar usuarios: {e}")

    def disconnect(self):
        """ Cierra la conexión de la base de datos. """
        self.session.close()
        print("🔌 Conexión cerrada")


# 🚀 Ejecutar código
if __name__ == "__main__":
    db = Database()
    db.connect()
    db.insert_users_if_not_exist()
    db.get_users()
    db.disconnect()
