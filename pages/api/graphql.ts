import { ApolloServer, gql } from "apollo-server-micro";
import { PageConfig } from "next";
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"
import Cors from "micro-cors";
const cors = Cors();

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

const typeDefs = gql`
    type Query{
        hello: String!
    }
`;

const resolvers = {
    Query:{
        hello: () => "World!"
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    plugins:[ApolloServerPluginLandingPageGraphQLPlayground()]
})

const startServer = server.start(); // Always start outside the function!!

export default cors(async(req, res) =>{
    await startServer;
    await server.createHandler({
        path: "/api/graphql",
    })(req, res);
})