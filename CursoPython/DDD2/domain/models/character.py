class Character:
    def __init__(self, id, name, species):
        self.id = id
        self.name = name
        self.species = species

    def __str__(self):
        return f"Character(id={self.id}, name={self.name}, species={self.species})"
