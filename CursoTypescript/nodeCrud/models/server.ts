import express, { Application } from 'express'
import cors from 'cors';
import useRoutes from '../routes/usuario';

interface PathConfig {
    usuarios: string;
    /*  roles: string */
}

class Server {

    private app: Application;
    private port: string;
    private paths: PathConfig = {
        usuarios: '/api/usuarios',
        /* roles: '/api/roles', */
    }

    constructor() {
        this.app = express()
        this.port = process.env.PORT || '8000'
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(cors({
            origin: '*'
        }))

        this.app.use(express.json())

        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.paths.usuarios, useRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(this.port)
        })
    }
}

export default Server