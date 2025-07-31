// api/graphql.ts
import { ApolloServer } from '@apollo/server';
import express from 'express';
import cors from 'cors';
import { expressMiddleware } from '@as-integrations/express5';
import { typeDefs } from '../src/schema';
import { resolvers } from '../src/resolvers';
import serverless from 'serverless-http';

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

const handler = async (req: Object, res: Object) => {
  await server.start();
  app.use(cors());
  app.use(express.json());
  app.use('/graphql', expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.authorization || '' })
  }));
  return serverless(app)(req, res);
};

export default handler;
