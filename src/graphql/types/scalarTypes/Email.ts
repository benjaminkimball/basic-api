import { GraphQLEmailAddress } from "graphql-scalars";
import { asNexusMethod } from "nexus";

export const Email = asNexusMethod(GraphQLEmailAddress, "email");
