import { mergeResolvers } from "@graphql-tools/merge";
import { productResolvers } from "./product";
import { bookResolvers } from "./book";
import { baseResolver } from "./base";
import { userResolvers } from "./user";

export const resolvers = mergeResolvers([
  baseResolver,
  productResolvers,
  bookResolvers,
  userResolvers,
]);

export default resolvers;
