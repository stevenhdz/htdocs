# GRASP - Patrones de Responsabilidad

Los **GRASP** (General Responsibility Assignment Software Patterns) son principios que ayudan a decidir **qué clase debe tener qué responsabilidad** en un sistema orientado a objetos.

---

## 1. Creator
- **Idea**: Una clase crea objetos de otras clases que usa o contiene.  
- **Ejemplo**: `Order` crea sus propios `OrderItem`.

---

## 2. Information Expert
- **Idea**: La clase que tiene la información necesaria debe manejar la responsabilidad.  
- **Ejemplo**: `OrderItem` calcula su subtotal porque tiene cantidad y precio.

---

## 3. Controller
- **Idea**: Una clase coordina peticiones del sistema (no la UI ni el modelo).  
- **Ejemplo**: `OrderController` maneja las solicitudes y usa `OrderService`.

---

## 4. Low Coupling
- **Idea**: Reducir dependencias entre clases para facilitar cambios.  
- **Ejemplo**: `Order` depende de una interfaz `Notifier`, no de un `EmailNotifier` directo.

---

## 5. High Cohesion
- **Idea**: Cada clase debe tener una sola responsabilidad clara.  
- **Ejemplo**: Separar `OrderCalculator`, `OrderRepository` y `OrderNotifier`.

---

## 6. Polymorphism
- **Idea**: Variaciones de comportamiento se resuelven con herencia o interfaces.  
- **Ejemplo**: `Payment` → `CreditCardPayment`, `PayPalPayment`.

---

## 7. Pure Fabrication
- **Idea**: Crear clases auxiliares que no existen en el dominio para mejorar diseño.  
- **Ejemplo**: `OrderRepository` para manejar la persistencia.

---

## 8. Indirection
- **Idea**: Usar intermediarios para desacoplar clases.  
- **Ejemplo**: `Logger` entre `Order` y la salida de log.

---

## 9. Protected Variations
- **Idea**: Encapsular lo que puede cambiar detrás de interfaces.  
- **Ejemplo**: `PaymentProcessor` con implementaciones `StripeProcessor` y `PayPalProcessor`.

---

## 📌 Resumen Visual
- **Creator** → Quién crea.  
- **Expert** → Quién sabe.  
- **Controller** → Quién coordina.  
- **Low Coupling** → Pocas dependencias.  
- **High Cohesion** → Responsabilidad clara.  
- **Polymorphism** → Variantes con subclases.  
- **Pure Fabrication** → Clase auxiliar artificial.  
- **Indirection** → Intermediario para desacoplar.  
- **Protected Variations** → Encapsular lo que cambia.
