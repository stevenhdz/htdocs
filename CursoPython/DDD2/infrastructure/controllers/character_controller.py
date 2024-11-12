from flask import Flask, jsonify
from application.use_cases.get_character import GetCharacter


class CharacterController:
    def __init__(self, use_case):
        self.use_case = use_case

    def get_characters(self):
        characters = self.use_case.execute()
        return jsonify([{"id": c.id, "name": c.name, "species": c.species} for c in characters]), 200

    def get_character_by_id(self, character_id):
        character = self.use_case.execute(character_id=character_id)
        if character:
            return jsonify({"id": character.id, "name": character.name, "species": character.species}), 200
        else:
            return jsonify({"error": "Character not found"}), 404
