Ejemplo real de los algoritmos, puedes ejecutarlo.

![Alt text](assets/Figure_1.png)

# Notación Big O

## 1. Definición

**Big O** es una notación matemática que describe el límite superior del tiempo de ejecución o el uso de espacio de un algoritmo. Se denota como **O(f(n))**, donde **f(n)** es una función que representa el tiempo o espacio en función del tamaño de la entrada **n**.

## 2. Propósito

- **Comparación de Algoritmos**: Permite comparar diferentes algoritmos y elegir el más eficiente para un problema dado.
- **Escalabilidad**: Ayuda a predecir cómo se comportará un algoritmo cuando la cantidad de datos aumenta.

## 3. Clases Comunes de Complejidad

A continuación, se detallan las clases más comunes de complejidad temporal y espacial:

![Alt text](assets/image.png)

Mas informacion visita: http://bigocheatsheet.com

## 4. Análisis de Complejidad

- **Peor Caso**: Se refiere al escenario donde el algoritmo tarda más tiempo o usa más recursos. Big O generalmente se refiere a este caso.
- **Mejor Caso y Caso Promedio**: Aunque son importantes, se utilizan menos frecuentemente para la notación Big O.

## 5. Espacio vs. Tiempo

- **Complejidad Temporal**: Se refiere al tiempo que tarda un algoritmo en ejecutarse.
- **Complejidad Espacial**: Se refiere a la cantidad de memoria adicional que utiliza. Puede tener notaciones como **O(1)** (espacio constante) o **O(n)** (espacio lineal).

## 6. Limitaciones

- Big O no proporciona información sobre la constante oculta o el tiempo real de ejecución.
- Dos algoritmos pueden tener la misma complejidad Big O pero rendir de manera diferente en la práctica.

ncalls: Número de veces que se llama a una función.
tottime: Tiempo total de CPU en la función, excluyendo llamadas a otras funciones.
percall: Tiempo promedio de CPU por llamada a la función (tottime / ncalls).
cumtime: Tiempo total de CPU en la función y en todas las funciones que llama.