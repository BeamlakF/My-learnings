const { gql } = require('apollo-server');

const typeDefs = gql`
  # User type
  type User {
    id: ID!
    name: String!
    age: Int
    posts: [Post!]!
  }

  # Post type
  type Post {
    id: ID!
    title: String!
    author: User!
  }

  # Queries
  type Query {
    users: [User!]!
    user(id: ID!): User
    posts: [Post!]!
  }

  # Mutations
  type Mutation {
    createUser(name: String!, age: Int): User!
    createPost(title: String!, userId: ID!): Post!
  }
`;

module.exports = typeDefs;
