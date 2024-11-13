# CursoPython/DDD2/infrastructure/adapters/internal/logger_adapter.py
from domain.ports.logger import Logger


class SimpleLogger(Logger):
    def log(self, message: str, level: str = "INFO"):
        print(f"[{level}] {message}")
