import { inputObjectType, mutationField, nonNull, objectType } from "nexus";
import { hashPassword } from "../../auth";

export const SignUpInput = inputObjectType({
  name: "SignUpInput",
  definition(t) {
    t.nonNull.email("email");
    t.nonNull.string("password");
  },
});

export const SignUpPayload = objectType({
  name: "SignUpPayload",
  definition(t) {
    t.field("user", { type: "User" });
  },
});

export const addUser = mutationField("signUp", {
  type: SignUpPayload.name,
  args: { input: nonNull(SignUpInput.asArg()) },
  async resolve(_src, { input }, ctx) {
    const { hash, salt } = hashPassword(input.password);
    const created = await ctx.db.user.create({
      data: { email: input.email, password: hash, salt },
    });

    return { user: created };
  },
});
