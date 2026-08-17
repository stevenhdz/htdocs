from abc import ABC, abstractmethod

# Productos abstractos
class Button(ABC):
    @abstractmethod
    def render(self):
        pass

class Checkbox(ABC):
    @abstractmethod
    def render(self):
        pass

# Productos concretos para Windows
class WindowsButton(Button):
    def render(self):
        print("Renderizando botón estilo Windows.")

class WindowsCheckbox(Checkbox):
    def render(self):
        print("Renderizando checkbox estilo Windows.")

# Productos concretos para macOS
class MacOSButton(Button):
    def render(self):
        print("Renderizando botón estilo macOS.")

class MacOSCheckbox(Checkbox):
    def render(self):
        print("Renderizando checkbox estilo macOS.")

# Fábrica abstracta
class GUIFactory(ABC):
    @abstractmethod
    def create_button(self):
        pass

    @abstractmethod
    def create_checkbox(self):
        pass

# Fábricas concretas
class WindowsFactory(GUIFactory):
    def create_button(self):
        return WindowsButton()

    def create_checkbox(self):
        return WindowsCheckbox()

class MacOSFactory(GUIFactory):
    def create_button(self):
        return MacOSButton()

    def create_checkbox(self):
        return MacOSCheckbox()

# Cliente
class Application:
    def __init__(self, factory: GUIFactory):
        self.factory = factory

    def render_ui(self):
        button = self.factory.create_button()
        checkbox = self.factory.create_checkbox()
        button.render()
        checkbox.render()

# Uso
def get_factory(os_type):
    if os_type == "Windows":
        return WindowsFactory()
    elif os_type == "macOS":
        return MacOSFactory()
    else:
        raise ValueError("Sistema operativo no soportado.")

# Ejemplo de ejecución
os_type = "macOS"  # Cambiar a "macOS" para probar macOS
factory = get_factory(os_type)
app = Application(factory)
app.render_ui()
