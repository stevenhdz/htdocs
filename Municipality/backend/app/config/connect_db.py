import sqlalchemy
from .config_general import Config
from sqlalchemy.orm import sessionmaker, declarative_base

DATABASE_URL = (
	f"mysql+pymysql://{Config().database()['USER']}:"
  f"{Config().database()['PASSWORD']}@"
  f"{Config().database()['HOST']}:{Config().database()['PORT']}/"
  f"{Config().database()['NAME']}?charset=utf8mb4"
)

engine = sqlalchemy.create_engine(DATABASE_URL, pool_pre_ping=True, future=True)
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False, future=True)
Base = declarative_base()
