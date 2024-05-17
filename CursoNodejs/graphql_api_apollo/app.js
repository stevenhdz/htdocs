const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');
const { connectDB } = require('./db');


const app = express()

connectDB()

app.get('/', (req, res) => res.send('welcome my api endpoint /graphql or https://studio.apollographql.com/sandbox/explorer'))

module.exports = app

async function start() {

    const apolloServer = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers
    })

    await apolloServer.start()

    apolloServer.applyMiddleware({ app: app })

    app.use('*', (req, res) => res.status(404).send('no found'))

    app.listen(3000, () => {
        console.log('server on port', 3000);
    })
}

start()