from flask import Flask, jsonify, request
from application.character.use_cases.get_character_by_id_use_case import GetCharacterByIdUseCase
from application.character.use_cases.get_all_characters_use_case import GetAllCharactersUseCase
from infrastructure.external_apis.rick_and_morty_api import RickAndMortyAPI

app = Flask(__name__)

repository = RickAndMortyAPI()
get_character_by_id_use_case = GetCharacterByIdUseCase(repository)
get_all_characters_use_case = GetAllCharactersUseCase(repository)


@app.route('/characters/<int:character_id>', methods=['GET'])
def get_character(character_id):
    try:
        character_dto = get_character_by_id_use_case.execute(character_id)
        return jsonify(character_dto.to_dict())
    except Exception as e:
        return jsonify({"error": str(e)}), 404


@app.route('/characters', methods=['GET'])
def get_characters():
    try:
        character_dtos = get_all_characters_use_case.execute()
        return jsonify([character_dto.to_dict() for character_dto in character_dtos])
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
