import { idArg, nonNull, queryField } from "nexus";
import { parsePrefixedId } from "../utils/prefixes";

export const user = queryField("user", {
  type: "User",
  args: { id: nonNull(idArg()) },
  resolve(_src, input, ctx) {
    const { id } = parsePrefixedId(input.id);

    return ctx.db.user.findUnique({ where: { id } });
  },
});
