class test:
    def __init__(self, data):
        self.data = data

    def order_by_most_recent(self):
        sort = sorted(self.data, key=lambda item: item['createAt'], reverse=True)
        return sort[0]
    

order = test([{"createAt": "2025-02-19T14:30:00Z"}, {"createAt": "2025-02-16T14:30:00Z"}, {"createAt": "2025-03-17T14:30:00Z"}])
result = order.order_by_most_recent()
print(result)