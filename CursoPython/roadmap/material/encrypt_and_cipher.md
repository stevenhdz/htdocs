# Tipos de Encriptación y Cifrado

Este documento describe los **tipos de cifrado** y **encriptación** más utilizados en el desarrollo y la seguridad informática. Se organiza en categorías según el tipo de algoritmo y sus aplicaciones.

## 1. Cifrado Simétrico (Clave Secreta)

El **cifrado simétrico** utiliza una **única clave** tanto para cifrar como para descifrar los datos. Es eficiente pero presenta el reto de compartir la clave de forma segura.

| Algoritmo   | Descripción                                                        | Tamaño de Clave         | Aplicaciones Comunes                                     |
|-------------|--------------------------------------------------------------------|-------------------------|----------------------------------------------------------|
| **AES**     | Cifrado de bloque estándar utilizado ampliamente.                   | 128, 192, 256 bits      | Cifrado de datos, comunicaciones seguras, almacenamiento. |
| **DES**     | Algoritmo antiguo con alta vulnerabilidad.                         | 56 bits                 | Antiguamente usado en sistemas de cifrado bancario.       |
| **3DES**    | Versión mejorada de DES, aplica DES tres veces.                    | 168 bits                | Reemplazo de DES en aplicaciones antiguas.                |
| **RC4**     | Algoritmo de flujo con clave variable, rápido pero vulnerable.      | Variable                | Protocolos antiguos como SSL, WEP.                        |
| **Blowfish**| Cifrado de bloque con una clave variable.                          | 32 a 448 bits           | Cifrado de archivos, VPN.                                |
| **Twofish** | Mejorado de Blowfish, más seguro y rápido.                         | 128, 192, 256 bits      | Cifrado de archivos y almacenamiento seguro.             |

---

## 2. Cifrado Asimétrico (Clave Pública y Privada)

El **cifrado asimétrico** usa un **par de claves**: una **clave pública** para cifrar y una **clave privada** para descifrar. Se utiliza principalmente para el intercambio seguro de claves y firmas digitales.

| Algoritmo   | Descripción                                                        | Tamaño de Clave         | Aplicaciones Comunes                                    |
|-------------|--------------------------------------------------------------------|-------------------------|---------------------------------------------------------|
| **RSA**     | Cifrado basado en la factorización de números grandes.             | 512 a 4096 bits         | Firmas digitales, TLS, comunicaciones seguras.           |
| **ECC**     | Usando curvas elípticas, más eficiente y rápido que RSA.            | 160 a 521 bits          | Firmas digitales, protocolos de seguridad como SSL/TLS.  |
| **DSA**     | Protocolo para firmar mensajes de forma segura.                    | 1024 bits (recomendado) | Firmas digitales y autenticación.                        |
| **ElGamal** | Basado en el problema del logaritmo discreto, usado para cifrado y firmas. | 1024 bits (comúnmente)  | PGP, intercambio de claves.                              |

---

## 3. Cifrado de Hash (Funciones de Hashing)

Las funciones de **hashing** son algoritmos unidireccionales que generan una representación única (hash) de los datos de entrada.

| Algoritmo   | Descripción                                                        | Tamaño del Hash         | Aplicaciones Comunes                                     |
|-------------|--------------------------------------------------------------------|-------------------------|----------------------------------------------------------|
| **MD5**     | Genera un valor hash de 128 bits, muy rápido pero obsoleto por vulnerabilidades. | 128 bits                | Verificación de integridad, pero no recomendado para seguridad. |
| **SHA-1**   | Genera un hash de 160 bits, vulnerable a colisiones.               | 160 bits                | Firmas digitales, pero ya no se recomienda para aplicaciones seguras. |
| **SHA-256** | Parte de la familia SHA-2, genera un hash de 256 bits, más seguro. | 256 bits                | Certificados digitales, hashing de contraseñas, blockchain. |
| **SHA-512** | Similar a SHA-256 pero con un hash de 512 bits.                    | 512 bits                | Seguridad avanzada en aplicaciones críticas.              |
| **BLAKE2**  | Más rápido que SHA-256 y SHA-3 con alta seguridad.                 | 256 o 512 bits          | Hashing rápido y seguro en aplicaciones de alto rendimiento. |

---

## 4. Cifrado de Contraseñas (Salting y Key Derivation)

El cifrado de contraseñas utiliza técnicas como el **salting** y el **derivado de claves** para almacenar contraseñas de manera segura y resistente a ataques de fuerza bruta.

| Algoritmo   | Descripción                                                        | Aplicaciones Comunes                                      |
|-------------|--------------------------------------------------------------------|-----------------------------------------------------------|
| **bcrypt**  | Algoritmo de derivación de clave lento y seguro con sal.           | Almacenamiento de contraseñas en sistemas web.             |
| **scrypt**  | Similar a bcrypt pero más resistente a ataques con hardware.       | Almacenamiento de contraseñas y protección en sistemas sensibles. |
| **PBKDF2**  | Función de derivación de clave basada en un número alto de iteraciones. | Protección de contraseñas en sistemas seguros.             |

---

## 5. Cifrado Avanzado

El **cifrado avanzado** incluye técnicas de vanguardia que están emergiendo y buscando mejorar la seguridad en aplicaciones más complejas.

| Algoritmo             | Descripción                                                        | Aplicaciones Comunes                                           |
|-----------------------|--------------------------------------------------------------------|----------------------------------------------------------------|
| **Homomorphic Encryption** | Permite realizar operaciones sobre datos cifrados sin descifrar.   | Computación en la nube, protección de datos sensibles.         |
| **Quantum Cryptography**  | Utiliza principios cuánticos para hacer que cualquier intento de interceptar datos sea detectable. | Comunicación segura a prueba de computadoras cuánticas.        |

---

## 6. Protocolos de Seguridad

Los **protocolos de seguridad** son estándares que utilizan técnicas de cifrado para proteger las comunicaciones entre sistemas.

| Protocolo           | Descripción                                                        | Aplicaciones Comunes                                         |
|---------------------|--------------------------------------------------------------------|--------------------------------------------------------------|
| **SSL/TLS**         | Protocolo que asegura la comunicación en redes, como la web.      | HTTPS, correo electrónico seguro, VPN.                       |
| **IPSec**           | Protocolo para asegurar comunicaciones en redes IP mediante cifrado. | Redes privadas, conexiones VPN.                              |
| **VPN**             | Crea una red privada segura sobre redes públicas.                 | Navegación segura, acceso remoto a redes corporativas.        |

---

## Resumen de Métodos de Cifrado y Encriptación

| Tipo de Cifrado          | Descripción                                                       | Ejemplos de Algoritmos                            |
|--------------------------|-------------------------------------------------------------------|---------------------------------------------------|
| **Cifrado Simétrico**     | Usa la misma clave para cifrar y descifrar.                       | AES, DES, 3DES, RC4, Blowfish, Twofish           |
| **Cifrado Asimétrico**    | Usa un par de claves (pública y privada).                         | RSA, ECC, ElGamal, DSA                          |
| **Hashing**               | Función unidireccional que genera un resumen fijo.                | MD5, SHA-1, SHA-256, BLAKE2                      |
| **Cifrado de Contraseñas**| Técnicas para almacenar contraseñas de manera segura.           | bcrypt, scrypt, PBKDF2                          |
| **Cifrado Avanzado**      | Técnicas emergentes como cifrado homomórfico y cuántico.          | Homomorphic Encryption, Quantum Cryptography     |
| **Protocolos de Seguridad** | Establece normas para proteger la comunicación en redes.        | SSL/TLS, IPSec, VPN                              |

---

## Conclusión

El **cifrado** y la **encriptación** son técnicas clave para la seguridad en la informática. Dependiendo de las necesidades de tu aplicación (protección de contraseñas, comunicaciones seguras, almacenamiento de datos sensibles), debes elegir el algoritmo adecuado. Mantente actualizado con los avances en criptografía para poder implementar soluciones seguras y eficientes.