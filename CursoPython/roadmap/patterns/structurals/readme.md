# Patrones de Diseño Estructurales

Los **patrones estructurales** ayudan a definir cómo las clases y objetos se organizan y relacionan para formar estructuras más grandes y funcionales. Estos patrones proporcionan soluciones para manejar las dependencias, la reutilización y la flexibilidad en la composición del sistema.

---

## **1. Adapter (Adaptador)**
**Descripción:**  
El patrón Adapter actúa como un puente entre dos interfaces incompatibles, permitiendo que trabajen juntas. En lugar de modificar las clases originales, introduce un intermediario que traduce las llamadas entre ambas.

**¿Cuándo usarlo?**
- Cuando necesitas integrar clases o sistemas existentes con interfaces incompatibles.
- Para conectar sistemas antiguos con nuevos, manteniendo la independencia entre ellos.

---

## **2. Bridge (Puente)**
**Descripción:**  
El patrón Bridge separa una abstracción de su implementación, permitiendo que ambas evolucionen de forma independiente. Esto reduce el acoplamiento y facilita la extensibilidad.

**¿Cuándo usarlo?**
- Cuando necesitas mantener una jerarquía flexible entre abstracciones e implementaciones.
- Cuando hay varias combinaciones posibles entre la funcionalidad y las implementaciones, y quieres evitar una explosión de clases.

---

## **3. Composite (Compuesto)**
**Descripción:**  
El patrón Composite organiza objetos en estructuras jerárquicas tipo árbol, donde los objetos individuales y compuestos son tratados de la misma manera. Esto facilita trabajar con grupos de objetos como si fueran uno solo.

**¿Cuándo usarlo?**
- Cuando necesitas modelar relaciones jerárquicas, como un sistema de archivos o una organización.
- Cuando quieres tratar objetos individuales y colecciones de objetos de manera uniforme.

---

## **4. Decorator (Decorador)**
**Descripción:**  
El patrón Decorator permite agregar funcionalidades adicionales a un objeto de manera dinámica sin modificar su código original. Esto evita la necesidad de crear subclases para cada combinación de funcionalidades.

**¿Cuándo usarlo?**
- Cuando quieres extender las capacidades de un objeto de manera flexible y dinámica.
- Cuando necesitas evitar la creación de jerarquías extensas de clases para manejar diferentes combinaciones de funcionalidades.

---

## **5. Facade (Fachada)**
**Descripción:**  
El patrón Facade proporciona una interfaz simplificada para un subsistema complejo, ocultando su complejidad interna. Actúa como un punto de entrada único para las interacciones.

**¿Cuándo usarlo?**
- Cuando necesitas reducir la complejidad de la interacción con un subsistema complejo.
- Para proporcionar un punto de acceso unificado y simplificado a un conjunto de funcionalidades.

---

## **6. Proxy**
**Descripción:**  
El patrón Proxy actúa como un sustituto o representante de otro objeto, controlando su acceso y añadiendo funcionalidades adicionales antes o después de interactuar con el objeto real.

**¿Cuándo usarlo?**
- Cuando necesitas controlar el acceso a un objeto costoso o sensible.
- Para añadir lógica adicional, como control de acceso, almacenamiento en caché o registro de eventos, antes de delegar las tareas al objeto real.

---

## **Beneficios de los Patrones Estructurales**
- **Flexibilidad:** Permiten modificar la estructura del sistema sin afectar a sus componentes.
- **Reutilización:** Facilitan el uso de clases existentes con nuevas funcionalidades.
- **Mantenimiento:** Ayudan a reducir el acoplamiento entre clases, haciendo que el sistema sea más fácil de mantener y extender.

Estos patrones son fundamentales para diseñar sistemas robustos y escalables, especialmente en proyectos grandes y de largo plazo.
