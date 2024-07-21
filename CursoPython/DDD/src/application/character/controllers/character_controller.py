from flask import Flask, jsonify, request
from ....application.character.services.character_service import CharacterService
from ....infrastructure.external_api.rick_and_morty_api import RickAndMortyAPI

app = Flask(__name__)

character_service = CharacterService(repository=RickAndMortyAPI())


@app.route('/characters/<int:character_id>', methods=['GET'])
def get_character(character_id):
    try:
        character_dto = character_service.get_character_by_id(character_id)
        return jsonify(character_dto.to_dict())
    except Exception as e:
        return jsonify({"error": str(e)}), 404


@app.route('/characters', methods=['GET'])
def get_characters():
    try:
        character_dtos = character_service.get_all_characters()
        return jsonify([character_dto.to_dict() for character_dto in character_dtos])
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
