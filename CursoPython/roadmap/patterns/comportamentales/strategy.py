class TaxStrategy:
    def calculate(self, amount):
        pass

class USATax(TaxStrategy):
    def calculate(self, amount):
        return amount * 0.1

class EuropeTax(TaxStrategy):
    def calculate(self, amount):
        return amount * 0.2

class TaxCalculator:
    def __init__(self, strategy):
        self.strategy = strategy

    def calculate_tax(self, amount):
        return self.strategy.calculate(amount)

# Uso
usa_tax = USATax()
europe_tax = EuropeTax()

calculator = TaxCalculator(usa_tax)
print("Impuesto en USA:", calculator.calculate_tax(1000))

calculator.strategy = europe_tax
print("Impuesto en Europa:", calculator.calculate_tax(1000))
