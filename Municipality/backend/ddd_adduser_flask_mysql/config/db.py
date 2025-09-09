import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

load_dotenv()

MYSQL_USER = os.getenv("MYSQL_USER", "root")
MYSQL_PASS = os.getenv("MYSQL_PASS", "secret")
MYSQL_HOST = os.getenv("MYSQL_HOST", "127.0.0.1")
MYSQL_DB   = os.getenv("MYSQL_DB", "AppMunicipality")

DATABASE_URL = "mysql+pymysql://%s:%s@%s/%s?charset=utf8mb4" % (
    MYSQL_USER, MYSQL_PASS, MYSQL_HOST, MYSQL_DB
)

engine = create_engine(DATABASE_URL, pool_pre_ping=True, future=True)
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False, future=True)
Base = declarative_base()
