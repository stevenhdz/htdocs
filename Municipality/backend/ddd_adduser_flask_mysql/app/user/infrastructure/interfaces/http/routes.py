from flask import Blueprint, request, jsonify
from app.user.infrastructure.controllers.user_controller import UserController

users_bp = Blueprint("users_bp", __name__)
_controller = UserController()

@users_bp.post("/users")
def create_user():
    payload = request.get_json(silent=True) or {}
    try:
        add_user = _controller.add_user_uc()
        new_id, event = add_user.execute(payload)
        return jsonify({
            "id": new_id,
            "event": {"type": "UserRegistered", "user_id": event.user_id, "email": event.email}
        }), 201
    except ValueError as ve:
        return jsonify({"error": str(ve)}), 400
    except Exception as ex:
        return jsonify({"error": "Unexpected error", "detail": str(ex)}), 500
