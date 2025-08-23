from abc import ABC, abstractmethod
from dataclasses import dataclass


# --- 1. ABSTRACCIÓN ---
class LocationValidator(ABC):
    @abstractmethod
    def is_valid(self, lat: float, lon: float) -> bool:
        """Valida si las coordenadas cumplen la condición"""
        pass


# --- 2. IMPLEMENTACIONES (DESACOPLADAS) ---
class AlwaysValidValidator(LocationValidator):
    def is_valid(self, lat: float, lon: float) -> bool:
        return True


class RangeValidator(LocationValidator):
    """Ejemplo: valida si está dentro de un rectángulo geográfico"""
    def __init__(self, lat_min: float, lat_max: float, lon_min: float, lon_max: float):
        self.lat_min = lat_min
        self.lat_max = lat_max
        self.lon_min = lon_min
        self.lon_max = lon_max

    def is_valid(self, lat: float, lon: float) -> bool:
        return self.lat_min <= lat <= self.lat_max and self.lon_min <= lon <= self.lon_max


# --- 3. CASO DE USO (DEPENDE DE LA ABSTRACCIÓN) ---
@dataclass
class ChallengeService:
    validator: LocationValidator  # --- Inyección de dependencias ---

    def complete_challenge(self, lat: float, lon: float) -> bool:
        """Devuelve True si el reto se completa, False si no"""
        return self.validator.is_valid(lat, lon)


# --- 4. CONFIGURACIÓN (INYECTAMOS IMPLEMENTACIONES) ---
if __name__ == "__main__":
    # Podemos inyectar cualquier implementación
    validator = RangeValidator(lat_min=6.20, lat_max=6.30, lon_min=-75.60, lon_max=-75.50)
    service = ChallengeService(validator)

    result = service.complete_challenge(6.25, -75.55)
    print("Reto completado ✅" if result else "Reto rechazado ❌")