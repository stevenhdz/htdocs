from app.user.infrastructure.controllers import user_controller
from flask import Blueprint, request, jsonify

users_bp = Blueprint("users_bp", __name__)
_controller = user_controller.UserController()

@users_bp.post("/users")
def index():
    payload = request.get_json(silent=True) or {}
    add_user = _controller.add_user_uc()
    new_id, event = add_user.execute(payload)
    return jsonify({
        "id": new_id,
        "event": {"type": "UserRegistered", "user_id": event.user_id, "email": event.email}
    }), 201