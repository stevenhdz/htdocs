# 🧼 Código Smells (Malos Olores de Código)

## Bloaters (Código Inflado)

- **Long Method (Método Largo)**: Un método que realiza demasiadas tareas y se vuelve difícil de comprender y mantener.
- **Large Class (Clase Grande)**: Una clase que tiene demasiados métodos o atributos, lo que la hace difícil de entender, mantener y reutilizar.
- **Primitive Obsession (Obsesión por Primitivos)**: Usar tipos primitivos para representar conceptos complejos, en lugar de usar objetos adecuados.
- **Long Parameter List (Lista de Parámetros Larga)**: Métodos con muchos parámetros, lo que dificulta su comprensión y uso.
- **Data Clumps (Agrupaciones de Datos)**: Agrupar datos que pertenecen juntos pero que no están representados adecuadamente como un objeto.

## Object-Orientation Abusers (Abusos de la Orientación a Objetos)

- **Switch Statements (Sentencias Switch)**: El uso de sentencias switch o case cuando se podría aplicar polimorfismo para simplificar el código.
- **Temporary Field (Campo Temporal)**: Un campo de clase que solo se usa en algunos métodos y no tiene un propósito claro en la clase.
- **Refused Bequest (Legado Rechazado)**: Una subclase hereda métodos o atributos de su clase base que no necesita o no usa.
- **Alternative Classes with Different Interfaces (Clases Alternativas con Interfaces Diferentes)**: Cuando dos clases tienen la misma funcionalidad, pero con interfaces completamente diferentes, lo que dificulta el mantenimiento.

## Change Preventers (Impedimentos de Cambio)

- **Divergent Change (Cambio Divergente)**: Cuando se necesita hacer cambios en muchas partes del sistema debido a que una clase o componente tiene múltiples responsabilidades.
- **Shotgun Surgery (Cirugía de Escopeta)**: Necesitar hacer pequeños cambios en muchas clases cuando se requiere modificar un solo comportamiento.
- **Parallel Inheritance Hierarchies (Jerarquías de Herencia Paralelas)**: Tener jerarquías de clases separadas que deberían ser fusionadas, ya que están relacionadas por la herencia.

## Dispensables (Prescindibles)

- **Comments (Comentarios)**: Uso excesivo de comentarios cuando el código podría ser más claro si se refactorara adecuadamente.
- **Duplicate Code (Código Duplicado)**: Repetir fragmentos de código que podrían extraerse en métodos o clases reutilizables.
- **Lazy Class (Clase Perezosa)**: Una clase que no tiene suficiente funcionalidad y, por lo tanto, es innecesaria.
- **Data Class (Clase de Datos)**: Una clase que solo contiene datos sin ninguna lógica o comportamiento relevante.
- **Dead Code (Código Muerto)**: Código que no se ejecuta nunca y solo ocupa espacio.
- **Speculative Generality (Generalidad Especulativa)**: Código diseñado para una funcionalidad futura que nunca se usa, lo que lo hace innecesario.

## Couplers (Acopladores)

- **Feature Envy (Envidia de Funcionalidad)**: Cuando un método de una clase accede a los datos de otra clase más de lo necesario.
- **Inappropriate Intimacy (Intimidad Inapropiada)**: Cuando una clase depende excesivamente de los detalles internos de otra clase.
- **Message Chains (Cadenas de Mensajes)**: Cuando los objetos llaman métodos de otros objetos en una larga cadena, lo que hace el código difícil de seguir.
- **Middle Man (Intermediario)**: Un objeto que solo pasa mensajes a otros objetos sin agregar funcionalidad significativa.
- **Incomplete Library Class (Clase de Biblioteca Incompleta)**: Usar una clase de biblioteca externa que no proporciona todas las funcionalidades necesarias, por lo que se tienen que añadir soluciones adicionales.

---

# 🔧 Técnicas de Refactorización

## Composición de Métodos

- **Extract Method (Extraer Método)**
- **Inline Method (Insertar Método)**
- **Extract Variable (Extraer Variable)**
- **Inline Temp (Insertar Variable Temporal)**
- **Replace Temp with Query (Reemplazar Variable Temporal con Consulta)**
- **Split Temporary Variable (Dividir Variable Temporal)**
- **Remove Assignments to Parameters (Eliminar Asignaciones a Parámetros)**
- **Replace Method with Method Object (Reemplazar Método con Objeto Método)**
- **Substitute Algorithm (Sustituir Algoritmo)**

## Mover Funcionalidades entre Objetos

- **Move Method (Mover Método)**
- **Move Field (Mover Campo)**
- **Extract Class (Extraer Clase)**
- **Inline Class (Insertar Clase)**
- **Hide Delegate (Ocultar Delegado)**
- **Remove Middle Man (Eliminar Intermediario)**
- **Introduce Foreign Method (Introducir Método Extranjero)**
- **Introduce Local Extension (Introducir Extensión Local)**

## Organización de Datos

- **Self Encapsulate Field (Autoencapsular Campo)**
- **Replace Data Value with Object (Reemplazar Valor de Datos con Objeto)**
- **Change Value to Reference (Cambiar Valor a Referencia)**
- **Change Reference to Value (Cambiar Referencia a Valor)**
- **Replace Array with Object (Reemplazar Arreglo con Objeto)**
- **Duplicate Observed Data (Duplicar Datos Observados)**
- **Change Unidirectional Association to Bidirectional (Cambiar Asociación Unidireccional a Bidireccional)**
- **Change Bidirectional Association to Unidirectional (Cambiar Asociación Bidireccional a Unidireccional)**
- **Replace Magic Number with Symbolic Constant (Reemplazar Número Mágico con Constante Simbólica)**
- **Encapsulate Field (Encapsular Campo)**
- **Encapsulate Collection (Encapsular Colección)**
- **Replace Type Code with Class (Reemplazar Código de Tipo con Clase)**
- **Replace Type Code with Subclasses (Reemplazar Código de Tipo con Subclases)**
- **Replace Type Code with State/Strategy (Reemplazar Código de Tipo con Estado/Estrategia)**
- **Replace Subclass with Fields (Reemplazar Subclase con Campos)**

## Simplificación de Expresiones Condicionales

- **Decompose Conditional (Descomponer Condicional)**
- **Consolidate Conditional Expression (Consolidar Expresión Condicional)**
- **Consolidate Duplicate Conditional Fragments (Consolidar Fragmentos Condicionales Duplicados)**
- **Remove Control Flag (Eliminar Bandera de Control)**
- **Replace Nested Conditional with Guard Clauses (Reemplazar Condicional Anidado con Cláusulas de Guardia)**
- **Replace Conditional with Polymorphism (Reemplazar Condicional con Polimorfismo)**
- **Introduce Null Object (Introducir Objeto Nulo)**
- **Introduce Assertion (Introducir Aserción)**

## Simplificación de Llamadas a Métodos

- **Rename Method (Renombrar Método)**
- **Add Parameter (Agregar Parámetro)**
- **Remove Parameter (Eliminar Parámetro)**
- **Separate Query from Modifier (Separar Consulta de Modificador)**
- **Parameterize Method (Parametrizar Método)**
- **Introduce Parameter Object (Introducir Objeto Parámetro)**
- **Preserve Whole Object (Preservar Objeto Completo)**
- **Remove Setting Method (Eliminar Método de Asignación)**
- **Replace Parameter with Explicit Methods (Reemplazar Parámetro con Métodos Explícitos)**
- **Replace Parameter with Method Call (Reemplazar Parámetro con Llamada a Método)**
- **Hide Method (Ocultar Método)**
- **Replace Constructor with Factory Method (Reemplazar Constructor con Método de Fábrica)**
- **Replace Error Code with Exception (Reemplazar Código de Error con Excepción)**
- **Replace Exception with Test (Reemplazar Excepción con Prueba)**

## Manejo de Generalización

- **Pull Up Field (Extraer Campo)**
- **Pull Up Method (Extraer Método)**
- **Pull Up Constructor Body (Extraer Cuerpo del Constructor)**
- **Push Down Field (Empujar Campo hacia Abajo)**
- **Push Down Method (Empujar Método hacia Abajo)**
- **Extract Subclass (Extraer Subclase)**
- **Extract Superclass (Extraer Superclase)**
- **Extract Interface (Extraer Interfaz)**
- **Collapse Hierarchy (Colapsar Jerarquía)**
