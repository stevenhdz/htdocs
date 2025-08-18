# MODULO C4 - ARQUITECTURA SOFTWARE

## **C1**

![alt text](image.png)

## **C2**

![alt text](image-1.png)

## **C3**

![alt text](image-2.png)

## **C4**

![alt text](image-3.png)


test: https://editor.plantuml.com/


# 📌 Objetivos del Modelo C4

## **C1 — Contexto**
- **Objetivo:** Mostrar el **alcance del sistema** y sus **interacciones externas** (usuarios, otros sistemas, servicios externos).  
- **Enfocado en:** Audiencias no técnicas, interesados de negocio, visión general.  
- **Pregunta que responde:** *¿Qué es el sistema y con quién se comunica?*  

---

## **C2 — Contenedores**
- **Objetivo:** Representar las **grandes piezas de software** que componen el sistema (apps, bases de datos, servicios, frontends) y cómo colaboran.  
- **Enfocado en:** Arquitectos y desarrolladores para entender dónde vive cada parte.  
- **Pregunta que responde:** *¿De qué está hecho el sistema y dónde corre cada parte?*  

---

## **C3 — Componentes**
- **Objetivo:** Detallar los **componentes internos de cada contenedor**, mostrando responsabilidades principales y cómo se relacionan.  
- **Enfocado en:** Equipos de desarrollo para organizar código y responsabilidades.  
- **Pregunta que responde:** *¿Cómo está organizado internamente cada contenedor?*  

---

## **C4 — Código**
- **Objetivo:** Mostrar la **implementación detallada** de los componentes, incluyendo clases, interfaces, métodos y relaciones.  
- **Enfocado en:** Desarrolladores que necesitan comprender el diseño a nivel de código.  
- **Pregunta que responde:** *¿Cómo se implementa en código cada componente del sistema?*  

---

## ✅ Resumen rápido
- **C1:** visión general (*qué es el sistema*).  
- **C2:** visión técnica de alto nivel (*qué piezas lo componen*).  
- **C3:** visión de diseño (*cómo se organizan las piezas internas*).  
- **C4:** visión de implementación (*cómo se escribe en código*).  


## 📌 Relación C3/C4 con la estructura de carpetas

- **C3:** → blueprint de carpetas.
- **C4:** → código dentro de esas carpetas.