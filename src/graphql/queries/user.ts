import { idArg, nonNull, queryField } from "nexus";

export const user = queryField("user", {
  type: "User",
  args: { id: nonNull(idArg()) },
  resolve(_src, { id }, ctx) {
    return ctx.db.user.findUnique({ where: { id } });
  },
});
