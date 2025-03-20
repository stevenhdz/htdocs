from infrastructure.database import db

class Municipio(db.Model):
    __tablename__ = 'municipios'
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nombre = db.Column(db.String(100), nullable=False)
    departamento = db.Column(db.String(100), nullable=False)
