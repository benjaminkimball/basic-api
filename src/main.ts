import { prisma } from "./db";
import { createApolloServer } from "./graphql/server";
import { logger } from "./logger";

const host = process.env.API_HOST;
const port = parseInt(process.env.API_PORT || "4000");

createApolloServer({
  context: async (ctx) => ({ db: prisma, ...ctx }),
  listen: { host, port },
}).then(({ url }) => {
  logger.info(`Started server at ${url}`);
});
