import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { queryField } from "nexus";

export const users = queryField((t) => {
  t.connectionField("users", {
    type: "User",
    resolve(_root, args, ctx) {
      return findManyCursorConnection(
        (args) => ctx.db.user.findMany({ ...args }),
        () => ctx.db.user.count(),
        args,
      );
    },
  });
});
