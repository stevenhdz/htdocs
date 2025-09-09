class UserRegistered:
    def __init__(self, user_id, email):
        self.user_id = user_id
        self.email = email

    def __repr__(self):
        return "<UserRegistered(user_id=%s, email=%s)>" % (self.user_id, self.email)
