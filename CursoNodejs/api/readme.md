**Install**

npm init -y

npm i express mongoose bcrypt dotenv jsonwebtoken @hapi/joi nodemon cors fs https method-override morgan axios colors

**Start API:**

 -> npm run dev

**Crear los ssl/tls**

  *  openssl genrsa -out key.pem
 
  *  openssl req -new -key key.pem -out csr.pem
  
  *  openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem

**Doc apis** 

        https://documenter.getpostman.com/view/6282494/UVeCQTxn

**Testing**

  - Script 
        
            wrk -t12 -c1000 -d1s https://localhost:3001/api/admin

            Running 1s test @ https://localhost:3001/api/admin
            1 threads and 1000 connections
            Thread Stats   Avg      Stdev     Max   +/- Stdev
                Latency    47.82ms   20.74ms 162.24ms   93.78%
                Req/Sec     4.46k     2.41k    6.19k    80.00%
                4437 requests in 1.02s, 1.29MB read
            Socket errors: connect 750, read 0, write 0, timeout 0
            Non-2xx or 3xx responses: 4437
                Requests/sec:   4349.31
                Transfer/sec:      1.26MB