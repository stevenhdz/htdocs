class Device:
    def turn_on(self):
        pass

    def turn_off(self):
        pass

class TV(Device):
    def turn_on(self):
        print("Encendiendo TV")

    def turn_off(self):
        print("Apagando TV")

class RemoteControl:
    def __init__(self, device):
        self.device = device

    def toggle_power(self):
        print("Usando el control remoto...")
        self.device.turn_on()
        self.device.turn_off()

# Uso
tv = TV()
remote = RemoteControl(tv)
remote.toggle_power()
