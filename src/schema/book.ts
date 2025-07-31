import gql from "graphql-tag";

export const bookTypeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  extend type Query {
    books: [Book]
    book(id: ID!): Book
  }

  extend type Mutation {
    addBook(title: String!, author: String!): Book
  }
`;
export default bookTypeDefs;
