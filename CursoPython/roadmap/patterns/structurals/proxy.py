class RealImage:
    def __init__(self, filename):
        self.filename = filename
        self.load_image()

    def load_image(self):
        print(f"Cargando imagen: {self.filename}")

    def display(self):
        print(f"Mostrando imagen: {self.filename}")

class ProxyImage:
    def __init__(self, filename):
        self.filename = filename
        self.real_image = None

    def display(self):
        if not self.real_image:
            self.real_image = RealImage(self.filename)
        self.real_image.display()

# Uso
image = ProxyImage("foto.png")
image.display()  # Carga y muestra la imagen
image.display()  # Solo muestra la imagen, no vuelve a cargarla
