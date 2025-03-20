from domain.models import Municipio
from infrastructure.database import db

class MunicipioRepository:
    def agregar(self, municipio: Municipio):
        db.session.add(municipio)
        db.session.commit()
        return municipio

    def obtener_por_id(self, municipio_id: int):
        return Municipio.query.get(municipio_id)

    def obtener_todos(self):
        return Municipio.query.all()
