from flask import Flask
from app.user.infrastructure.interfaces.http.routes import users_bp

def create_app():
    app = Flask(__name__)
    app.register_blueprint(users_bp)
    return app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
