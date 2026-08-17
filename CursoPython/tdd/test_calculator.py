import unittest
from calculator import sumar

class TestCalculadora(unittest.TestCase):
    def test_suma(self):
        self.assertEqual(sumar(2, 3), 5)  # Esperamos que 2 + 3 sea 5
        self.assertEqual(sumar(-1, 1), 0)  # -1 + 1 debe ser 0
        self.assertEqual(sumar(0, 0), 0)  # 0 + 0 debe ser 0

if __name__ == "__main__":
    unittest.main()