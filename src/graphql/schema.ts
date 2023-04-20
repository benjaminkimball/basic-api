import { connectionPlugin, makeSchema } from "nexus";
import { join } from "path";
import * as mutations from "./mutations";
import * as queries from "./queries";
import * as types from "./types";

export const schema = makeSchema({
  types: [mutations, queries, types],
  contextType: {
    module: join(process.cwd(), "src/graphql/context.ts"),
    export: "Context",
    alias: "ctx",
  },
  sourceTypes: {
    modules: [
      {
        module: join(process.cwd(), "src/graphql/sourceTypes/db.ts"),
        alias: "db",
      },
    ],
  },
  outputs: {
    schema: join(process.cwd(), "generated/schema.graphql"),
    typegen: join(process.cwd(), "generated/graphql.d.ts"),
  },
  plugins: [
    connectionPlugin({
      extendConnection: {
        totalCount: { type: "Int", requireResolver: false },
      },
    }),
  ],
});
