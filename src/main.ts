import { startStandaloneServer } from "@apollo/server/standalone";
import { prisma } from "./db/client";
import { server } from "./graphql/server";

const port = parseInt(process.env.API_PORT || "4000");

startStandaloneServer(server, {
  context: async (ctx) => ({ db: prisma, ...ctx }),
  listen: { port },
}).then(({ url }) => {
  console.info(`Started server at ${url}`);
});
