const { ApolloServer, gql } = require("apollo-server");
const typeDefs = gql`
  type Query {
    hello(msg: String): String
  }
`;
const resolvers = {
  Query: {
    hello: (root, args, ctx) => {
      return "Hello World!" + (args.msg ? ` ${args.msg}` : "");
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});

/* run this in terminal to test

$ curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "{ hello }" }' \
  http://localhost:4000/graphql
*/
