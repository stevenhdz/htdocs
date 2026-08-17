# Resumen de principios: SOLID, KISS, DRY, STUPID, YAGNI y GRASP

## SOLID (5)
- **S — Single Responsibility:** Una clase/módulo debe tener **una sola razón de cambio** (separa cálculo, persistencia y presentación).
- **O — Open/Closed:** Código **abierto a extensión** y **cerrado a modificación** (usa estrategias/polimorfismo en lugar de `if` por tipo).
- **L — Liskov Substitution:** Las subclases deben **sustituir** a su base sin romper contratos (no cambies significados ni pre/postcondiciones).
- **I — Interface Segregation:** Prefiere **interfaces pequeñas y específicas** a interfaces “gordas” (no obligues a implementar métodos inútiles).
- **D — Dependency Inversion:** **Depende de abstracciones**, **inyecta** implementaciones (mejor testabilidad y menor acoplamiento).

## KISS (Keep It Simple, Stupid)
- Elige la **solución más simple que funciona**.
- Evita sobre-ingeniería y complejidad innecesaria.
- Señal: si explicar una función toma más que leerla, está **demasiado compleja**.

## DRY (Don’t Repeat Yourself)
- **Una regla de negocio en un solo lugar**.
- Extrae funciones/módulos reutilizables.
- Cuidado con el “falso DRY”: no abstraigas prematuramente si la duplicación aún no es un patrón estable.

## STUPID (qué evitar)
- **S**ingleton abusado → estado global oculto y difícil de testear.
- **T**ight Coupling → dependencias fuertes; prefiere puertos/abstracciones.
- **U**ntestability → mezcla IO/red/tiempo con lógica; separa “puro vs. efectos”.
- **P**remature Optimization → optimiza **solo después de medir**.
- **I**ndescriptive Naming → nombres vagos; elige nombres claros y expresivos.
- **D**uplication → reglas copiadas; centraliza la lógica.

## YAGNI (You Aren’t Gonna Need It)
- No implementes **features o flexibilidad** “por si acaso”.
- Construye **lo necesario hoy**; generaliza cuando haya evidencia (requisitos, métricas, dolor real).

## GRASP (asignación de responsabilidades)
- **Information Expert:** el que **tiene los datos** realiza los cálculos.
- **Creator:** quien **agrega/contiene/usa mucho** a otro, lo **crea**.
- **Controller:** orquesta el **caso de uso** (no la UI ni el framework).
- **Low Coupling:** **pocas dependencias** y uso de abstracciones.
- **High Cohesion:** clases **enfocadas** en una tarea clara.
- **Polymorphism:** variaciones vía **interfaces/polimorfismo**, no por `if` de tipo.
- **Pure Fabrication:** clase “ficticia” para lograr bajo acoplamiento/alta cohesión (p. ej., Repositorio).
- **Indirection:** intermediarios (adaptadores/buses) para desacoplar.
- **Protected Variations:** **aísla puntos de cambio** detrás de una interfaz estable.
