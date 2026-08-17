import sys
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
SRC = BASE_DIR / "src"
sys.path.append(str(SRC))

from api.flask_app import create_app

app = create_app()

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8000, debug=True)
