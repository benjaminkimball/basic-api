import { idArg, nonNull, queryField } from "nexus";

enum TypePrefix {
  User = "usr",
}

export const node = queryField("node", {
  type: "Node",
  args: { id: nonNull(idArg()) },
  resolve(_src, { id: nodeId }, ctx) {
    const [prefix, id] = nodeId.split("_");

    switch (prefix) {
      case TypePrefix.User: {
        return ctx.db.user.findUnique({ where: { id } });
      }

      default: {
        return null;
      }
    }
  },
});
