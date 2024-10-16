import timeit
import matplotlib.pyplot as plt

# O(1)


def constant_time_operation():
    return 42

# O(log n)


def logarithmic_time_operation(n):
    count = 0
    while n > 1:
        n //= 2
        count += 1
    return count

# O(n)


def linear_time_operation(n):
    total = 0
    for i in range(n):
        total += i
    return total

# O(n log n)


def linear_logarithmic_time_operation(n):
    if n <= 1:
        return n
    else:
        return linear_logarithmic_time_operation(n - 1) + n

# O(n^2)


def quadratic_time_operation(n):
    total = 0
    for i in range(n):
        for j in range(n):
            total += i + j
    return total

# O(2^n)


def exponential_time_operation(n):
    if n <= 1:
        return 1
    else:
        return exponential_time_operation(n - 1) + exponential_time_operation(n - 1)

# O(n!)


def factorial_time_operation(n):
    if n == 0:
        return 1
    else:
        return n * factorial_time_operation(n - 1)

# Función para medir el tiempo usando timeit


def measure_time_and_operations(func, *args):
    # Ejecutar la función 1000 veces para obtener un promedio
    execution_time = timeit.timeit(lambda: func(*args), number=1000)
    result = func(*args)  # Ejecutar una vez para obtener el resultado
    operations = 'n/a'  # Variable para operaciones

    # Contar operaciones
    if func == constant_time_operation:
        operations = f"O(1)"  # O(1)
    elif func == logarithmic_time_operation:
        operations = f"O(log({args[0]}))"  # O(log n)
    elif func == linear_time_operation:
        operations = f"O({args[0]})"  # O(n)
    elif func == linear_logarithmic_time_operation:
        operations = f"O({args[0]} log({args[0]}))"  # O(n log n)
    elif func == quadratic_time_operation:
        operations = f"O({args[0]}^2)"  # O(n^2)
    elif func == exponential_time_operation:
        operations = f"O(2^{args[0]})"  # O(2^n)
    elif func == factorial_time_operation:
        operations = f"O({args[0]}!)"  # O(n!)

    execution_time_ms = execution_time * 1000
    return operations, func.__name__.replace('_time_operation', ''), execution_time_ms


def plot_results(results):
    funciones, names, tiempos = zip(*results)

    # Colores diferentes para cada barra
    colors = ['skyblue', 'orange', 'green', 'red', 'purple', 'brown', 'pink']

    # Crear el gráfico de barras
    plt.figure(figsize=(12, 6))
    plt.bar(funciones, tiempos, color=colors)

    for i, v in enumerate(tiempos):
        plt.text(i, v + 0.5, f"{names[i]}", ha='center',
                 va='bottom', rotation=0, color='black')

    plt.xlabel('Complejidad teórica (Operaciones)')
    plt.ylabel('Tiempo promedio (ms)')
    plt.title('Relación entre Complejidad y Tiempo de Ejecución')
    plt.grid(axis='y', linestyle='--', linewidth=0.5)

    # Mostrar el gráfico
    plt.tight_layout()
    plt.show()


# Ejecución de las funciones
print("Abriendo grafica:")
result = []
result.append(measure_time_and_operations(constant_time_operation))
result.append(measure_time_and_operations(
    logarithmic_time_operation, 10))  # Aumenta n
result.append(measure_time_and_operations(
    linear_time_operation, 10))  # Aumenta n
result.append(measure_time_and_operations(
    linear_logarithmic_time_operation, 10))  # Aumenta n
result.append(measure_time_and_operations(
    quadratic_time_operation, 6))  # Mantén n razonable
result.append(measure_time_and_operations(
    exponential_time_operation, 7))  # Mantén n razonable
result.append(measure_time_and_operations(
    factorial_time_operation, 110))  # Mantén n razonable

plot_results(result)
