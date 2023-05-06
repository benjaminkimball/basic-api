import { queryField } from "nexus";

export const ok = queryField("ok", {
  type: "Boolean",
  resolve() {
    return true;
  },
});
