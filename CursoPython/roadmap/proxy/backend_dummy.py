from flask import Flask, jsonify, request
app = Flask(__name__)

@app.route("/", defaults={"p": ""}, methods=["GET","POST"])
@app.route("/<path:p>", methods=["GET","POST"])
def echo(p):
    return jsonify(path=p, args=request.args, body=request.get_data(as_text=True), headers=dict(request.headers))

if __name__ == "__main__":
    app.run("127.0.0.1", 5001)