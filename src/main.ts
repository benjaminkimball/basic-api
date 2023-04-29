import { prisma } from "./db/client";
import { createApolloServer } from "./graphql/server";
import { logger } from "./logger/logger";

const port = parseInt(process.env.API_PORT || "4000");

createApolloServer({
  context: async (ctx) => ({ db: prisma, ...ctx }),
  listen: { port },
}).then(({ url }) => {
  logger.info(`Started server at ${url}`);
});
