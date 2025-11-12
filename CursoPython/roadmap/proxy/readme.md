Resumen r�pido

Forward proxy (proxy directo): El cliente configura el proxy. El proxy sale a internet en nombre del cliente (oculta al cliente).

Reverse proxy (proxy inverso): El cliente env�a peticiones al proxy p�blico. El proxy distribuye/reenv�a a uno o varios backends internos (oculta/gestiona servidores, balancea, termina TLS, cachea).

![alt text](image.png)

Flow — Forward Proxy (cliente usa proxy para acceder a Internet)

```mermaid
flowchart LR
  A[Cliente] -->|configura -x proxy:puerto| B[Forward Proxy]
  B -->|request http-s hacia| C[Servidor en Internet]
  C -->|response| B
  B -->|response| A
  subgraph notas
    N1[El servidor ve la IP del Proxy, no la del Cliente]
  end
```

Flow — Reverse Proxy (cliente golpea proxy público y este usa los backends)

```mermaid
flowchart LR
  A[Cliente] -->|req a proxy p�blico| B[Reverse Proxy]
  B -->|reenv�a a| C1[Backend 1]
  B -->|reenv�a a| C2[Backend 2]
  C1 -->|resp| B
  C2 -->|resp| B
  B -->|resp al cliente| A
  subgraph notas2
    N2[Reverse Proxy puede: balancear, cachear, terminar TLS, rate-limit]
  end
```

Secuencia simplificada (Reverse Proxy)

```mermaid
sequenceDiagram
  participant Client
  participant ReverseProxy
  participant Backend
  Client->>ReverseProxy: GET /api/users
  ReverseProxy->>Backend: GET /api/users
  Backend-->>ReverseProxy: 200 + JSON
  ReverseProxy-->>Client: 200 + JSON
```

Secuencia simplificada (Forward Proxy)

```mermaid
sequenceDiagram
  participant Cliente
  participant ForwardProxy
  participant ServidorRemoto
  Cliente->>ForwardProxy: GET http://httpbin.org/ip
  ForwardProxy->>ServidorRemoto: GET http://httpbin.org/ip
  ServidorRemoto-->>ForwardProxy: 200 OK + body
  ForwardProxy-->>Cliente: 200 OK + body
```

| Caso                                      | Usa Forward Proxy        | Usa Reverse Proxy |
|-------------------------------------------|--------------------------|-------------------|
| Controlar navegación de usuarios          | ✅                       | ❌                |
| Filtrar/registrar salidas a Internet      | ✅                       | ❌                |
| Anonimizar IP del cliente                 | ✅                       | ❌                |
| Balancear carga entre backends            | ❌                       | ✅                |
| Terminar TLS / certificado                | ❌                       | ✅                |
| Cache en el borde de la app               | ❌                       | ✅                |
| Inspección para debugging (mitm)          | ✅ (mitmproxy)           | ❌                |
