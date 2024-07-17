from flask import Flask, jsonify, request
from src.application.character.services.character_service import CharacterService
from src.infrastructure.external_api.rick_and_morty_api import RickAndMortyAPI

app = Flask(__name__)
character_service = CharacterService(RickAndMortyAPI())


@app.route("/character/<int:character_id>", methods=["GET"])
def get_character(character_id):
    character = character_service.get_character(character_id)
    return jsonify(character.to_dict())


@app.route("/hola", methods=["POST"])
def say_hello():
    data = request.json
    if data.get("message") == "hola":
        return jsonify({"response": "¿Cómo estás?"})
    else:
        return jsonify({"response": "Mensaje no reconocido"}), 400


if __name__ == "__main__":
    app.run(debug=True)
