from infrastructure.repository import MunicipioRepository

class ObtenerMunicipioQuery:
    def __init__(self, repo: MunicipioRepository):
        self.repo = repo

    def ejecutar(self, municipio_id: int):
        return self.repo.obtener_por_id(municipio_id)

class ObtenerTodosMunicipiosQuery:
    def __init__(self, repo: MunicipioRepository):
        self.repo = repo

    def ejecutar(self):
        return self.repo.obtener_todos()
