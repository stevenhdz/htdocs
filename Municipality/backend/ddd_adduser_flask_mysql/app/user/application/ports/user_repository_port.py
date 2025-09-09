class UserRepositoryPort:
    def create_user(self, user):
        raise NotImplementedError

    def get_by_email(self, email):
        raise NotImplementedError
