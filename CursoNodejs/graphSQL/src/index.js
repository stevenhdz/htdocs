//nodejs
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const database = require('./database');

//ECMAScript 2021 thanks babel compila
import schema from "./schema"

const app = express()

app.get('/', (req, res) => {
    res.json({
        message: "hello world"
    })
})

//endpoints
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
        messageId: 'test'
    }
}));

app.listen(3000, () => console.log('Server port on listen 3000'))