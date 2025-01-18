```sh {"id":"01JCBASYB48KWDPATJZJ02N0PY"}
Scripts\activate
python app.py
```

Resumen de Interacción entre Capas
La capa de dominio define la lógica del negocio y no conoce los detalles de infraestructura.
La capa de aplicación coordina los casos de uso, manteniendo el flujo de datos y asegurando que las reglas de negocio se apliquen correctamente.
La capa de infraestructura implementa los puertos definidos en el dominio, conectando el sistema con servicios externos o recursos internos necesarios para que la aplicación funcione.

![Alt text](<Diagrama sin título.drawio.png>)