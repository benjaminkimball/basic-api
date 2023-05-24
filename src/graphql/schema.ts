import { connectionPlugin, makeSchema } from "nexus";
import { join } from "path";
import * as mutations from "./mutations";
import * as queries from "./queries";
import * as types from "./types";

const rootDir = process.cwd();

export const schema = makeSchema({
  types: [mutations, queries, types],
  contextType: {
    module: join(rootDir, "src/graphql/context.ts"),
    export: "Context",
    alias: "ctx",
  },
  sourceTypes: {
    modules: [{ module: ".prisma/client", alias: "PrismaClient" }],
  },
  outputs: {
    schema: join(rootDir, "generated/schema.graphql"),
    typegen: join(rootDir, "generated/graphql.d.ts"),
  },
  plugins: [
    connectionPlugin({
      extendConnection: {
        totalCount: { type: "Int", requireResolver: false },
      },
    }),
  ],
});
