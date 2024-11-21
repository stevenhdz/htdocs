# KISS = Keep It Simple, Stupid

# Mala practica
def calculate_total(prices):
    total = 0
    for price in prices:
        tax = price * 0.15  # Calcular IVA individualmente
        total += price + tax  # Sumar precio con IVA
    return total


prices = [100, 200, 300]
print(calculate_total(prices))  # Salida: 690.0


# Mejor practica
def calculate_total(prices, tax_rate=0.15):
    return sum(price * (1 + tax_rate) for price in prices)


prices = [100, 200, 300]
print(calculate_total(prices))  # Salida: 690.0
