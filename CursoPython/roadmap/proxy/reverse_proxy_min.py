from flask import Flask, request, Response
import requests, os

UPSTREAM = os.getenv("UPSTREAM", "http://127.0.0.1:5001")
app = Flask(__name__)

@app.route("/<path:p>", methods=["GET","POST"])
@app.route("/", methods=["GET","POST"])
def rp(p=""):
    url = f"{UPSTREAM}/{p}"
    r = requests.request(
        request.method, 
        url, 
        params=request.args, 
        data=request.get_data(), 
        headers={k:v for k,v in request.headers.items() if k.lower()!='host'}
    )
    return Response(r.content, status=r.status_code, headers=dict(r.headers))

if __name__ == "__main__":
    print("Reverse proxy -> upstream:", UPSTREAM)
    app.run("127.0.0.1", 8081)