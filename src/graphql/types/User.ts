import { objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.id("id");

    t.email("email");

    t.datetime("createdAt");
    t.datetime("updatedAt");
  },
});
