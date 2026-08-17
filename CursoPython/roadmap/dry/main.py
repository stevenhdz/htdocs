# DRY = Don't Repeat Yourself

# Mala practica
def calculate_item_price(price):
    tax = price * 0.15  # Repetido
    return price + tax


def calculate_service_price(price):
    tax = price * 0.15  # Repetido
    return price + tax

# Buena practica


def calculate_tax(price, rate=0.15):
    return price * rate


def calculate_item_price(price):
    return price + calculate_tax(price)


def calculate_service_price(price):
    return price + calculate_tax(price)
