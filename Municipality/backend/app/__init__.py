from flask import Config, Flask

def create_app(config_class: type[Config] = Config) -> Flask:
    app = Flask(__name__, static_folder="static")
    app.config.from_object(config_class)

    from .interfaces.user import bp as user_bp

    app.register_blueprint(user_bp, url_prefix="/user")

    @app.errorhandler(404)
    def not_found(e):
        return {"error": "not found"}, 404

    return app