from flask import Flask, request, jsonify
from infrastructure.database import DBConfig
from infrastructure.repository import MunicipioRepository
from application.commands import CrearMunicipioCommand
from application.queries import ObtenerMunicipioQuery, ObtenerTodosMunicipiosQuery

app = Flask(__name__)

# Configurar la base de datos (reemplaza con tus credenciales)
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://usuario:contraseña@localhost/nombre_bd"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

DBConfig.db.init_app(app)

@app.route("/municipios", methods=["POST"])
def crear_municipio():
    data = request.json
    repo = MunicipioRepository()
    command = CrearMunicipioCommand(repo)
    municipio = command.ejecutar(data["nombre"], data["departamento"])
    return jsonify({"id": municipio.id, "nombre": municipio.nombre, "departamento": municipio.departamento})

@app.route("/municipios/<int:municipio_id>", methods=["GET"])
def obtener_municipio(municipio_id):
    repo = MunicipioRepository()
    query = ObtenerMunicipioQuery(repo)
    municipio = query.ejecutar(municipio_id)
    if municipio:
        return jsonify({"id": municipio.id, "nombre": municipio.nombre, "departamento": municipio.departamento})
    return jsonify({"error": "Municipio no encontrado"}), 404

@app.route("/municipios", methods=["GET"])
def listar_municipios():
    repo = MunicipioRepository()
    query = ObtenerTodosMunicipiosQuery(repo)
    municipios = query.ejecutar()
    return jsonify([{"id": m.id, "nombre": m.nombre, "departamento": m.departamento} for m in municipios])

if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # Crear tablas si no existen
    app.run(debug=True)
