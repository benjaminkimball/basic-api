import { PrismaClient } from "@prisma/client";
import { IncomingMessage, ServerResponse } from "http";

export interface Context {
  db: PrismaClient;
  req: IncomingMessage;
  res: ServerResponse;
}
