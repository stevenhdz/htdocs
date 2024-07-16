from interfaces.character_interface import CharacterInterface
from interfaces.episode_interface import EpisodeInterface


def main():
    character_interface = CharacterInterface()
    episode_interface = EpisodeInterface()

    # Listar todos los personajes
    print("Characters:")
    character_interface.list_characters()

    # Obtener un episodio específico
    print("\nEpisode:")
    episode_interface.get_episode(51)


if __name__ == "__main__":
    main()
