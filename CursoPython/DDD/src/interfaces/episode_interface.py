
from application.episode_service import EpisodeService
from infrastructure.api.api_episode_repository import APIEpisodeRepository


class EpisodeInterface:
    def __init__(self):
        self.episode_service = EpisodeService(APIEpisodeRepository())

    def get_episode(self, episode_id: int):
        episode = self.episode_service.get_episode(episode_id)
        if episode:
            print(f"Episode: {episode.name}, Air Date: {episode.air_date}")
            for character in episode.characters:
                print(f" - {character.name}")
        else:
            print("Episode not found")

    def list_episodes(self):
        episodes = self.episode_service.list_episodes()
        for episode in episodes:
            print(f"Episode: {episode.name}, Air Date: {episode.air_date}")
            for character in episode.characters:
                print(f" - {character.name}")
