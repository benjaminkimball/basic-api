import type { User } from "@prisma/client";
import { hashPassword, validatePassword } from ".";

describe("auth", () => {
  describe("hashPassword()", () => {
    it("returns hash and salt for provided plaintext", () => {
      const hexStringPattern = /^[0-9A-Fa-f]*$/;
      const plaintext = "Test1234!";

      const result = hashPassword(plaintext);

      expect(result.hash).toMatch(hexStringPattern);
      expect(result.salt).toMatch(hexStringPattern);
    });
  });

  describe("validatePassword()", () => {
    const plaintext = "Test1234!";

    let user: User;

    beforeAll(() => {
      const { hash: password, salt } = hashPassword(plaintext);

      user = {
        id: "clhc8ne29000008ju5zv60a7d",
        email: "test@test.com",
        password,
        salt,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    it("returns true for valid plaintext", () => {
      const result = validatePassword(user, plaintext);

      expect(result).toStrictEqual(true);
    });

    it("returns false for invalid plaintext", () => {
      const result = validatePassword(user, "Invalid1234!");

      expect(result).toStrictEqual(false);
    });
  });
});
