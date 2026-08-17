import asyncio
import concurrent.futures
import threading
import time

# Función de suma que simula una tarea que tarda un poco de tiempo


def sum_task(n):
    time.sleep(1)  # Simular tiempo de espera
    return sum(range(n))

# Usando threading


def run_with_threading(n, num_tasks):
    threads = []
    results = []

    def worker(n):
        result = sum_task(n)
        results.append(result)

    for _ in range(num_tasks):
        thread = threading.Thread(target=worker, args=(n,))
        threads.append(thread)
        thread.start()

    for thread in threads:
        thread.join()

    return results

# Usando multiprocessing


def run_with_multiprocessing(n, num_tasks):
    with concurrent.futures.ProcessPoolExecutor() as executor:
        results = list(executor.map(sum_task, [n] * num_tasks))
    return results

# Usando asyncio


async def async_sum_task(n):
    await asyncio.sleep(1)  # Simular tiempo de espera
    return sum(range(n))


async def run_with_asyncio(n, num_tasks):
    tasks = [async_sum_task(n) for _ in range(num_tasks)]
    return await asyncio.gather(*tasks)

# Configuración y ejecución de pruebas


def main():
    n = 1000000  # Número para sumar
    num_tasks = 5  # Número de tareas

    # Medir tiempo de threading
    start = time.time()
    threading_results = run_with_threading(n, num_tasks)
    print("Threading results:", threading_results)
    print("Threading took:", time.time() - start)

    # Medir tiempo de multiprocessing
    start = time.time()
    multiprocessing_results = run_with_multiprocessing(n, num_tasks)
    print("Multiprocessing results:", multiprocessing_results)
    print("Multiprocessing took:", time.time() - start)

    # Medir tiempo de asyncio
    start = time.time()
    asyncio_results = asyncio.run(run_with_asyncio(n, num_tasks))
    print("Asyncio results:", asyncio_results)
    print("Asyncio took:", time.time() - start)


if __name__ == "__main__":
    main()
