const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const { connectDB } = require('./db/index');
const { authenticate } = require('./middlewares/auth');

connectDB()
const app = express()

app.use(authenticate)

app.get('/', (req, res) => {
    res.send('welcome')
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(3000)
console.log('funcionando')
