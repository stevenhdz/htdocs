class CPU:
    def start(self):
        print("CPU iniciada")

class Memory:
    def load(self):
        print("Memoria cargada")

class HardDrive:
    def read(self):
        print("Disco duro leyendo datos")

class ComputerFacade:
    def __init__(self):
        self.cpu = CPU()
        self.memory = Memory()
        self.hard_drive = HardDrive()

    def start_computer(self):
        self.cpu.start()
        self.memory.load()
        self.hard_drive.read()

# Uso
computer = ComputerFacade()
computer.start_computer()
