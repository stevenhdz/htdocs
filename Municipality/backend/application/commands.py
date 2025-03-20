from domain.models import Municipio
from infrastructure.repository import MunicipioRepository

class CrearMunicipioCommand:
    def __init__(self, repo: MunicipioRepository):
        self.repo = repo

    def ejecutar(self, nombre: str, departamento: str):
        municipio = Municipio(nombre=nombre, departamento=departamento)
        return self.repo.agregar(municipio)
