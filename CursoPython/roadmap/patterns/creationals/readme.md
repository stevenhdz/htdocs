# Patrones de Diseño CREACIONALES

## 1. Singleton
**Descripción:**  
El patrón Singleton asegura que una clase tenga una **única instancia** en toda la aplicación y proporciona un **punto global de acceso** a esa instancia.

**¿Cuándo usarlo?**
- Cuando necesitas controlar el acceso a un recurso compartido, como un logger, una conexión a base de datos o un gestor de configuración.
- Cuando es esencial que exista solo una instancia de una clase para evitar conflictos o inconsistencias.

---

## 2. Factory Method
**Descripción:**  
El patrón Factory Method define una **interfaz para crear objetos**, pero permite que las subclases decidan qué clase instanciar. Esto promueve la flexibilidad al delegar la creación de objetos a las subclases.

**¿Cuándo usarlo?**
- Cuando necesitas delegar la creación de objetos a subclases específicas sin acoplar el código al tipo concreto.
- Cuando trabajas con una familia de productos y deseas encapsular la lógica de creación para facilitar la extensibilidad.

---

## 3. Builder
**Descripción:**  
El patrón Builder se utiliza para construir **objetos complejos paso a paso**. Permite crear diferentes representaciones del mismo objeto utilizando el mismo proceso de construcción.

**¿Cuándo usarlo?**
- Cuando necesitas construir objetos con muchas configuraciones opcionales o pasos intermedios.
- Cuando el uso de constructores con demasiados parámetros hace el código difícil de entender y mantener.

---

## 4. Abstract Factory
**Descripción:**  
El patrón Abstract Factory es una **fábrica de fábricas** que proporciona una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas.

**¿Cuándo usarlo?**
- Cuando trabajas con múltiples familias de productos que deben ser consistentes entre sí.
- Cuando quieres garantizar que los objetos creados sean compatibles y facilitar cambios de plataforma (por ejemplo, entre interfaces para Windows, MacOS o Linux).

---
