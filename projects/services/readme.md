**Install**

npm init -y

npm i express mongoose bcrypt dotenv @hapi/joi nodemon cors fs https method-override morgan axios colors

**Start API:**

 -> npm run dev

**Crear los ssl/tls**

  *  openssl genrsa -out key.pem
 
  *  openssl req -new -key key.pem -out csr.pem
  
  *  openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem