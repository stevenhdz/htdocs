class Command:
    def execute(self):
        pass

class TurnOnLightCommand(Command):
    def execute(self):
        print("Encendiendo la luz")

class TurnOffLightCommand(Command):
    def execute(self):
        print("Apagando la luz")

class RemoteControl:
    def __init__(self):
        self.commands = []

    def add_command(self, command):
        self.commands.append(command)

    def execute_commands(self):
        for command in self.commands:
            command.execute()

# Uso
remote = RemoteControl()
remote.add_command(TurnOnLightCommand())
remote.add_command(TurnOffLightCommand())
remote.execute_commands()
