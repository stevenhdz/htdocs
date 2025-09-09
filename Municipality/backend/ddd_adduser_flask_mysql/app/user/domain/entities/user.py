class User:
    def __init__(self, id=None, name="", email="", password="", role_id=0, home_muni_id=None, config_profile=None):
        self.id = id
        self.name = name
        self.email = email
        self.password = password    # Nota: en prod, usar hash
        self.role_id = role_id
        self.home_muni_id = home_muni_id
        self.config_profile = config_profile or {}
