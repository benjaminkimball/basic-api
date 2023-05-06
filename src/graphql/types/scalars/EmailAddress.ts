import { GraphQLEmailAddress } from "graphql-scalars";
import { asNexusMethod } from "nexus";

export const EmailAddress = asNexusMethod(GraphQLEmailAddress, "email");
