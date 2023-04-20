import { connectionPlugin, makeSchema } from "nexus";
import { join } from "path";
import * as mutations from "./mutations";
import * as queries from "./queries";
import * as types from "./types";

export const schema = makeSchema({
  types: [mutations, queries, types],
  contextType: {
    module: join(__dirname, "context.ts"),
    export: "Context",
    alias: "ctx",
  },
  sourceTypes: {
    modules: [{ module: ".prisma/client", alias: "PrismaClient" }],
  },
  outputs: {
    schema: join(__dirname, "../../generated/schema.graphql"),
    typegen: join(__dirname, "../../generated/graphql.d.ts"),
  },
  plugins: [
    connectionPlugin({
      extendConnection: {
        totalCount: { type: "Int", requireResolver: false },
      },
    }),
  ],
});
