# 📘 README — Abstracción, Desacoplamiento e Inyección de Dependencias

## 🔑 Introducción
Al desarrollar software escalable y mantenible, existen tres pilares técnicos fundamentales:  

1. **Abstracción**  
2. **Desacoplamiento**  
3. **Inyección de dependencias (DI)**  

Estos principios permiten construir sistemas más flexibles, fáciles de probar y resistentes a cambios tecnológicos o de negocio.

---

## 1️⃣ Abstracción
**Definición:**  
La abstracción consiste en **definir contratos o interfaces** que describen *qué debe hacer un componente*, sin importar *cómo lo hace*.  

**Ejemplo conceptual:**  
- Contrato: “Un validador de ubicación debe indicar si unas coordenadas son válidas o no.”  
- Implementaciones posibles:  
  - Validar con un rectángulo geográfico.  
  - Validar con una base de datos espacial.  
  - Validar con un servicio externo (ej. Google Maps API).  

**Beneficios:**  
- Claridad al trabajar con conceptos de negocio.  
- Flexibilidad para tener múltiples implementaciones.  
- Extensibilidad sin modificar el código existente.

---

## 2️⃣ Desacoplamiento
**Definición:**  
El desacoplamiento busca que los módulos del sistema **no dependan directamente unos de otros**, sino de abstracciones.  

**Ejemplo conceptual:**  
- Un servicio que completa retos depende de la abstracción *Validador de Ubicación*, no de una clase concreta como “Validador con PostGIS”.  

**Beneficios:**  
- Cambiar una implementación no rompe otras partes del sistema.  
- Facilita las pruebas unitarias, ya que se pueden usar “falsos” o “mocks”.  
- Reduce la complejidad y la dependencia entre capas.

---

## 3️⃣ Inyección de Dependencias (DI)
**Definición:**  
La inyección de dependencias es un patrón que consiste en **pasar las implementaciones desde fuera del componente** en lugar de que este las cree internamente.  

**Ejemplo conceptual:**  
- El servicio de retos recibe como dependencia un “Validador de Ubicación” en el momento de su construcción.  
- Según el entorno (desarrollo, pruebas, producción), se puede inyectar la implementación adecuada.  

**Beneficios:**  
- Flexibilidad para cambiar tecnologías sin tocar la lógica central.  
- Pruebas más fáciles gracias a la posibilidad de inyectar dependencias simuladas.  
- Configuración centralizada y adaptable a distintos contextos.

---

## 📌 Relación entre los tres pilares
1. **La abstracción** define qué debe hacer un componente.  
2. **El desacoplamiento** asegura que otros módulos dependan solo de esa abstracción, no de implementaciones concretas.  
3. **La inyección de dependencias** permite elegir y conectar la implementación adecuada sin modificar la lógica principal.  

En conjunto, estos principios facilitan la construcción de software **mantenible, extensible y testeable**.

---

## ✅ Beneficios globales
- Código más **limpio** y **entendible**.  
- Mayor **testabilidad** sin necesidad de infraestructura real.  
- **Evolución segura**: cambios tecnológicos no afectan al dominio.  
- Preparación para aplicar patrones avanzados como **DDD, Arquitectura Hexagonal o Clean Architecture**.  
