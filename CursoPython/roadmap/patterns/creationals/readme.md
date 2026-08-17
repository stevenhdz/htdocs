# Patrones de Diseño

## 1. Singleton
**Descripción:**  
Singleton es un patrón de diseño creacional que nos permite asegurarnos de que una clase tenga una única instancia, a la vez que proporciona un punto de acceso global a dicha instancia.

**¿Cuándo usarlo?**
- Cuando necesitas controlar el acceso a un recurso compartido, como un logger, una conexión a base de datos o un gestor de configuración.
- Cuando es esencial que exista solo una instancia de una clase para evitar conflictos o inconsistencias.

---

## 2. Factory Method
**Descripción:**  
Factory Method es un patrón de diseño creacional que proporciona una interfaz para crear objetos en una superclase, mientras permite a las subclases alterar el tipo de objetos que se crearán.

**¿Cuándo usarlo?**
- Cuando necesitas delegar la creación de objetos a subclases específicas sin acoplar el código al tipo concreto.
- Cuando trabajas con una familia de productos y deseas encapsular la lógica de creación para facilitar la extensibilidad.

---

## 3. Builder
**Descripción:**  
Builder es un patrón de diseño creacional que nos permite construir objetos complejos paso a paso. El patrón nos permite producir distintos tipos y representaciones de un objeto empleando el mismo código de construcción.

**¿Cuándo usarlo?**
- Cuando necesitas construir objetos con muchas configuraciones opcionales o pasos intermedios.
- Cuando el uso de constructores con demasiados parámetros hace el código difícil de entender y mantener.

---

## 4. Abstract Factory
**Descripción:**  
Abstract Factory es un patrón de diseño creacional que nos permite producir familias de objetos relacionados sin especificar sus clases concretas.

**¿Cuándo usarlo?**
- Cuando trabajas con múltiples familias de productos que deben ser consistentes entre sí.
- Cuando quieres garantizar que los objetos creados sean compatibles y facilitar cambios de plataforma (por ejemplo, entre interfaces para Windows, MacOS o Linux).

---

## 5. Prototype

**Descripción:**  
Prototype es un patrón de diseño creacional que nos permite copiar objetos existentes sin que el código dependa de sus clases.

**¿Cuándo usarlo?**
- Cuando necesitas clonar objetos de forma eficiente.
- Cuando las clases a instanciar son definidas en tiempo de ejecución y no puedes determinar sus tipos con antelación.
- Cuando quieres evitar costosos procesos de inicialización de un objeto.