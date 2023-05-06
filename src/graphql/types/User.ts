import { objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.implements("Node");
    t.id("id", {
      resolve({ id }) {
        return `usr_${id}`;
      },
    });
    t.email("email");
  },
  isTypeOf({ email, password }) {
    return Boolean(email) && Boolean(password);
  },
});
