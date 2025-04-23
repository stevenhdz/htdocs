Código Smells (Malos Olores de Código)

Bloaters (Código Inflado)

Long Method (Método Largo): Un método que realiza demasiadas tareas y se vuelve difícil de comprender y mantener.

Large Class (Clase Grande): Una clase que tiene demasiados métodos o atributos, lo que la hace difícil de entender, mantener y reutilizar.

Primitive Obsession (Obsesión por Primitivos): Usar tipos primitivos para representar conceptos complejos, en lugar de usar objetos adecuados.

Long Parameter List (Lista de Parámetros Larga): Métodos con muchos parámetros, lo que dificulta su comprensión y uso.

Data Clumps (Agrupaciones de Datos): Agrupar datos que pertenecen juntos pero que no están representados adecuadamente como un objeto.

Object-Orientation Abusers (Abusos de la Orientación a Objetos)

Switch Statements (Sentencias Switch): El uso de sentencias switch o case cuando se podría aplicar polimorfismo para simplificar el código.

Temporary Field (Campo Temporal): Un campo de clase que solo se usa en algunos métodos y no tiene un propósito claro en la clase.

Refused Bequest (Legado Rechazado): Una subclase hereda métodos o atributos de su clase base que no necesita o no usa.

Alternative Classes with Different Interfaces (Clases Alternativas con Interfaces Diferentes): Cuando dos clases tienen la misma funcionalidad, pero con interfaces completamente diferentes, lo que dificulta el mantenimiento.

Change Preventers (Impedimentos de Cambio)

Divergent Change (Cambio Divergente): Cuando se necesita hacer cambios en muchas partes del sistema debido a que una clase o componente tiene múltiples responsabilidades.

Shotgun Surgery (Cirugía de Escopeta): Necesitar hacer pequeños cambios en muchas clases cuando se requiere modificar un solo comportamiento.

Parallel Inheritance Hierarchies (Jerarquías de Herencia Paralelas): Tener jerarquías de clases separadas que deberían ser fusionadas, ya que están relacionadas por la herencia.

Dispensables (Prescindibles)

Comments (Comentarios): Uso excesivo de comentarios cuando el código podría ser más claro si se refactorara adecuadamente.

Duplicate Code (Código Duplicado): Repetir fragmentos de código que podrían extraerse en métodos o clases reutilizables.

Lazy Class (Clase Perezosa): Una clase que no tiene suficiente funcionalidad y, por lo tanto, es innecesaria.

Data Class (Clase de Datos): Una clase que solo contiene datos sin ninguna lógica o comportamiento relevante.

Dead Code (Código Muerto): Código que no se ejecuta nunca y solo ocupa espacio.

Speculative Generality (Generalidad Especulativa): Código diseñado para una funcionalidad futura que nunca se usa, lo que lo hace innecesario.

Couplers (Acopladores)

Feature Envy (Envidia de Funcionalidad): Cuando un método de una clase accede a los datos de otra clase más de lo necesario.

Inappropriate Intimacy (Intimidad Inapropiada): Cuando una clase depende excesivamente de los detalles internos de otra clase.

Message Chains (Cadenas de Mensajes): Cuando los objetos llaman métodos de otros objetos en una larga cadena, lo que hace el código difícil de seguir.

Middle Man (Intermediario): Un objeto que solo pasa mensajes a otros objetos sin agregar funcionalidad significativa.

Incomplete Library Class (Clase de Biblioteca Incompleta): Usar una clase de biblioteca externa que no proporciona todas las funcionalidades necesarias, por lo que se tienen que añadir soluciones adicionales.

Técnicas de Refactorización

Composición de Métodos

Extract Method (Extraer Método): Extraer una parte del código en un nuevo método para mejorar la legibilidad y reutilización.

Inline Method (Insertar Método): Reemplazar una llamada a un método con el contenido de ese método si no añade valor.

Extract Variable (Extraer Variable): Reemplazar una expresión compleja por una variable intermedia para mejorar la legibilidad.

Inline Temp (Insertar Variable Temporal): Eliminar una variable temporal y usar la expresión directamente.

Replace Temp with Query (Reemplazar Variable Temporal con Consulta): Reemplazar una variable temporal que almacena el resultado de un cálculo con una consulta directa.

Split Temporary Variable (Dividir Variable Temporal): Dividir una variable temporal en varias para mejorar la claridad.

Remove Assignments to Parameters (Eliminar Asignaciones a Parámetros): Evitar modificar parámetros dentro de un método, ya que esto puede ser confuso.

Replace Method with Method Object (Reemplazar Método con Objeto Método): Reemplazar un método largo y complejo por un objeto que encapsule la lógica.

Substitute Algorithm (Sustituir Algoritmo): Cambiar un algoritmo ineficiente o complicado por uno más sencillo y claro.

Mover Funcionalidades entre Objetos

Move Method (Mover Método): Mover un método de una clase a otra cuando la clase de destino tiene más sentido para su ubicación.

Move Field (Mover Campo): Mover un campo de una clase a otra si el campo pertenece mejor a la clase de destino.

Extract Class (Extraer Clase): Crear una nueva clase cuando una clase tiene demasiada responsabilidad.

Inline Class (Insertar Clase): Combinar dos clases que no tienen suficiente diferencia en funcionalidad.

Hide Delegate (Ocultar Delegado): Ocultar las delegaciones internas de una clase para simplificar su interfaz.

Remove Middle Man (Eliminar Intermediario): Eliminar clases intermedias que no agregan valor.

Introduce Foreign Method (Introducir Método Extranjero): Introducir un método de otra clase en el objeto actual si es necesario.

Introduce Local Extension (Introducir Extensión Local): Crear una clase local que extienda una clase base para cubrir una funcionalidad específica.

Organización de Datos

Self Encapsulate Field (Autoencapsular Campo): Cambiar el acceso directo a los campos por métodos getter/setter.

Replace Data Value with Object (Reemplazar Valor de Datos con Objeto): Reemplazar valores simples con objetos si el valor tiene más significado.

Change Value to Reference (Cambiar Valor a Referencia): Cambiar un valor por una referencia cuando sea necesario compartir el mismo objeto entre varios lugares.

Change Reference to Value (Cambiar Referencia a Valor): Cambiar una referencia por un valor cuando se necesita un objeto independiente.

Replace Array with Object (Reemplazar Arreglo con Objeto): Usar objetos en lugar de arreglos cuando el comportamiento adicional sea necesario.

Duplicate Observed Data (Duplicar Datos Observados): Copiar los datos observados en lugar de hacer referencias, lo que ayuda a evitar problemas de sincronización.

Change Unidirectional Association to Bidirectional (Cambiar Asociación Unidireccional a Bidireccional): Cambiar una relación de solo lectura entre objetos a una relación más flexible.

Change Bidirectional Association to Unidirectional (Cambiar Asociación Bidireccional a Unidireccional): Cambiar una relación bidireccional innecesaria a una unidireccional.

Replace Magic Number with Symbolic Constant (Reemplazar Número Mágico con Constante Simbólica): Reemplazar valores numéricos fijos por constantes con nombres descriptivos.

Encapsulate Field (Encapsular Campo): Usar métodos getter/setter para acceder a los campos.

Encapsulate Collection (Encapsular Colección): Usar métodos para controlar el acceso a colecciones, evitando la modificación directa.

Replace Type Code with Class (Reemplazar Código de Tipo con Clase): Reemplazar códigos de tipo por una jerarquía de clases.

Replace Type Code with Subclasses (Reemplazar Código de Tipo con Subclases): Usar subclases en lugar de códigos de tipo para representar variaciones de comportamiento.

Replace Type Code with State/Strategy (Reemplazar Código de Tipo con Estado/Estrategia): Usar el patrón de diseño State o Strategy para manejar comportamientos diferentes según el tipo.

Replace Subclass with Fields (Reemplazar Subclase con Campos): Usar campos en lugar de subclases si las diferencias entre subclases son pequeñas.

Simplificación de Expresiones Condicionales

Decompose Conditional (Descomponer Condicional): Descomponer condicionales complejos en métodos más sencillos.

Consolidate Conditional Expression (Consolidar Expresión Condicional): Combinar condicionales similares en una sola expresión.

Consolidate Duplicate Conditional Fragments (Consolidar Fragmentos Condicionales Duplicados): Eliminar código duplicado dentro de un bloque condicional.

Remove Control Flag (Eliminar Bandera de Control): Eliminar banderas de control y reemplazarlas por mejores estructuras condicionales.

Replace Nested Conditional with Guard Clauses (Reemplazar Condicional Anidado con Cláusulas de Guardia): Simplificar condicionales anidados utilizando cláusulas de guardia.

Replace Conditional with Polymorphism (Reemplazar Condicional con Polimorfismo): Usar polimorfismo en lugar de condicionales para mejorar la flexibilidad del código.

Introduce Null Object (Introducir Objeto Nulo): Reemplazar verificaciones de null por un objeto nulo que implemente la interfaz.

Introduce Assertion (Introducir Aserción): Utilizar aserciones para verificar condiciones que deben ser verdaderas en el código.

Simplificación de Llamadas a Métodos

Rename Method (Renombrar Método): Cambiar el nombre de un método para hacerlo más descriptivo.

Add Parameter (Agregar Parámetro): Añadir parámetros a un método para mejorar su flexibilidad.

Remove Parameter (Eliminar Parámetro): Eliminar parámetros innecesarios para simplificar el método.

Separate Query from Modifier (Separar Consulta de Modificador): Separar métodos que modifican el estado de los objetos de aquellos que solo consultan el estado.

Parameterize Method (Parametrizar Método): Hacer un método más genérico añadiendo parámetros.

Introduce Parameter Object (Introducir Objeto Parámetro): Usar un objeto como parámetro en lugar de múltiples parámetros individuales.

Preserve Whole Object (Preservar Objeto Completo): Pasar el objeto completo a un método en lugar de solo algunos de sus atributos.

Remove Setting Method (Eliminar Método de Asignación): Eliminar métodos que asignan valores a atributos si no son necesarios.

Replace Parameter with Explicit Methods (Reemplazar Parámetro con Métodos Explícitos): Reemplazar un parámetro con un método específico que realice la misma tarea.

Replace Parameter with Method Call (Reemplazar Parámetro con Llamada a Método): Reemplazar un parámetro con la llamada a un método específico.

Hide Method (Ocultar Método): Cambiar la visibilidad de un método para que no esté disponible públicamente cuando no se necesita.

Replace Constructor with Factory Method (Reemplazar Constructor con Método de Fábrica): Utilizar métodos de fábrica en lugar de constructores para crear objetos, especialmente cuando la creación es compleja.

Replace Error Code with Exception (Reemplazar Código de Error con Excepción): Utilizar excepciones para manejar errores en lugar de códigos de error numéricos.

Replace Exception with Test (Reemplazar Excepción con Prueba): Reemplazar el uso de excepciones por pruebas de condiciones previas para evitar el uso excesivo de excepciones.

Manejo de Generalización

Pull Up Field (Extraer Campo): Mover un campo de una subclase a su superclase si es común a varias subclases.

Pull Up Method (Extraer Método): Mover un método de una subclase a la superclase si es común a varias subclases.

Pull Up Constructor Body (Extraer Cuerpo del Constructor): Mover el cuerpo de un constructor a la superclase cuando el comportamiento es común.

Push Down Field (Empujar Campo hacia Abajo): Mover un campo a una subclase cuando solo es relevante para ella.

Push Down Method (Empujar Método hacia Abajo): Mover un método a una subclase cuando solo es relevante para ella.

Extract Subclass (Extraer Subclase): Crear una nueva subclase cuando una clase tiene diferentes comportamientos para diferentes casos.

Extract Superclass (Extraer Superclase): Crear una superclase cuando varias subclases tienen comportamientos comunes.

Extract Interface (Extraer Interfaz): Crear una interfaz para compartir comportamientos comunes entre clases.

Collapse Hierarchy (Colapsar Jerarquía): Simplificar una jerarquía de clases eliminando clases intermedias innecesarias.