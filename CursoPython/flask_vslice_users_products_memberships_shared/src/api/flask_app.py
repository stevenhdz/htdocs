from flask import Flask, jsonify, request
# Users slice
from features.users.infrastructure.repositories import InMemoryUserRepository
from features.users.application.use_cases import CreateUserUseCase, GetUserUseCase
from features.users.infrastructure.controllers import UserController
from features.users.domain.errors import DomainError as UserDomainError, NotFound as UserNotFound, ValidationError as UserValidationError
# Products slice
from features.products.infrastructure.repositories import InMemoryProductRepository
from features.products.application.use_cases import CreateProductUseCase, GetProductUseCase, UpdateProductPriceUseCase
from features.products.infrastructure.controllers import ProductController
from features.products.domain.errors import DomainError as ProductDomainError, NotFound as ProductNotFound, ValidationError as ProductValidationError
# Memberships slice
from features.memberships.infrastructure.repositories import InMemoryMembershipRepository
from features.memberships.infrastructure.readers import UserReader, ProductReader
from features.memberships.application.use_cases import JoinProductUseCase, LeaveProductUseCase
from features.memberships.infrastructure.controllers import MembershipController

def create_app() -> Flask:
    app = Flask(__name__)

    # --- Users ---
    u_repo = InMemoryUserRepository()
    u_controller = UserController(
        u_repo,
        CreateUserUseCase(u_repo),
        GetUserUseCase(u_repo),
    )

    # --- Products ---
    p_repo = InMemoryProductRepository()
    p_controller = ProductController(
        p_repo,
        CreateProductUseCase(p_repo),
        GetProductUseCase(p_repo),
        UpdateProductPriceUseCase(p_repo),
    )

    # --- Memberships ---
    m_repo = InMemoryMembershipRepository()
    user_reader = UserReader(u_repo)
    product_reader = ProductReader(p_repo)
    join_uc = JoinProductUseCase(m_repo, user_reader, product_reader)
    leave_uc = LeaveProductUseCase(m_repo)
    m_controller = MembershipController(join_uc, leave_uc, m_repo)

    # Error handling
    @app.errorhandler(UserDomainError)
    @app.errorhandler(ProductDomainError)
    @app.errorhandler(ValueError)
    def handle_domain_error(err):
        return jsonify({"error": type(err).__name__, "message": str(err)}), 400

    @app.errorhandler(404)
    def handle_404(_):
        return jsonify({"error": "NotFound", "message": "Recurso no encontrado"}), 404

    @app.get("/health")
    def health():
        return jsonify({"status": "ok"})

    # Users endpoints
    @app.post("/users")
    def create_user():
        payload = request.get_json(silent=True) or {}
        result = u_controller.create(payload.get("name"), payload.get("email"))
        return jsonify(result), 201

    @app.get("/users/<user_id>")
    def get_user(user_id: str):
        result = u_controller.get(user_id)
        if not result:
            return jsonify({"error": "NotFound", "message": "Usuario no encontrado"}), 404
        return jsonify(result)

    # Products endpoints
    @app.post("/products")
    def create_product():
        payload = request.get_json(silent=True) or {}
        result = p_controller.create(payload.get("name"), payload.get("price"), payload.get("stock"))
        return jsonify(result), 201

    @app.get("/products/<product_id>")
    def get_product(product_id: str):
        result = p_controller.get(product_id)
        if not result:
            return jsonify({"error": "NotFound", "message": "Producto no encontrado"}), 404
        return jsonify(result)

    @app.post("/products/<product_id>/price")
    def update_price(product_id: str):
        payload = request.get_json(silent=True) or {}
        price = payload.get("price")
        if price is None:
            return jsonify({"error": "ValidationError", "message": "price es requerido"}), 400
        result = p_controller.update_price(product_id, price)
        return jsonify(result)

    # Membership endpoints
    @app.post("/memberships/join")
    def join_membership():
        payload = request.get_json(silent=True) or {}
        return jsonify(m_controller.join(payload.get("user_id"), payload.get("product_id"))), 200

    @app.post("/memberships/leave")
    def leave_membership():
        payload = request.get_json(silent=True) or {}
        return jsonify(m_controller.leave(payload.get("user_id"), payload.get("product_id"))), 200

    @app.get("/memberships/user/<user_id>")
    def list_memberships(user_id: str):
        return jsonify(m_controller.list_by_user(user_id)), 200

    return app
