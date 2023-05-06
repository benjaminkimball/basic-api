import type { User } from "@prisma/client";
import { pbkdf2Sync, randomBytes } from "crypto";

const digest = process.env.PWD_DIGEST || "sha512";
const interations = parseInt(process.env.PWD_HASH_ITERATIONS || "1000");
const keylen = parseInt(process.env.PWD_KEY_LENGTH || "64");

function hashSync(plaintext: string, salt: string): string {
  return pbkdf2Sync(plaintext, salt, interations, keylen, digest).toString(
    "hex"
  );
}

interface HashPasswordProps {
  hash: string;
  salt: string;
}

export function hashPassword(plaintext: string): HashPasswordProps {
  const salt = randomBytes(16).toString("hex");
  const hash = hashSync(plaintext, salt);

  return { hash, salt };
}

export function validatePassword(
  { password, salt }: User,
  plaintext: string
): boolean {
  return password === hashSync(plaintext, salt);
}
