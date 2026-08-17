const grpc = require('@grpc/grpc-js');
const loader = require('@grpc/proto-loader');
const mongoose = require('mongoose');
const { CrudService } = require('./crud-service');
const { connectDB } = require('./db')

const PROTO_PATH = __dirname + '/protofile.proto';

const packageDefinition = loader.loadSync(PROTO_PATH);
const myservice = grpc.loadPackageDefinition(packageDefinition).myservice;

connectDB()

const PORT = 50051;
const HOST = 'localhost';

const server = new grpc.Server();

server.addService(myservice.CrudService.service, {
    Create: CrudService.createItem,
    Read: CrudService.readItem,
    Update: CrudService.updateItem,
    Delete: CrudService.deleteItem,
    List: CrudService.listItems,
});

server.bindAsync(`${HOST}:${PORT}`, grpc.ServerCredentials.createInsecure(), () => {
    console.log(`Server running at ${HOST}:${PORT}`);
    server.start();
});
