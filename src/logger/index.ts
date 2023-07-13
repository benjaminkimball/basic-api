import type { SerializerFn } from "pino";
import { pino } from "pino";

const level = process.env.LOG_LEVEL || "info";

export const logger = pino({ level });

export const serializers: { [key: string]: SerializerFn } = {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  req: ({ headers, ...req }) => req,
  res: ({ headers, ...res }) => res,
  /* eslint-enable @typescript-eslint/no-unused-vars */
};
