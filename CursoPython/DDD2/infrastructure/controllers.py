from flask import Flask, request, jsonify
from application.use_cases import RegisterUserUseCase, ListUsersUseCase
from domain.entities import EmailAlreadyInUseError


class UserController:
    def __init__(self, register_user_use_case: RegisterUserUseCase, list_users_use_case: ListUsersUseCase):
        self.register_user_use_case = register_user_use_case
        self.list_users_use_case = list_users_use_case
        self.app = Flask(__name__)
        self.setup_routes()

    def setup_routes(self):
        @self.app.route('/users', methods=['POST'])
        def register_user():
            data = request.json
            try:
                user_dto = self.register_user_use_case.execute(
                    data['name'], data['email'])
                return jsonify({"message": f"User {user_dto.name} registered successfully!", "user": user_dto.__dict__}), 201
            except EmailAlreadyInUseError as e:
                return jsonify({"error": str(e)}), 400

        @self.app.route('/users', methods=['GET'])
        def list_users():
            users = self.list_users_use_case.execute()
            return jsonify([user.__dict__ for user in users])

    def run(self):
        self.app.run(debug=True)
