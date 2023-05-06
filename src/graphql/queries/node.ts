import { idArg, nonNull, queryField } from "nexus";
import { parsePrefixedId, typePrefixes } from "../utils/prefixes";

export const node = queryField("node", {
  type: "Node",
  args: { id: nonNull(idArg()) },
  resolve(_src, input, ctx) {
    const { prefix, id } = parsePrefixedId(input.id);

    switch (prefix) {
      case typePrefixes.User: {
        return ctx.db.user.findUnique({ where: { id } });
      }

      default: {
        return null;
      }
    }
  },
});
