import type { PrismaClient } from "@prisma/client";
import type { IncomingMessage, ServerResponse } from "http";

export interface Context {
  db: PrismaClient;
  req: IncomingMessage;
  res: ServerResponse;
}
