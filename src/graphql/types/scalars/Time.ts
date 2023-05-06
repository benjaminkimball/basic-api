import { GraphQLTime } from "graphql-scalars";
import { asNexusMethod } from "nexus";

export const Time = asNexusMethod(GraphQLTime, "time");
