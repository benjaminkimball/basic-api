import { GraphQLTimeZone } from "graphql-scalars";
import { asNexusMethod } from "nexus";

export const TimeZone = asNexusMethod(GraphQLTimeZone, "timeZone");
