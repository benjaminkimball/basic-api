import { ApolloServer, ContextFunction } from "@apollo/server";
import {
  StandaloneServerContextFunctionArgument,
  startStandaloneServer,
} from "@apollo/server/standalone";
import { ListenOptions } from "net";
import { Context } from "./context";
import { schema } from "./schema";

interface CreateApolloServerArgs {
  context: ContextFunction<[StandaloneServerContextFunctionArgument], Context>;
  listen: ListenOptions;
}

interface CreateApolloServerProps {
  server: ApolloServer<Context>;
  url: string;
}

export async function createApolloServer({
  context,
  listen,
}: CreateApolloServerArgs): Promise<CreateApolloServerProps> {
  const server = new ApolloServer<Context>({
    schema,
    status400ForVariableCoercionErrors: true,
  });

  const { url } = await startStandaloneServer(server, { context, listen });

  return { server, url };
}
