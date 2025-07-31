import gql from "graphql-tag";

export const productTypeDefs = gql`
  type Dimensions {
    width: Float
    height: Float
    depth: Float
  }

  type Review {
    rating: Int
    comment: String
    date: String
    reviewerName: String
    reviewerEmail: String
  }

  type Meta {
    createdAt: String
    updatedAt: String
    barcode: String
    qrCode: String
  }

  type Product {
    id: ID!
    title: String!
    description: String
    category: String
    price: Float
    discountPercentage: Float
    rating: Float
    stock: Int
    tags: [String]
    brand: String
    sku: String
    weight: Float
    dimensions: Dimensions
    warrantyInformation: String
    shippingInformation: String
    availabilityStatus: String
    reviews: [Review]
    returnPolicy: String
    minimumOrderQuantity: Int
    meta: Meta
    images: [String]
    thumbnail: String
  }

  input AddProductInput {
    title: String!
    description: String
    category: String
    price: Float
    discountPercentage: Float
    rating: Float
    stock: Int
    tags: [String]
    brand: String
    sku: String
    weight: Float
    warrantyInformation: String
    shippingInformation: String
    availabilityStatus: String
    returnPolicy: String
    minimumOrderQuantity: Int
    images: [String]
    thumbnail: String
  }

  extend type Query {
    products: [Product]
    product(id: ID!): Product
  }

  extend type Mutation {
    addProduct(input: AddProductInput!): Product
  }
`;
export default productTypeDefs;
