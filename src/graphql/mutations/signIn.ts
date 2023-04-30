import { inputObjectType, mutationField, nonNull, objectType } from "nexus";
import { validatePassword } from "../../auth";

export const SignInInput = inputObjectType({
  name: "SignInInput",
  definition(t) {
    t.nonNull.email("email");
    t.nonNull.string("password");
  },
});

export const SignInPayload = objectType({
  name: "SignInPayload",
  definition(t) {
    t.field("user", { type: "User" });
  },
});

export const signIn = mutationField("signIn", {
  type: SignInPayload.name,
  args: { input: nonNull(SignInInput.asArg()) },
  async resolve(_src, { input }, ctx) {
    const user = await ctx.db.user.findUnique({
      where: { email: input.email },
    });

    if (user && validatePassword(user, input.password)) {
      return { user };
    } else {
      return { user: null };
    }
  },
});
