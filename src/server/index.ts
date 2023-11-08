import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { json } from "body-parser";
import express from "express";
import helmet from "helmet";
import { Server, createServer } from "http";
import pino from "pino-http";
import { prisma } from "../database";
import { createApolloServer } from "../graphql/server";
import { logger } from "../logger";

export async function createHttpServer(): Promise<Server> {
  const app = express();
  const httpServer = createServer(app);
  const apollo = createApolloServer({
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await apollo.start();

  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(json());
  app.use(pino({ logger }));

  app.use(
    "/graphql",
    expressMiddleware(apollo, {
      context: async (ctx) => ({ ...ctx, db: prisma }),
    }),
  );

  app.use("*", (_req, res) => {
    res.status(404).end("Not Found");
  });

  return httpServer;
}
