# CursoPython/DDD2/domain/ports/logger.py
from abc import ABC, abstractmethod


class Logger(ABC):
    @abstractmethod
    def log(self, message: str, level: str = "INFO"):
        pass

    def info(self, message: str):
        self.log(message, level="INFO")

    def error(self, message: str):
        self.log(message, level="ERROR")
