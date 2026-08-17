# Producto final
class Computer:
    def __init__(self):
        self.cpu = None
        self.ram = None
        self.storage = None
        self.gpu = None

    def __str__(self):
        return (f"Computer Specifications:\n"
                f"CPU: {self.cpu}\n"
                f"RAM: {self.ram}\n"
                f"Storage: {self.storage}\n"
                f"GPU: {self.gpu}")

# Builder: Interfaz para construir partes del producto
class ComputerBuilder:
    def __init__(self):
        self.reset()

    def reset(self):
        self._computer = Computer()

    def set_cpu(self, cpu):
        self._computer.cpu = cpu

    def set_ram(self, ram):
        self._computer.ram = ram

    def set_storage(self, storage):
        self._computer.storage = storage

    def set_gpu(self, gpu):
        self._computer.gpu = gpu

    def get_result(self):
        return self._computer

# Director: Gestiona la construcción paso a paso
class Director:
    def __init__(self, builder):
        self.builder = builder

    def build_gaming_pc(self):
        self.builder.reset()
        self.builder.set_cpu("Intel Core i9")
        self.builder.set_ram("32GB")
        self.builder.set_storage("1TB SSD")
        self.builder.set_gpu("NVIDIA RTX 4090")

    def build_office_pc(self):
        self.builder.reset()
        self.builder.set_cpu("Intel Core i5")
        self.builder.set_ram("16GB")
        self.builder.set_storage("512GB SSD")
        self.builder.set_gpu("Integrated GPU")

# Uso
builder = ComputerBuilder()
director = Director(builder)

# Construcción de una PC para juegos
director.build_gaming_pc()
gaming_pc = builder.get_result()
print(gaming_pc)

# Construcción de una PC para oficina
director.build_office_pc()
office_pc = builder.get_result()
print(office_pc)
