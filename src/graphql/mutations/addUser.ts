import { inputObjectType, mutationField, nonNull, objectType } from "nexus";

export const AddUserInput = inputObjectType({
  name: "AddUserInput",
  definition(t) {
    t.nonNull.email("email");
  },
});

export const AddUserPayload = objectType({
  name: "AddUserPayload",
  definition(t) {
    t.field("user", { type: "User" });
  },
});

export const addUser = mutationField("addUser", {
  type: AddUserPayload.name,
  args: { input: nonNull(AddUserInput.asArg()) },
  async resolve(_src, { input }, ctx) {
    const created = await ctx.db.user.create({ data: { email: input.email } });

    return { user: created };
  },
});
