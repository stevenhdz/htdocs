npm init -y

npm i express body-parser mongoose bcrypt dotenv jsonwebtoken @hapi/joi nodemon cors

configurar el dev y start en scripts

npm run dev

Crear los ssl/tls

openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem

Doc apis : https://documenter.getpostman.com/view/6282494/UVeCQTxn