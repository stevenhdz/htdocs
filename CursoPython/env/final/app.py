from flask import Flask
from flask_cors import CORS

from database import setup
from resources.router import endpoints

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
setup.create_tables()


@app.before_first_request
def create_tables():
    setup.create_tables()


app.register_blueprint(endpoints)


if __name__ == '__main__':
    app.run(debug=True)
