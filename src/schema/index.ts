import path from "path";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";

import { baseTypeDefs } from "./base";
import { bookTypeDefs } from "./book";
import { productTypeDefs } from "./product";

const srcDir = path.join(__dirname, "..");
const graphqlTypeDefs = loadFilesSync(path.join(srcDir, "graphql", "**", "*.graphql"));

export const typeDefs = mergeTypeDefs([
  baseTypeDefs,
  productTypeDefs,
  bookTypeDefs,
  ...graphqlTypeDefs,  // <-- spread here
]);

export default typeDefs;
