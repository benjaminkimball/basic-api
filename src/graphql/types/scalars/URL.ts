import { GraphQLURL } from "graphql-scalars";
import { asNexusMethod } from "nexus";

export const URL = asNexusMethod(GraphQLURL, "url");
