import os


class Config:
    BASE_URL = os.getenv('RICK_AND_MORTY_API_BASE_URL',
                         'https://rickandmortyapi.com/api/character')
