import time
import numpy as np


def sum_of_n_numbers(n: int) -> int:
    """Suma los números del 1 al n usando NumPy."""
    return np.sum(np.arange(1, n + 1))


if __name__ == "__main__":
    n = 100_000_000

    start_time = time.time()
    result = sum_of_n_numbers(n)
    end_time = time.time()

    execution_time = end_time - start_time
    print(f"Python: Result = {result}, Execution time = {execution_time * 1000:.3f} ms")
