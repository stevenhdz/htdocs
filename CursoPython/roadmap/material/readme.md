# Protocolos de Red y Puertos Estándar

Este archivo proporciona una lista de protocolos comunes de red y los puertos que usan por convención. Se clasifican según su tipo de uso y su función principal en la comunicación de red.

## 1. Protocolos de Aplicación y sus Puertos

| **Protocolo**      | **Puerto(s)**       | **Descripción**                                                                 |
|---------------------|---------------------|---------------------------------------------------------------------------------|
| **HTTP**           | 80                 | Navegación web no segura.                                                      |
| **HTTPS**          | 443                | Navegación web segura mediante TLS/SSL.                                        |
| **FTP**            | 20, 21             | Transferencia de archivos (control: 21, datos: 20).                            |
| **FTPS**           | 990, 989           | FTP seguro mediante TLS/SSL.                                                   |
| **SFTP**           | 22                 | Transferencia segura de archivos sobre SSH.                                    |
| **SMTP**           | 25, 587, 465       | Envío de correos electrónicos (25 no seguro; 587 y 465 seguros).               |
| **IMAP**           | 143                | Gestión de correos electrónicos.                                               |
| **IMAP SSL**       | 993                | Gestión segura de correos electrónicos.                                        |
| **POP3**           | 110                | Descarga de correos electrónicos del servidor.                                 |
| **POP3 SSL**       | 995                | Descarga segura de correos electrónicos del servidor.                          |
| **DNS**            | 53                 | Resolución de nombres de dominio.                                              |
| **Telnet**         | 23                 | Conexión remota no segura.                                                     |
| **SSH**            | 22                 | Acceso remoto seguro.                                                          |
| **LDAP**           | 389, 636           | Directorio de usuarios (389 no seguro; 636 seguro).                            |
| **SNMP**           | 161, 162           | Gestión de redes (161: consultas, 162: alertas/traps).                         |
| **NTP**            | 123                | Sincronización de tiempo en dispositivos.                                      |
| **WebDAV**         | 80, 443, 2078      | Edición y gestión de archivos en servidores web.                               |
| **CalDAV**         | 80, 443, 8443      | Sincronización de calendarios (HTTP/HTTPS).                                    |
| **CardDAV**        | 80, 443, 8843      | Sincronización de contactos (HTTP/HTTPS).                                      |

## 2. Protocolos de Seguridad y sus Puertos

| **Protocolo**      | **Puerto(s)**       | **Descripción**                                                                 |
|---------------------|---------------------|---------------------------------------------------------------------------------|
| **TLS/SSL**        | Variable            | Usado para conexiones seguras (HTTPS, FTPS, SMTPS).                            |
| **IPSec**          | 500, 4500          | Protocolo de seguridad para redes.                                             |
| **Kerberos**       | 88                 | Protocolo de autenticación.                                                    |
| **OAuth**          | No definido        | Depende de la aplicación o servicio.                                           |

## 3. Protocolos de Almacenamiento y Compartición

| **Protocolo**      | **Puerto(s)**       | **Descripción**                                                                 |
|---------------------|---------------------|---------------------------------------------------------------------------------|
| **NFS**            | 2049               | Intercambio de ficheros en red.                                                |
| **SMB/CIFS**       | 445                | Compartición de archivos en redes Windows.                                     |
| **AFP**            | 548                | Compartición de archivos en redes Apple.                                       |

## 4. Protocolos de Voz y Video

| **Protocolo**      | **Puerto(s)**       | **Descripción**                                                                 |
|---------------------|---------------------|---------------------------------------------------------------------------------|
| **SIP**            | 5060, 5061         | Protocolo para telefonía IP (5061 seguro).                                     |
| **RTP**            | Variable (16384+)  | Transmisión de datos multimedia en tiempo real.                                |
| **RTSP**           | 554                | Control de transmisión de video/audio.                                         |

## 5. Protocolos de VPN

| **Protocolo**      | **Puerto(s)**       | **Descripción**                                                                 |
|---------------------|---------------------|---------------------------------------------------------------------------------|
| **PPTP**           | 1723               | Protocolo de túnel punto a punto.                                              |
| **L2TP**           | 1701, 500, 4500    | Protocolo de túnel de capa 2 (usa IPSec).                                      |
| **OpenVPN**        | 1194 (por defecto) | Redes privadas virtuales.                                                      |
| **IKEv2**          | 500, 4500          | Protocolo moderno para VPNs.                                                   |

## 6. Protocolos de Enrutamiento

| **Protocolo**      | **Puerto(s)**       | **Descripción**                                                                 |
|---------------------|---------------------|---------------------------------------------------------------------------------|
| **OSPF**           | 89                 | Enrutamiento interno.                                                          |
| **BGP**            | 179                | Enrutamiento entre grandes redes (Internet).                                   |
| **RIP**            | 520                | Protocolo de enrutamiento simple y antiguo.                                    |

## 7. Puertos Registrados y Dinámicos

| **Rango de Puertos**     | **Descripción**                                                                 |
|--------------------------|---------------------------------------------------------------------------------|
| **Puertos 0-1023**       | **Puertos Bien Conocidos**: Reservados para protocolos estándar y servicios.    |
| **Puertos 1024-49151**   | **Puertos Registrados**: Asignados a servicios que requieren un registro.       |
| **Puertos 49152-65535**  | **Puertos Dinámicos/Privados**: Usados para conexiones temporales y asignaciones dinámicas. |

## Ejemplos de Puertos Registrados

| **Protocolo**      | **Puerto(s)**       | **Descripción**                                                                 |
|---------------------|---------------------|---------------------------------------------------------------------------------|
| **MySQL**          | 3306               | Puerto para bases de datos MySQL.                                              |
| **PostgreSQL**     | 5432               | Puerto para bases de datos PostgreSQL.                                         |
| **Microsoft SQL**  | 1433, 1434         | Puerto para Microsoft SQL Server.                                              |
| **Oracle DB**      | 1521               | Puerto para Oracle Database.                                                   |
| **VNC**            | 5900               | Puerto usado por VNC (Virtual Network Computing).                               |
| **Minecraft**      | 25565              | Puerto usado por el juego Minecraft.                                           |

## 8. Puertos Comunes para Software

| **Protocolo**      | **Puerto(s)**       | **Descripción**                                                                 |
|---------------------|---------------------|---------------------------------------------------------------------------------|
| **eMule**          | 4662 (TCP), 4672 (UDP) | Protocolo usado por eMule para intercambio de archivos.                         |
| **Radmin**         | 4899               | Puerto usado por el software Radmin para control remoto.                        |
| **Xbox Live**      | 3074               | Puerto usado para juegos en línea de Microsoft Xbox Live.                      |

## Notas

- Los puertos de 0 a 1023 son conocidos como **puertos bien conocidos** y están reservados para los protocolos estándar.
- Los puertos de 1024 a 49151 son **puertos registrados**, generalmente asignados a aplicaciones específicas.
- Los puertos de 49152 a 65535 son **puertos dinámicos/privados**, utilizados para conexiones temporales y asignados automáticamente.

## Cómo Usar los Protocolos

1. **Configuración de Firewall:** Asegúrate de abrir los puertos relevantes para permitir que los protocolos funcionen correctamente en tu red.
2. **Desarrollo de Aplicaciones:** Al programar aplicaciones que se comuniquen a través de estos protocolos, verifica qué puerto utiliza cada uno de ellos.
3. **Redes Seguras:** Utiliza versiones seguras de los protocolos (como HTTPS en lugar de HTTP) para asegurar la privacidad y la integridad de los datos.

---

¡Con esto tienes una referencia completa sobre los protocolos de red y sus puertos estándar! Si necesitas más detalles o ejemplos de código, no dudes en preguntar. 😊