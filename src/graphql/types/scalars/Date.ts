import { GraphQLDate } from "graphql-scalars";
import { asNexusMethod } from "nexus";

export const Date = asNexusMethod(GraphQLDate, "date");
