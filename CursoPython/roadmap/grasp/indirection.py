class Logger:
    def log(self, message):
        print(f"LOG: {message}")

class Order:
    def __init__(self, logger: Logger):
        self.logger = logger

    def complete(self):
        self.logger.log("Order completed")

if __name__ == "__main__":
    logger = Logger()
    order = Order(logger)
    order.complete()
