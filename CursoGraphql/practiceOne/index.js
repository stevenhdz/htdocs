const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { v1: uuidv } = require('uuid');

const Person = [
    {
        name: "Juan",
        phone: "123456789",
        street: "Calle 123",
        city: "Ciudad A",
        id: "1",
        years: 19
    }, {
        name: "María",
        street: "Avenida XYZ",
        city: "Ciudad B",
        id: "2",
        years: 18
    }, {
        name: "María2",
        phone: "123456789",
        street: "Avenida XYZ",
        city: "Ciudad B",
        id: "3",
        years: 1
    }
]

const typeDefs = `
    type Address {
        street: String!,
        city: String!
    }

    type Person {
        name: String!,
        phone: String,
        address: Address!,
        years: Int!,
        value: String!,
        id: ID!
    }

    type Query {
        personCount: Int!
        allPersons: [Person]!
        findPerson(name: String!): Person
    }

    type Mutation {
        addPerson(
            name: String!
            phone: String
            address: String!
            city: String!
            years: Int!
        ): Person
    }
`

const resolvers = {
    Query: {
        personCount: () => Person.length,
        allPersons: () => Person,
        findPerson: (prev, args) => {
            const { name } = args
            return Person.find(person => person.name === name)
        }
    },
    Mutation: {
        addPerson: (prev, args) => {
            const person = { ...args, id: uuidv() }
            Person.push(person)
            return person
        }
    },
    //calcular cosas aca
    Person: {
        address: (root) => {
            return {
                street: root.street,
                city: root.city
            }
        },
        value: (root) => root.years < 18 ? 'menor' : root.years == 18 ? 'mayor' : 'anciano'
    }
}

async function start() {

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    })

    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });

    console.log(`🚀  Server ready at: ${url}`);
}

start()
