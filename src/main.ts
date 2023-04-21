import { prisma } from "./db/client";
import { createApolloServer } from "./graphql/server";

const port = parseInt(process.env.API_PORT || "4000");

createApolloServer({
  context: async (ctx) => ({ db: prisma, ...ctx }),
  listen: { port },
}).then(({ url }) => {
  console.info(`Started server at ${url}`);
});
