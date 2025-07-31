import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";


async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  // Middlewares
  app.use(cors());
  app.use(express.json()); // Built-in body parser (no body-parser needed)

  // Apollo middleware on /graphql
  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: async ({ req }) => {
        // Extract your token from headers here
        const token = req.headers.authorization || "";
        // const isValid = verifyToken(token);
        // Return any context you want accessible in resolvers
        return { token };
      },
    })
  );

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  });
}
startServer().catch((err) => {
  console.error("Server failed to start", err);
});
