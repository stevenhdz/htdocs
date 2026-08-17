# 🏛️ Arquitecturas de Software y Patrones de Diseño

Este repositorio contiene una introducción y ejemplos sobre **arquitecturas de software** y **patrones de diseño**, útiles para desarrollar aplicaciones bien estructuradas, mantenibles y escalables.

---

## 🧱 Arquitecturas de Software

### 1. Monolítica
Toda la lógica del sistema está agrupada en una única aplicación. Sencilla de desarrollar, pero difícil de escalar y mantener a gran escala.

### 2. Cliente-Servidor
Divide la aplicación en dos partes: el cliente (interfaz) y el servidor (lógica y datos). Muy común en aplicaciones web tradicionales.

### 3. Microservicios
El sistema se divide en pequeños servicios independientes que se comunican entre sí. Escalable, flexible y con despliegue individual, pero complejo de gestionar.

### 4. Event-Driven (Orientada a eventos)
Los componentes se comunican mediante eventos. Ideal para sistemas asincrónicos y desacoplados.

### 5. Hexagonal (Ports and Adapters)
Separa la lógica del negocio de las interfaces externas (como bases de datos, APIs, etc.), permitiendo mayor independencia y pruebas más simples.

### 6. En Capas
Organiza el sistema en capas (presentación, aplicación, dominio, infraestructura), cada una con responsabilidades claras.

### 7. Clean Architecture
Basada en principios SOLID. La lógica de negocio está aislada del resto del sistema, permitiendo cambios en tecnologías externas sin afectar el núcleo.

### 8. Serverless
No necesitas gestionar servidores; usas funciones que se ejecutan bajo demanda en la nube. Ideal para tareas pequeñas y escalables.

---

## 🎯 Patrones de Diseño

### 🛠️ Creacionales

- **Singleton**: Garantiza que una clase tenga una única instancia accesible globalmente.
- **Factory Method**: Permite crear objetos sin especificar su clase exacta.
- **Abstract Factory**: Produce familias de objetos relacionados sin acoplarse a sus clases concretas.
- **Builder**: Construye objetos complejos paso a paso.
- **Prototype**: Crea objetos a partir de una copia (clon) de otro existente.

### 🏗️ Estructurales

- **Adapter**: Convierte la interfaz de una clase en otra que el cliente espera.
- **Composite**: Permite tratar objetos individuales y composiciones de manera uniforme.
- **Decorator**: Agrega responsabilidades a un objeto dinámicamente.
- **Facade**: Proporciona una interfaz simplificada a un conjunto complejo de clases.
- **Proxy**: Controla el acceso a un objeto (por ejemplo, para agregar seguridad o caché).
- **Bridge**: Separa una abstracción de su implementación para que puedan variar independientemente.

### 🔁 Comportamiento

- **Observer**: Permite a varios objetos reaccionar a cambios en otro objeto.
- **Strategy**: Define una familia de algoritmos y los intercambia dinámicamente.
- **Command**: Encapsula una petición como un objeto, permitiendo deshacer y otras operaciones.
- **State**: Permite que un objeto altere su comportamiento cuando cambia su estado interno.
- **Iterator**: Proporciona una forma de recorrer elementos sin exponer su estructura.
- **Mediator**: Define un objeto que centraliza la comunicación entre otros objetos.
- **Chain of Responsibility**: Permite pasar una petición por una cadena de manejadores hasta que uno la procese.

---

## ✅ Uso del Repositorio

- Estudia los conceptos clave para entrevistas técnicas o proyectos reales.
- Revisa ejemplos prácticos para aplicar en tus propios desarrollos.
- Mejora tus habilidades de arquitectura y diseño con código claro y bien documentado.
