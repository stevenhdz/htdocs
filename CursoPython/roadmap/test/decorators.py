def ValidateData(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        if result is None:
            return "invalid data"
        return result
    return wrapper

def ValidateData2(*args, **kwargs):
    def decorator(func):
        def wrapper(*f_args, **f_kwargs):
            print("Validando con:", args, kwargs)
            return func(*f_args, **f_kwargs)
        return wrapper
    return decorator

class Test:
    def __init__(self, data):
        self.data = data

    @ValidateData
    @ValidateData2(test=True)
    def order_by_most_recent(self):
        print("Ejecutando order_by_most_recent")
        if not isinstance(self.data, list) or not self.data:
            return {}

        sort = sorted(self.data, key=lambda item: item['createAt'], reverse=True)
        if sort:
            return sort[0]
        return {}

data = [
    {"createAt": "2025-02-19T14:30:00Z"},
    {"createAt": "2025-02-16T14:30:00Z"},
    {"createAt": "2025-03-17T14:30:00Z"}
]

order = Test(data=data)
result = order.order_by_most_recent()
print(result)
