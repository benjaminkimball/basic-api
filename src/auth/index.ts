import { User } from "@prisma/client";
import { pbkdf2Sync, randomBytes } from "crypto";

interface HashPasswordProps {
  hash: string;
  salt: string;
}

export function hashPassword(password: string): HashPasswordProps {
  const salt = randomBytes(16).toString("hex");
  const hash = pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");

  return { hash, salt };
}

export function validatePassword(user: User, password: string): boolean {
  const hash = pbkdf2Sync(password, user.salt, 1000, 64, "sha512").toString(
    "hex"
  );

  return user.password === hash;
}
