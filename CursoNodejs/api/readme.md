npm init -y

npm i express body-parser mongoose bcrypt dotenv jsonwebtoken @hapi/joi nodemon cors

configurar el dev y start en scripts

npm run dev


Crear los ssl/tls

openssl req -new -x509 -nodes -days 3650 -out server.crt -keyout server.key