class CustomCollection:
    def __init__(self):
        self.items = []

    def add_item(self, item):
        self.items.append(item)

    def __iter__(self):
        return iter(self.items)

# Uso
collection = CustomCollection()
collection.add_item("Elemento 1")
collection.add_item("Elemento 2")

for item in collection:
    print(item)
