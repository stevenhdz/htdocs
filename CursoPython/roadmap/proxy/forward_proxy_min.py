from http.server import HTTPServer, BaseHTTPRequestHandler
import urllib.request

class P(BaseHTTPRequestHandler):
    def do_GET(self):
        try:
            with urllib.request.urlopen(self.path) as r:
                data = r.read()
                self.send_response(200)
                self.end_headers()
                self.wfile.write(data)
        except Exception as e:
            self.send_error(502, str(e))

HTTPServer(("127.0.0.1", 8080), P).serve_forever()