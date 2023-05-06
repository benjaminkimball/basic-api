import { parsePrefixedId, typePrefixes } from "./prefixes";

describe("prefixs", () => {
  describe("parsePrefixedId()", () => {
    it("returns parsed prefix and id", () => {
      const prefixedId = ["usr", "clhccan0l000008ldbp03bxzq"].join("_");

      const result = parsePrefixedId(prefixedId);

      expect(result.prefix).toStrictEqual(typePrefixes.User);
      expect(result.id).toStrictEqual("clhccan0l000008ldbp03bxzq");
    });

    it("throws for unknown prefixes", () => {
      const prefixedId = ["foo", "clhccan0l000008ldbp03bxzq"].join("_");

      expect(() => {
        parsePrefixedId(prefixedId);
      }).toThrow("Unknown type prefix");
    });
  });
});
