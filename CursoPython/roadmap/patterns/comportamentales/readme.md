# Patrones de Diseño de Comportamiento

Los **patrones de diseño de comportamiento** se centran en cómo los objetos interactúan y se comunican entre sí. Estos patrones definen maneras eficientes de delegar responsabilidades, manejar relaciones y garantizar que las interacciones sean flexibles y escalables.

---

## **1. Chain of Responsibility (Cadena de Responsabilidad)**
**Descripción:**  
Permite que múltiples objetos tengan la oportunidad de manejar una solicitud al pasarla a través de una cadena de manejadores. Cada manejador decide si procesa la solicitud o la pasa al siguiente en la cadena.

**¿Cuándo usarlo?**
- Cuando quieres desacoplar el remitente y el receptor de una solicitud.
- Cuando múltiples objetos pueden manejar una solicitud, pero no sabes cuál específicamente.

---

## **2. Command (Comando)**
**Descripción:**  
Encapsula una solicitud como un objeto, permitiendo parametrizar objetos con solicitudes, realizar un seguimiento de las operaciones o deshacerlas.

**¿Cuándo usarlo?**
- Cuando quieres desacoplar a los emisores de solicitudes de sus receptores.
- Cuando necesitas implementar operaciones como deshacer o rehacer.

---

## **3. Iterator (Iterador)**
**Descripción:**  
Proporciona una forma de acceder a los elementos de una colección de forma secuencial sin exponer su representación interna.

**¿Cuándo usarlo?**
- Cuando necesitas recorrer una colección compleja sin revelar detalles de su implementación.
- Cuando deseas proporcionar múltiples formas de iterar sobre una colección.

---

## **4. Observer (Observador)**
**Descripción:**  
Define una relación de dependencia de uno a muchos, donde múltiples objetos son notificados y actualizados automáticamente cuando un objeto cambia de estado.

**¿Cuándo usarlo?**
- Cuando varios objetos necesitan ser notificados de los cambios en el estado de otro objeto.
- Para implementar sistemas de publicación-suscripción.

---

## **5. Strategy (Estrategia)**
**Descripción:**  
Define una familia de algoritmos, los encapsula y permite intercambiarlos dinámicamente, manteniendo el comportamiento independiente de los clientes que los usan.

**¿Cuándo usarlo?**
- Cuando necesitas diferentes variantes de un algoritmo.
- Para eliminar estructuras complejas de control en el código (como múltiples `if-else` o `switch-case`).

---

## **6. Template Method (Método Plantilla)**
**Descripción:**  
Define el esqueleto de un algoritmo en una clase base y delega la implementación de pasos específicos a subclases.

**¿Cuándo usarlo?**
- Cuando tienes un algoritmo estándar pero partes de él necesitan ser personalizados por subclases.
- Para evitar la duplicación de código al definir una estructura común.

---

## **Beneficios de los Patrones de Comportamiento**
1. **Flexibilidad:** Facilitan la extensión y modificación de las interacciones entre objetos.
2. **Reutilización:** Permiten desacoplar las responsabilidades, fomentando el uso de componentes reutilizables.
3. **Escalabilidad:** Ayudan a manejar sistemas complejos al simplificar las interacciones entre objetos.

Estos patrones son esenciales para construir aplicaciones robustas y fáciles de mantener, especialmente cuando se manejan relaciones dinámicas entre objetos.  
