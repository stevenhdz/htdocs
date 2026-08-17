---
runme:
  id: 01HRN25T85MD7R7PSJDYE2N07B
  version: v3
---

npm install -g typescript

mkdir mi-proyecto
cd mi-proyecto
tsc --init

tsc

node main.js

SRP - Principio de Responsabilidad Única (Single Responsibility Principle):
Este principio establece que una clase debe tener una sola razón para cambiar. En otras palabras, una clase debe tener una única responsabilidad. Si una clase tiene más de una responsabilidad, se vuelve más difícil de entender, modificar y mantener.

OCP - Principio de Abierto/Cerrado (Open/Closed Principle):
Este principio establece que las entidades de software (clases, módulos, funciones, etc.) deben estar abiertas para la extensión pero cerradas para la modificación. Es decir, se deben poder agregar nuevas funcionalidades sin necesidad de modificar el código existente.

LSP - Principio de Sustitución de Liskov (Liskov Substitution Principle):
Este principio establece que los objetos de un programa deberían ser reemplazables por instancias de sus subtipos sin afectar la corrección del programa. En otras palabras, los objetos deben poder ser sustituidos por instancias de sus subtipos sin causar problemas en el comportamiento esperado del programa.

ISP - Principio de Segregación de la Interfaz (Interface Segregation Principle):
Este principio establece que los clientes no deben ser forzados a depender de interfaces que no utilizan. En lugar de tener una interfaz grande que contenga todos los métodos posibles, se deben tener interfaces más específicas que contengan solo los métodos relevantes para un cliente particular.

DIP - Principio de Inversión de Dependencia (Dependency Inversion Principle):
Este principio establece que los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones. Las abstracciones no deben depender de detalles. Los detalles deben depender de abstracciones. En resumen, las dependencias deben estar dirigidas hacia interfaces o abstracciones en lugar de hacia implementaciones concretas.