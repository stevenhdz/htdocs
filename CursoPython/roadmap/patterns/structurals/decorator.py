class Coffee:
    def cost(self):
        return 5

    def description(self):
        return "Café básico"

class MilkDecorator:
    def __init__(self, coffee):
        self.coffee = coffee

    def cost(self):
        return self.coffee.cost() + 2

    def description(self):
        return f"{self.coffee.description()} con leche"

# Uso
basic_coffee = Coffee()
milk_coffee = MilkDecorator(basic_coffee)

print(milk_coffee.description(), "-", milk_coffee.cost(), "$")
