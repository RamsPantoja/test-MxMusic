import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './data/schema';
import { resolvers }  from './data/resolvers';


const app = express();

const server = new ApolloServer({typeDefs, resolvers});

server.applyMiddleware({app});


app.listen({port:8200}, () => console.log(`🚀 Server is running http://localhost:8200${server.graphqlPath}`));
