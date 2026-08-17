# vue3_project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production netlify o github

```sh
npm run build

copiar carpeta dist y pegarla en https://app.netlify.com/drop
```




### Compile and Minify for Production docker y heroku

```sh
terminal
mkdir .dockerignore
mkdir Dockerfile
configurar ambos
docker build -t vue-app .
docker images
docker run -d -p 5001:8080 vue-app


http://localhost:5001



Crear app prueba en heroku

Install the Heroku CLI
Download and install the Heroku CLI.

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

$ heroku login
Log in to Container Registry
You must have Docker set up locally to continue. You should see output when you run this command.

$ docker ps
Now you can sign into Container Registry.

$ heroku container:login
Push your Docker-based app
Build the Dockerfile in the current directory and push the Docker image.

$ heroku container:push web -a prueba
Deploy the changes
Release the newly pushed images to deploy your app.

$ heroku container:release web -a prueba

https://prueba.herokuapp.com/
```