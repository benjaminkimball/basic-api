import { validateSchema } from "graphql";
import { schema } from "../src/graphql/schema";

function generateGraphQLTypes() {
  const errors = validateSchema(schema);

  if (errors.length > 0) {
    console.error("Failed to generate GraphQL types!");
    console.error(errors);
    process.exit(1);
  }
}

generateGraphQLTypes();
