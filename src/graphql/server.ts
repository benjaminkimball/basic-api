import { ApolloServer, ApolloServerPlugin } from "@apollo/server";
import { Context } from "./context";
import { schema } from "./schema";

interface CreateApolloServerArgs {
  plugins?: ApolloServerPlugin[];
}

export function createApolloServer({
  plugins,
}: CreateApolloServerArgs = {}): ApolloServer<Context> {
  const server = new ApolloServer<Context>({
    plugins,
    schema,
    status400ForVariableCoercionErrors: true,
  });

  return server;
}
