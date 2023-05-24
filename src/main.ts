import { logger } from "./logger";
import { createHttpServer } from "./server";

const host = process.env.API_HOST || "localhost";
const port = parseInt(process.env.API_PORT || "4000");

createHttpServer()
  .then((server) => {
    server.listen(port, host, () => {
      logger.info(`API listening at http://${host}:${port}`);
    });
  })
  .catch(async (err) => {
    logger.error("Failed to start API!");
    logger.error(err);
    process.exit(1);
  });
