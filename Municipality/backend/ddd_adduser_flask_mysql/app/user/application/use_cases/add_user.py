class AddUser:
    def __init__(self, user_service):
        self.user_service = user_service

    def execute(self, user_data):
        return self.user_service.create_user(user_data)
