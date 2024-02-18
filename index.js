const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({url}) =>  {
    console.log(`RUNNING ${url}`)
}
)


// curl --request POST \
//   --header 'content-type: application/json' \
//   --url http://localhost:4000/ \
//   --data '{"query":"query { __typename }"}'